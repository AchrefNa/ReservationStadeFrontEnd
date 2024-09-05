import { Button, Input, Select, FormControl, FormLabel } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const StadiumReservation = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const location = useLocation();
  const { stadium } = location.state;
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [reservationDate, setReservationDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [status, setStatus] = useState(''); // Statut de la réservation, par exemple pour afficher des messages

  const availableTimes = [
    '09:00',
    '10:30',
    '12:00',
    '13:30',
    '15:00',
    '16:30',
    '18:00',
    '19:30',
    '21:00',
    '22:30'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const [hours, minutes] = selectedTime.split(':');
    const selectedDateTime = new Date(reservationDate);
    selectedDateTime.setUTCHours(hours);
    selectedDateTime.setUTCMinutes(minutes);
    selectedDateTime.setUTCSeconds(0);
    selectedDateTime.setUTCMilliseconds(0);

    const formattedDateTime = selectedDateTime.toISOString();

    const reservation = {
      user: { id: currentUser?.id },
      stade: { id },
      reservationDate: formattedDateTime,
    };

    axios.post('http://localhost:8060/api/reservations', reservation)
      .then(response => {
        setStatus('Reservation created successfully!');
        // Rediriger vers la page de paiement, vous pouvez aussi passer l'ID de la réservation
        navigate(`/payment/${response.data.id}`);
      })
      .catch(error => {
        setStatus('There was an error creating the reservation!');
        console.error('There was an error creating the reservation!', error);
      });
  };

  return (
    <div>
      <h1>Réserver {stadium.name}</h1>
      <p>Location: {stadium.location}</p>
      <p>Capacity: {stadium.capacity}</p>
      
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Date:</FormLabel>
          <Input
            type="date"
            value={reservationDate}
            onChange={e => setReservationDate(e.target.value)}
          />
        </FormControl>
        
        {reservationDate && (
          <FormControl isRequired>
            <FormLabel>Available Times:</FormLabel>
            <Select value={selectedTime} onChange={e => setSelectedTime(e.target.value)}>
              <option value="">Select a time</option>
              {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </Select>
          </FormControl>
        )}

        <Button type="submit" disabled={!selectedTime}>Reserve</Button>
      </form>

      {status && <p>{status}</p>} {/* Affichage du statut de la réservation */}
    </div>
  );
};

export default StadiumReservation;

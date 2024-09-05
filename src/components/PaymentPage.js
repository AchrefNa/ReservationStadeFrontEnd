import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const { reservationId } = useParams();
console.log(reservationId)
  const handlePayment = () => {
    axios.post(`http://localhost:8060/api/reservations/${reservationId}/pay`)
      .then(response => {
        alert('Payment successful!');
        navigate('/reservations'); // Rediriger vers la liste des réservations ou une autre page
      })
      .catch(error => {
        console.error('There was an error processing the payment!', error);
        alert('Payment failed. Please try again.');
      });
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <Button onClick={handlePayment}>Pay Now</Button>
    </div>
  );
};

export default PaymentPage;

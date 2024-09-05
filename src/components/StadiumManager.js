import React, { useState, useEffect } from 'react';
import StadiumForm from './StadiumForm';
import StadiumList from './StadiumList';
import axios from 'axios';
import authHeader from '../services/auth-header';


const StadiumManager = () => {
  const [stadiums, setStadiums] = useState([]);
  const [stadiumToEdit, setStadiumToEdit] = useState(null);

  useEffect(() => {
    fetchStadiums();
  }, []);

  const fetchStadiums = async () => {
    try {
      const response = await axios.get('http://localhost:8060/api/stades', {
        headers: authHeader(), // Inclure l'en-tête d'authentification
      });
      setStadiums(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des stades:', error);
    }
  };

  const addOrEditStadium = async (stadium) => {
    try {
      if (stadiumToEdit) {
        await axios.put(`http://localhost:8060/api/stades/${stadiumToEdit.id}`, stadium, {
          headers: {
            'Content-Type': 'application/json',
            ...authHeader(), // Inclure l'en-tête d'authentification
          },
        });
      } else {
        console.log(stadium)
        await axios.post('http://localhost:8060/api/stades/add',
           stadium, 
           { headers: authHeader() });
      }
      fetchStadiums(); // Rafraîchir la liste après modification ou ajout
      setStadiumToEdit(null); // Réinitialiser le formulaire après soumission
    } catch (error) {
      console.error(`Erreur lors de l'ajout ou de la modification du stade:`, error);
    }
  };

  const editStadium = (stadium) => {
    setStadiumToEdit(stadium);
  };

  const deleteStadium = async (id) => {
    try {
      await axios.delete(`http://localhost:8060/api/stades/${id}`, {
        headers: authHeader(), // Inclure l'en-tête d'authentification
      });
      fetchStadiums(); // Rafraîchir la liste après suppression
    } catch (error) {
      console.error('Erreur lors de la suppression du stade:', error);
    }
  };

  return (
    <div>
      <h1>Gestion des Stades</h1>
      <StadiumForm onSubmit={addOrEditStadium} existingStadium={stadiumToEdit} />
      <StadiumList stadiums={stadiums} onEdit={editStadium} onDelete={deleteStadium} />
    </div>
  );
};

export default StadiumManager;

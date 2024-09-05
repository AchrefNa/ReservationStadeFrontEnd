import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authHeader from "../services/auth-header";
import { Grid, Link } from "@chakra-ui/react";

import Card from "./Card";

const StadiumHome = () => {
  const [stadiums, setStadiums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStadiums();
  }, []);

  const fetchStadiums = async () => {
    try {
        
      const response = await axios.get("http://localhost:8060/api/stades", {
        headers: authHeader(),
      });
      console.log(response)
      setStadiums(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des stades:", error);
    }
  };

  const handleStadiumClick = (stadium) => {
    navigate(`/reservation/${stadium.id}`, { state: { stadium } });
  };

  return (
    <div>
      <Grid
        my="3"
        rowGap="4"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      >
        {
          stadiums.map((stadium) =>
            
              <Link onClick={() => handleStadiumClick(stadium)}>
                        <Card stadium={stadium} />
              </Link>
                
             
            
          )}
      </Grid>
    
      
    </div>
  );
};

export default StadiumHome;

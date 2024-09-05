import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import StadiumManager from "./StadiumManager";
import StadiumHome from "./StadiumHome";




const Home = () => {
  const [content, setContent] = useState("");
  const [filterType, setFilterType] = useState("offre");
  const [selectedLocation, setSelectedLocation] = useState("");
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
  const handleFilterChange = (type) => {
    setFilterType(type);
  };
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="container">
      <header className="jumbotron">
        {/* <h3>{content}</h3> */}
        
      
        <StadiumHome/>
      </header>
      
    </div>
  );
};

export default Home;

import { Button } from "@chakra-ui/react";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const StadiumForm = ({ onSubmit, existingStadium }) => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    user: { id: currentUser?.id },
    name: "",

    location: "",
  });

  useEffect(() => {
    if (existingStadium) {
      setFormData({
        user: { id: currentUser?.id },
        name: existingStadium.name,
        location: existingStadium.location,
      });
    }
  }, [existingStadium, currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      user: { id: currentUser?.id }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <MDBInput
          wrapperClass="mb-4"
          label="Nom du stade "
          size="lg"
          id="form1"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        
        <MDBInput
          wrapperClass="mb-4"
          label="Emplacement"
          size="lg"
          id="form1"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>
      <div className="d-flex justify-content-end pt-3">
        <Button size="lg" type="submit" variant="solid">
          {existingStadium ? "Modifier" : "Ajouter"} Stade
        </Button>
      </div>
    </form>
  );
};

export default StadiumForm;

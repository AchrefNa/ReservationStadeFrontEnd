import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";
import { Button } from "@chakra-ui/react";

const Register = () => {
  const [successful, setSuccessful] = useState(false);
 // const [selectedImage, setSelectedImage] = useState('');  Ajout du state pour l'image sélectionnée

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  

  const initialValues = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
   //file: Yup.mixed().required("Please select a photo."),
    phoneNumber: Yup.string()
      .matches(/^\d{8}$/, "Phone number must be 8 digits.")
      .required("This field is required!"),
  });/*

  const handleImageChange = (event) => {
    console.log("image change");
    const img = event.target.files[0];
    
    setSelectedImage(img); // Mettre à jour l'image sélectionnée
 
  };*/
  
  const handleRegister = (values) => {
    const { username, email, password, phoneNumber } = values;


    setSuccessful(false);
   

    dispatch(register({ username, email, password, phoneNumber}))
      .unwrap()
      .then(() => {
    
   
    
         
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
        
      });
    
  };
  return (
    <div className="col-md-12 signup-form">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Pseudo</label>
                  <Field name="username" type="text" className="form-control" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <Field name="email" type="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Numéro de téléphone</label>
                  <Field
                    name="phoneNumber"
                    type="text"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                

                <div >
                  <Button type="submit" className="btn btn-primary btn-block" my={4}>Inscription</Button>
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>

      {message && (
        <div className="form-group">
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;


import { Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FormContainer = styled(Container)`
  margin-top: 40px;
  max-width: 600px;
  width: 50%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Typography)`
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const SubmitButton = styled(Button)`
  display: block;
  width: 100%;
`;

interface IFormInputs {
  name: string;
  phone: string;
  email: string;
}

const EditUser = () => {
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInputs>();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // Fetch user details and set form values
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        const user = response.data;
        setValue("name", user.name);
        setValue("phone", user.phone);
        setValue("email", user.email);
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
        toast.error("Failed to fetch user details.");
      });
  }, [id, setValue]);

  const onSubmit = (formData: IFormInputs) => {
    console.log(formData);
    setIsLoading(true);

    axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`, formData)
      .then((response: any) => {
        console.log("Successful Response");
        console.log(response.data);
        toast.success("User Updated Successfully!");
      })
      .catch((error) => {
        console.log("Error Response");
        console.log(error);
        toast.error("Sorry! Some Error occurred! Try again later!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <FormContainer>
      <Helmet>
        <title>EditUser Page</title>
      </Helmet>
      <Title variant="h4">Edit User</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextField
            variant="outlined"
            fullWidth
            {...register('name', { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            variant="outlined"
            fullWidth
            {...register('phone', {
              required: "Phone is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits"
              }
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            variant="outlined"
            fullWidth
            {...register('email', {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address"
              }
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </FormGroup>

        <SubmitButton variant="contained" color="primary" size="large" type="submit">
          {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Update User'}
        </SubmitButton>
      </form>
      <ToastContainer />
    </FormContainer>
  );
};

export default EditUser;

import { Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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

const CreateUser = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (formData: IFormInputs) => {
    console.log(formData);
    setIsLoading(true);

    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((response: any) => {
        console.log("Successful Response");
        console.log(response.data);
        toast.success("User Saved Successfully!");
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
      <Title variant="h4">Create User</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            {...register('name', { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </FormGroup>

        <FormGroup>
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            {...register('phone', {
              required: "Phone is required",
              pattern: {
                value: /^\+?[1-9]\d{1,14}$/,
                message: "Phone number must be in a valid format"
              }
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        </FormGroup>


        <FormGroup>
          <TextField
            label="Email"
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
          {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Create User'}
        </SubmitButton>
      </form>
      <ToastContainer />
    </FormContainer>
  );
};

export default CreateUser;


// import { Alert, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
// import styled from "@emotion/styled";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useState } from "react";

// const FormContainer = styled(Container)`
//   margin-top: 40px;
//   max-width: 600px;
//   width: 50%;
//   padding: 20px;
//   background-color: #f9f9f9;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled(Typography)`
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const SubmitButton = styled(Button)`
//   display: block;
//   width: 100%;
// `;

// interface IFormInputs{
//   name: string;
//   phone: number;
//   email:  string;
// }

// const CreateUser = () => {
//   const { register , handleSubmit, formState: { errors },} = useForm<IFormInputs>(); // react use form, for forms
//   const [isSaved, setIsSaved] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // loading state
//   const [isError, setIsError] = useState(false); // error state
//   const onSubmit = (formData: IFormInputs)=>{
//     console.log(formData); // to display form data that we enter in input boxes
//     setIsLoading(true);
//   // How to connect to the backend rest api
//   // 1. What is the backend api url? https://jsonplaceholder.typicode.com/users - simple to use fake backend for testing
//   // 2. What is the HTTP method? Post
//   // 3. What is the REST API Client? npm i axios
//   // show loader, remove loader, button disabling untill response is submitted -> TODO
//     axios
//       .post("https://jsonplaceholder.typicode.com/users")
//       .then((response: any) => {
//         // success
//         // console.log(response);
//         console.log("Successful Response");
//         console.log(response.data);
//         setIsSaved(true);
//         setIsLoading(false);
//         setTimeout(() => setIsSaved(false), 2000); // Hide success message after 30 seconds
//       })
//       .catch((error) => {
//         // error
//         console.log("Error Response");
//         console.log(error);
//         setIsError(true);
//       })
//       .finally(() => {
//         // finally
//         console.log("It is over");
//         setIsLoading(false);
//       });
//   };

//   return (
//     <FormContainer>
//       <Title variant="h4">Create User</Title>
//       <form onSubmit={handleSubmit(onSubmit)} > 
//         {/* to submit our data */}
//       <FormGroup>
//         <TextField 
//           label="Name" 
//           variant="outlined" 
//           fullWidth 
//           {...register('name', { required: " Name is required "})} 
//           error={!!errors.name}
//           helperText={errors.name?.message}
//           />
//         {/* {...register('name')} -> gets name */}
//       </FormGroup>

//       <FormGroup>
//         <TextField 
//         label="Phone" 
//         variant="outlined" 
//         fullWidth  
//         {...register('phone',{ required: " Phone is required "})}
//         error={!!errors.phone}
//         helperText={errors.phone?.message}
//         />
        
//       </FormGroup>

//       <FormGroup>
//         <TextField 
//         label="Email" 
//         variant="outlined" 
//         fullWidth  
//         {...register('email',{ required: " Email is required "})}
//         error={!!errors.email}
//         helperText={errors.email?.message}
//         />
//       </FormGroup>

//       <SubmitButton variant="contained" color="primary" size="large" type="submit">
//           {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Create User'}
//       </SubmitButton>

//       {
//         isSaved &&(
//           <Alert severity="success">
//               User Saved Successfully!
//           </Alert>
//         )
//       }
//       {
//         isError && (
//           <Alert severity="error">
//             Sorry! Some Error occured! Try again later!
//           </Alert>
//         )
//       }

//       </form>
//     </FormContainer>
//   );
// };

// export default CreateUser;
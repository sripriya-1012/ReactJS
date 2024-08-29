import { Button, Container, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

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

const CreateUser = () => {
  return (
    <FormContainer>
      <Title variant="h4">Create User</Title>
      <FormGroup>
        <TextField label="Name" variant="outlined" fullWidth required />
      </FormGroup>

      <FormGroup>
        <TextField label="Phone" variant="outlined" fullWidth required />
      </FormGroup>

      <FormGroup>
        <TextField label="Email" variant="outlined" fullWidth required />
      </FormGroup>

      <SubmitButton variant="contained" color="primary" size="large">
        Create User
      </SubmitButton>
    </FormContainer>
  );
};

export default CreateUser;
import { Box, Button, TextField } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { useTodosStore } from '../../store/useTodoStore';

const AddTodo = () => {
  const { addTodo } = useTodosStore();
  const { register, handleSubmit, reset } = useForm<
    { title: string } // Define the type for your form data
  >();

  const onSubmit = async (data: { title: string }) => {
    try {
      await addTodo(data);
      reset(); // Reset the form after successful submission
      toast.success("Todo added successfully!");
    } catch (error: any) {
      toast.error("Error adding todo!");
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          placeholder="Add Todo"
          {...register('title', { required: true })}
        />
        <Button variant="contained" type="submit">
          Add Todo
        </Button>
      </form>
      <ToastContainer />
    </Box>
  );
};

export default AddTodo;

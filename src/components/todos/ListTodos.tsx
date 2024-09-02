import { Box, List, ListItem, ListItemText } from '@mui/material'

const ListTodos = () => {
  return (
    <Box>
      <List dense={true}>
        
          <ListItem>
            <ListItemText primary="my Todo 1" />
          </ListItem>
      </List>
    </Box>
  );
}

export default ListTodos
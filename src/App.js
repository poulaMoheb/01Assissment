import logo from './logo.svg';
import './App.css';
import { Container, CssBaseline } from '@mui/material';
import Greeting from './components/Greeting';
import { createTheme } from '@mui/material/styles';
import UserForm from './components/UserForm';
import { useState } from 'react';
import UsersTable from './components/UsersTable';

function App() {
  const [currentUser,setCurrentUser]=useState()
  const [usersList,setUsersList]=useState([])

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <Container className='container MuiFormControl-fullWidth	' maxWidth="lg"
    maxHeight="x-lg" color="secondary">
      <Greeting currentUser={currentUser} setCurrentUser={setCurrentUser}
                usersList={usersList} setUsersList={setUsersList}/>
      <UserForm currentUser={currentUser} setCurrentUser={setCurrentUser}
                usersList={usersList} setUsersList={setUsersList}/>
      <UsersTable usersList={usersList} setUsersList={setUsersList}/>
      <CssBaseline />
    </Container>
  );
}

export default App;

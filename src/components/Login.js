import { Box, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import { Context } from "../index";
import firebase from 'firebase/compat/app';
const Login = () => {
  const { auth } = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
    console.log(user);
  }

  return (
    <Container>
      <Grid container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid style={{ width: 400, background: 'lightgray' }}
          container
          alignItems={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button onClick={login} variant="outlined">Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login;
import { Container } from "@mui/material";
import "./App.css";
import Header from "./component/header/Header";
import Login from "./component/login/Login";

function App() {
  return (
    <Container maxWidth="sm">
      <Header></Header>
      <Login></Login>
      
    </Container>
  );
}

export default App;

import "./App.css";
import Home from "./pages/Home";
import tw from "twin.macro";
const Container = tw.div`font-poppins`;
function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;

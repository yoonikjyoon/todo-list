import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Container from "./components/Container";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </DarkModeProvider>
  );
}

export default App;

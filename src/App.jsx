import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="app-wrap">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

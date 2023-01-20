import Header from "./components/Header/Header";
// import Main from "./components/DoNotOpen/Main";
// import Footer from "./components/DoNotOpen/Footer";
// import Container from "./components/DoNotOpen/Container";
// import { DarkModeProvider } from "./context/DarkModeContext";
// import { TodoListProvider } from "./context/TodoListContext";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    // <DarkModeProvider>
    //   <Container>
    //     <TodoListProvider>
    //       <Header />
    //       <Main />
    //       <Footer />
    //     </TodoListProvider>
    //   </Container>
    // </DarkModeProvider>
    <>
      <DarkModeProvider>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </>
  );
}

export default App;

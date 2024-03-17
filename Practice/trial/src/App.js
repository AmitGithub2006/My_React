import Main from "./components/Main";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import Phone from "./components/Phone";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Search from "./components/Search";
import Load from "./components/Load";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Main />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/form" element={<Form />} />
        <Route path="/search" element={<Search />} />
        <Route path="/load" element={<Load />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
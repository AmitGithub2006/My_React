import Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Main from "./components/Main";
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Service";
import { Register } from "./pages/Register";
import { Error } from "./pages/Error";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Logout } from "./pages/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services" element={<Services />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/logout" element={<Logout />} />
         <Route path="*" element={<Error />} />
       </Routes>
     <footer />
    </BrowserRouter>
  );
};

export default App;

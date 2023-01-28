import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./Pages/Add/Add";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/Add" element={<Add/>}/>
   <Route path="/Details/:id" element={<Details/>}/>
   

</Routes>

<Footer/>
</BrowserRouter>

  
  );
}

export default App;
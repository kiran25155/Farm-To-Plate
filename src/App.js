import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Aboutus from "./routes/Aboutus";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Profile from "./routes/Profile";
import Shoppage from "./routes/Shoppage";
import Confirmemail from "./routes/Resetpassword/Confirmemail";
import Resetpassword from "./routes/Resetpassword/Resetpassword";
import { Route, Routes} from "react-router-dom";
import SeasonFruits from "./components/SeasonFruits";
import "./App.css"
function App() {
  
  var date = new Date();
        let currentMonth=(date.getMonth() + 1);
  return (
    <>
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/shoppage" element={<Shoppage />} />
      <Route path="/confirmemail" element={<Confirmemail />} />
      <Route path="/resetpassword" element={<Resetpassword />} />
      <Route path="/seasonFruits" element={<SeasonFruits getData={currentMonth}/>}/>
    </Routes>
    </div>
    </>
  );
}


export default App;

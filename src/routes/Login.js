import React, { useState } from "react"; //to capture the value of the user input
import Footer from "../components/Footer";
import Navbar1 from '../components/Navbar1'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const handleSubmit = (e) => { // capture the value when the user submit the form
        e.preventDefault(); // without this when th eoage get reloaded you lose the state
        console.log(email);
    }    
    
    return (
        
        <>
        <div><Navbar1/></div>
        <form onSubmit={handleSubmit}> 
            <label htmlFor="email">email </label>
            <input value={email} type= "email" placeholder = "youremail@gmail.com" id= "email" name ="email" />
            <label htmlFor="password">password </label>
            <input value={pass} type= "password" placeholder = "********" id= "password" name ="password" />
            <button type="submit">Log in</button>
        </form>
        <button>Don't have an account? Registe Here </button>
        
        <Footer/>
        </>
        
    )
} 
export default Login
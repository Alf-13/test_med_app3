import React, { useState } from 'react';
import './Sign_Up.css'
import { useNavigate } from 'react-router-dom'; //import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json(); // Parse the response JSON

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            navigate("/");
            window.location.reload(); // Refresh the page
        } else { 
            if (json.errors) { 
                const errorMessages = json.errors.map(error => error.msg).join(', '); 
                setShowerr(errorMessages); 
            } else { 
                setShowerr(json.error); 
            } 
        } 
    };

    return (
        <div className="container" style={{marginTop:'5%'}}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}> 
                        <div className="form-group"> 
                            <label htmlFor="name">Name</label> 
                            <input 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            type="text" 
                            name="name" 
                            id="name" 
                            className="form-control" 
                            placeholder="Enter your name" 
                            aria-describedby="nameHelp" 
                            /> 
                            </div> 
                            <div className="form-group"> 
                            <label htmlFor="email">Email</label> 
                            <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Enter your email" 
                            aria-describedby="emailHelp" 
                            /> 
                            </div> 
                            <div className="form-group"> 
                            <label htmlFor="phone">Phone</label> 
                            <input 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            type="tel" 
                            name="phone" 
                            id="phone" 
                            className="form-control" 
                            placeholder="Enter your phone number" 
                            aria-describedby="phoneHelp" 
                            /> 
                            </div> 
                            <div className="form-group"> 
                            <label htmlFor="password">Password</label> 
                            <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Enter your password" 
                            aria-describedby="passwordHelp" 
                            /> 
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}
                            </div>} 
                        </div> 
                        <button type="submit" className="btn btn-primary">Sign Up</button> 
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
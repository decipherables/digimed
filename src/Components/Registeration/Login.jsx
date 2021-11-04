import React, { useState } from 'react'
import './Login.css'
import { Google } from '@mui/icons-material';
import { Link } from "react-router-dom";

export default function Login(props) {
    const credentials = {
        email: 'odamejoshua37@gmail.com',
        password: 'Joe123'
    }
  


    const [inputs, setInputs] = useState({ 
        email: '', 
        password: '', 
        status: '' });

    const [logged, setLogged] = useState(false);
    const submitted = () => {
        if (inputs.email == credentials.email && inputs.password == credentials.password) {
            alert(`Your role is ${inputs.status}, click okay to proceed`);
            setLogged(true);
            localStorage.setItem('logged', 'true')
        } else {
            alert('Wrong Credentials !')
            setLogged(false);
            localStorage.setItem('logged', 'false')
        }
    }

    return (
        <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               

            <div class="col-md-6 d-none d-md-flex bg-image2"></div>

                
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">

                       
                        <div class="container">
                            <div class="row">
                                <div class=" mx-auto">
                                    <h3 class="display-4">Welcome back to </h3>
                                    <p class="text-muted mb-4">DigiMed</p>
                                    <form>
                                       
                                        <div class="form-group mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>

                                        <div class="form-group mb-3">
                                        <select class="form-control rounded-pill border-0 shadow-sm px-4"
                                            name="sector"
                                            id="sector"
                                        >
                                            <option>Sector</option>
                                            <option value="Hospital">Hospital</option>
                                            <option value="Doctor">Doctor</option>
                                            <option value="Pharmacy">Pharmacy</option>
                                            <option value="Sonography">Sonography</option>
                                        </select>
                                        </div>
                                       
                                        <div class="custom-control custom-checkbox mb-3">
                                            <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                            <label for="customCheck1" class="custom-control-label px-2"> Remember Password</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block shadow-sm px-5">Login</button> <br />
                                        <div class="text-center d-flex justify-content-between mt-4 ml-5 "><p>Not a Member? 
                                        <Link to="/" class="mx-2">
                                                Sign Up
                                        </Link></p>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>
      </div>

    )
}

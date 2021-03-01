import React, { Component } from "react";
import axios from "axios";
import GoogleButton from 'react-google-button'
import {Link} from "react-router-dom"
export default class Login extends Component {
    state = {
        email:"",
        password:"",
        
    }
  
     Login= ()=>{
        try { const res =  axios.post("http://localhost:5000/users/login",data, {headers:headers, withCredentials:true})
        console.log(res.data)

          
        localStorage.setItem("accessToken", res.data.accessToken) 
        
            
        } catch (error) {
            console.log(error)
            
        }

    }
    render() {
      
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event)=>this.setState({email: event.target.value})} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event)=>this.setState({password: event.target.value})}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <Link to = "http://localhost:5000/users/googleLogin">
                <GoogleButton className="text-center mt-3 ml-5"
//   onClick={() => {this.props.history.push("http://localhost:5000/users/googleLogin") }}

/>
</Link>
            </form>
        );
    }
}

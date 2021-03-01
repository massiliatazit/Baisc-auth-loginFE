import React, { Component } from "react";

import axios from "axios"


export default class SignUp extends Component {
    state = {
        email:"",
        password:"",
        name:"",
        surname:"",
        role:"",
    }
     data = {...this.state}
     Register= ()=>{
        try { const res =  axios.post("http://localhost:5000/users/register",{data}, {headers:headers,withCredentials:true})
        console.log(res.data)

          
        localStorage.setItem("accessToken", res.data.accessToken)
        
            
        } catch (error) {
            console.log(error)
            
        }

    }
    render() {
      
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={(event)=>this.setState({name: event.target.value})} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Surname" onChange={(event)=>this.setState({surname:event.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Role</label>
                    <input type="text" className="form-control" placeholder="Enter role" onChange={(event)=>this.setState({role: event.target.value})} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event)=>this.setState({email: event.target.value})} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event)=>this.setState({password: event.target.value})}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"onClick={()=>{Register()}}>Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
          
<a href="http://localhost:5000/users/googleLogin">google login?</a>
            </form>
        );
    }
}
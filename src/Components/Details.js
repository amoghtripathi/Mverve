import React, { Component } from 'react'
import './CSS/styles.css'
import banner from "./img/banner.png";




class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            Mobile: "",
            age:"",
            email: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    agehandler = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    agehandler = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    mobilehandler = (event) =>{
        this.setState({
            Mobile: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            age: "",
            email: "",
            Mobile: "",
            password: "",
        })
     event.preventDefault()
        
    }

    handlereset = (event) => {
        
        this.setState({
            firstName: "",
            lastName: "",
            password: "",
            age: "",
            email: "",
            Mobile: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div className="parent">
                <div className="banner">
                    <img src={banner} alt="MVERVE" />
                </div>

                <div className="details">
                <form onSubmit={this.handleSubmit}>
                    <h1>Create an account</h1>
                    
                    <div className="personaldetails">
                        <label for="fname">FirstName </label> 
                        <input type="text" className="name" id="fname"  
                        onChange={this.firsthandler} placeholder="FirstName" /><br />

                        <label>LastName </label> 
                        <input type="text" className="name" 
                        onChange={this.lasthandler} placeholder="LastName" /><br />

                        <label>Age </label> 
                        <input type="number" className="name"   min="1" max="100" placeholder="Age(1-100)"
                        onChange={this.agehandler}  /><br />
                    </div>
                    
                    <div className="contact">
                        <label>Mobile Number </label>
                        <input type="tel" pattern="[0-9]{10}" placeholder="xxxxx xxxxx"
                        onChange={this.mobilehandler} className="name"  required /><br />

                        <label>Email </label>
                        <input type="email" className="name" 
                        onChange={this.emailhandler} /><br />
                    </div>

                    <div className="description">
                        <label>Description</label>
                        <textarea rows="5" cols="80" maxLength="120" />
                        
                    </div>
                    
                    <div className="pwd">
                        <label>Password </label> 
                        <input type="password" className="name"
                        onChange={this.passwordhandler} placeholder="Password" />

                        <label>Confirm Password </label> 
                        <input type="password"  className="name" placeholder=" Confirm Password" /><br />
                    </div>
                    
                    <button className="btt" onClick={this.handlereset}><span>RESET </span></button>
                    <button className="bttn" type="submit" ><span>SUBMIT </span></button>
                  
                </form>
                </div>
                
            </div>

          
            
        )
    }
}

export default Details;
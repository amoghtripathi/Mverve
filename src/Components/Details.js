import React, { Component } from 'react'
import './CSS/styles.css'




class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            cnfpassword: "",
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
    cnfpasswordhandler = (event) => {
        this.setState({
            cnfpassword: event.target.value
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
            cnfpassword: "",
        })
     event.preventDefault()
        
    }

    handlereset = (event) => {
        
        this.setState({
            firstName: "",
            lastName: "",
            password: "",
            cnfpassword: "",
            age: "",
            email: "",
            Mobile: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div className="container">
            <div className="header">
                <h2>Create an account</h2>
            </div>
        
        <form  className="form" >
            <div className="personalDetails">
                <div className="form-control psndtls"> 
                    <label htmlFor="Fname">First Name</label>
                    <input type="text" id="Fname"
                        onChange={this.firsthandler} value={this.state.firstName} placeholder="First Name" />
                </div>
                <div className="form-control psndtls">
                    <label htmlFor="Lname">Last Name</label>
                    <input type="text" id="Lname" 
                        onChange={this.lasthandler} value={this.state.lastName} placeholder="Last Name" />
                </div>
                <div className="form-control agedtls">
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" placeholder="18 - 100" 
                        onChange={this.agehandler} value={this.state.age} min="18" max="100" />
                </div>
            </div>
            <div className="contact">
                <div className="form-control cntctdtls">
                    <label htmlFor="mobnum">Mobile Number</label>
                    <input type="tel" id="mobnum" placeholder="xxxxx xxxxx" 
                        onChange={this.mobilehandler} value={this.state.Mobile} pattern="[0-9]{10}" />
                </div>
                <div className="form-control cntctdtls">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"
                        onChange={this.emailhandler} value={this.state.email} placeholder="abc@xxx.zzz" />
                </div>
            </div>
            <div className="descpt">
                <div className="form-control textarea">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="5" cols="80" maxLength="120" />
                </div>
            </div>
            <div className="private">
                <div className="form-control cntctdtls">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" 
                    onChange={this.passwordhandler} value={this.state.password} />
                </div>
                <div className="form-control cntctdtls">
                    <label htmlFor="cnfpassword">Confirm Password</label>
                    <input type="password" id="cnfpassword" 
                    onChange={this.cnfpasswordhandler} value={this.state.cnfpassword} />    
                </div>
            </div>
            
            
            <button className="btt" onClick={this.handlereset}><span>RESET </span></button>
            <button onClick={this.handleSubmit} className="bttn" type="submit" ><span>SUBMIT </span></button>
        
        </form>
        </div>
        
        )
    }
}

export default Details;
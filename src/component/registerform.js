import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';





function Registerform(){
    return(
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
        <form>
            <h2 className="mb-4">RegisterForm</h2>
            <div className="form1">
            <label htmlFor="name" className="form-label">Name:</label>
            <input name="name" type="name" placeholder="name" className="form-control"/><br/>
            <label htmlFor="name" className="form-label">Age:</label>
            <input name="name" type="age" placeholder="gmail" className="form-control"/><br/>
            <label htmlFor="name" className="form-label">Gender:</label>
            <input name="name" type="name" placeholder="Gender" className="form-control"/><br/>
            <label htmlFor="name" className="form-label">Email:</label>
            <input name="name" type="gmail" placeholder="gmail" className="form-control"/><br/>
            </div><br/>
           <button type="button" className="btn btn-primary">Register</button>
        </form>
    </div>
    </div>
    </div>
    );

}
export default Registerform;


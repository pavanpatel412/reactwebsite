import React from "react";

function Script() {
  const closePopup = ()=>{
    const loginPopup = document.getElementById('loginPopup;');
    const Signinpopup = document.getElementById('signinpopup');
    if(loginPopup){
      loginPopup.style.display = "none";
    }
    if(Signinpopup){
      Signinpopup.style.display = "none";
    }
  };
  

function submitLogin() {
  // Add your login logic here
  alert('Login Successfully!');
  closePopup();
}


function ClosePopup() {
  document.getElementById('Signinpopup').style.display = 'none';
  closePopup();
}

function submitSignUp() {
  // Add your signup logic here
  alert('SignUp Successfully!');
  ClosePopup();
};
  return (
    <div>
      <div id="loginPopup" className="popup">
        <div className="popup-content">
          <span className="close" onClick={closePopup}>&times;</span>
          <h2>Login</h2>
          <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required /><br /><br />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required /><br /><br />

            <button type="button" onClick={submitLogin}>Login</button>
            <button type="button" id="SignUpbutton">SignUp</button>
          </form>
        </div>
      </div>

      <div id="Signinpopup" className="popup1">
        <div className="popup-content1">
          <span className="close" onClick={closePopup}>&times;</span>
          <h2>SignUp</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required /><br /><br />

            <label htmlFor="age">Age:</label>
            <input type="password" id="age" name="age" required /><br /><br />

            <label htmlFor="gender">GENDER:</label>
            <input type="password" id="gender" name="gender" required /><br /><br />

            <label htmlFor="mobileNo">MobileNo:</label>
            <input type="password" id="mobileNo" name="mobileNo" required /><br /><br />

            <button type="button" onClick={submitSignUp}>SignUp</button>
          </form>
        </div>
      </div>

      <script src="loginPopup.js"></script>
    </div>
  );
}

export default Script;

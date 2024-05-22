import React from 'react';
import Header from "./Header";

const Login = () => {

    const login = (event) => {
        event.preventDefault();

        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;

        let raw = localStorage.getItem("users");
        let users = JSON.parse(raw);

        function isEmailExist(email){
            return users.some((user) => user.email === email);
        }

        if (isEmailExist(email)) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email) {
                    if(users[i].pass === pass){
                        alert("Ви увійшли");

                        sessionStorage.setItem('logged', '1');
                        sessionStorage.setItem('first_name', users[i].first_name);
                        sessionStorage.setItem('last_name', users[i].last_name);
                        sessionStorage.setItem('email', users[i].email);
                    }
                    else{
                        alert("Невірний пароль");
                        break;
                    }
                }
            }
        }
        else{
            alert("Такий email не зареєстрований");
        }
    };

    return (
        <div>
            <Header/>
            <main>
                <form onSubmit={login}>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" required/>

                    <label htmlFor="password">Your Password</label>
                    <input type="password" id="pass" name="pass" required/>

                    <input type="submit" value="Login"/>
                </form>
            </main>
        </div>
    );
};

export default Login;

import React from 'react';
import './stylies/style.css'
import './stylies/style_article.css'
import './stylies/sign.css'
import Header from "./Header";

const Sign = () => {

    const registration = (event) => {
        event.preventDefault();

        let first_name = document.getElementById("first_name").value;
        let last_name = document.getElementById("last_name").value;
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;

        let raw = localStorage.getItem("users");
        let users = raw ? JSON.parse(raw) : [];

        function isEmailExist(email){
            return users.some((user) => user.email === email);
        }

        if (isEmailExist(email)) {
            alert("Такий email вже зареєстрований");
            return;
        }
        else{
            let newUser = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                pass: pass
            };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Ви успішно зареєструвалися");
        }
    };

    return (
        <div>
            <Header/>
            <main>
                <form onSubmit={registration}>
                    <label htmlFor="name">Your First Name</label>
                    <input type="text" id="first_name" name="first_name" required/>

                    <label htmlFor="name">Your Last Name</label>
                    <input type="text" id="last_name" name="last_name" required/>

                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" required/>

                    <label htmlFor="password">Create Password</label>
                    <input type="password" id="pass" name="pass" required/>

                    <input type="submit" value="Register"/>
                </form>
            </main>
        </div>
    );
};

export default Sign;

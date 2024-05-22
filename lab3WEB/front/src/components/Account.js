import React from 'react';
import './stylies/style.css';
import './stylies/style_article.css';
import Header from "./Header";


const Account = () => {

    return (
        <div><Header/>
        <main>
            <table>
                <tbody>
                <tr>
                    <td>First Name</td>
                    <td id="first_name">-</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td id="last_name">-</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td id="email">-</td>
                </tr>
                </tbody>
            </table>
        </main>
        </div>
    );
};

export default Account;

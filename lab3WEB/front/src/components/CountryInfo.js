import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './stylies/style_article.css';
import './stylies/style.css';
import japan from './images/japan.jpg';
import australia from './images/australia.jpg';
import germany from './images/germany.jpg';
import Header from "./Header";

const CountryInfo = () => {
    const { country } = useParams(); // Get the country from URL parameters
    const [comments, setComments] = useState([]);
    const [info, setInfo] = useState({ date: '', description: '' });
    const [image, setImage] = useState(null);

    useEffect(() => {
        showCom();
        fetchInfo();
    }, [country]);

    const showCom = () => {
        const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
        setComments(savedComments);
    };

    const saveCom = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const comment = event.target.comment.value;

        const newComment = { name, email, comment, date: new Date().toISOString() };

        const updatedComments = [newComment, ...comments];
        setComments(updatedComments);

        localStorage.setItem('comments', JSON.stringify(updatedComments));

        event.target.reset();
    };

    const fetchInfo = async () => {
        try {
            const response = await fetch(`http://localhost:5000/info/${country}`);
            if (response.ok) {
                const data = await response.json();
                setInfo(data);
                setImage(country === 'japan' && japan);
                setImage(country === 'germany' ? germany : australia);

            } else {
                console.error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching info:', error);
        }
    };

    return (
        <>
            <div>
                <Header />
                <p>Date: {info.date}</p>
            </div>

            <main>
                {image && <img src={image} alt={country} />}
                <p>{info.description}</p>
            </main>

            <footer>
                <div id="comArea" className="com-area">
                    <p style={{ color: '#333' }}>Comments</p>
                    <div className="comments-container">
                        {comments.map((comment, index) => (
                            <div key={index} className="comment" style={{ color: 'black', textAlign: 'left' }}>
                                <p><b>{comment.name} ({comment.email})</b> {comment.comment} -
                                    [<i>{new Date(comment.date).toLocaleString()}</i>]</p>
                            </div>
                        ))}
                    </div>
                </div>

                <form onSubmit={saveCom}>
                    <label htmlFor="name" style={{ color: '#333' }}>Your name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email" style={{ color: '#333' }}>Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="comment" style={{ color: '#333' }}>Your comment:</label>
                    <textarea id="comment" name="comment" required></textarea>

                    <button type="submit" style={{ backgroundColor: '#3e8e41' }}>Send</button>
                </form>
            </footer>
        </>
    );
};

export default CountryInfo;

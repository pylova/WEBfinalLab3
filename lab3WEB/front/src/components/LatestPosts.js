import React from 'react';
import './stylies/style.css';
import Header from "./Header";
import japan from './images/japan.jpg'
import australia from './images/australia.jpg'
import germany from './images/germany.jpg'
import {Link} from "react-router-dom";

const LatestPosts = () => {
    return (
        <div>
            <Header/>
        <div className="articles">
            <article>
                <h2>Japan</h2>
                <main>
                    <img src={japan} alt="japan" />
                    <p>Japan, also known as the "Land of the Rising Sun," is situated in East Asia on an archipelago composed of four main islands...</p>
                    <button><Link id="News1" to="/country/japan">Read more</Link></button>
                </main>
            </article>

            <article>
                <h2>Germany</h2>
                <main>
                    <img src={germany} alt="germany" />
                    <p>Germany, located in Central Europe, is a country known for its rich history, vibrant culture, and technological advancements...</p>
                    <button><Link id="News2" to="/country/germany">Read more</Link></button>
                </main>
            </article>

            <article>
                <h2>Australia</h2>
                <main>
                    <img src={australia} alt="australia" />
                    <p>Australia, situated in the Southern Hemisphere, is a diverse and expansive country known for its unique wildlife, stunning landscapes, and vibrant cities. It is home to the Great Barrier Reef, a UNESCO World Heritage Site, and the iconic Sydney Opera House...</p>
                    <button><Link id="News3" to="/country/australia">Read more</Link></button>
                </main>
            </article>
        </div>
        </div>
    );
};

export default LatestPosts;

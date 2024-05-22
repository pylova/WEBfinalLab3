const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
const countryInfo = {
    japan: {
        date: 'Mar 2, 2024',
        description: 'Japan, also known as the "Land of the Rising Sun," is situated in East Asia on an archipelago composed of four main islands. This state is renowned for its unique culture, incredible technology, and a history that spans millennia. Japan is one of the largest economies globally and continually evolves in scientific research, technology, and the arts.'
    },
    germany: {
        date: 'Mar 1, 2024',
        description: 'Germany, located in Central Europe, is a country known for its rich history, vibrant culture, and technological advancements. It has a robust economy and is globally recognized for its contributions to science, engineering, and automotive industries. Germany is also famous for its picturesque landscapes, delicious cuisine, and a strong emphasis on sustainability and environmental conservation.'
    },
    australia: {
        date: 'Feb 29, 2024',
        description: 'Australia, situated in the Southern Hemisphere, is a diverse and expansive country known for its unique wildlife, stunning landscapes, and vibrant cities. It is home to the Great Barrier Reef, a UNESCO World Heritage Site, and the iconic Sydney Opera House. Australia\'s economy is driven by industries such as mining, agriculture, and tourism. The country also has a rich indigenous culture, which is celebrated and preserved through art, music, and storytelling.'

    }
};
app.get('/info/:country', (req, res) => {
    const country = req.params.country.toLowerCase();
    if (countryInfo[country]) {
        res.json(countryInfo[country]);
    } else {
        res.status(404).json({ error: 'Country not found' });
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

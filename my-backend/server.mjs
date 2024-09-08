
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());

app.get('/api/report', async (req, res) => {
    try {
        const apiKey = process.env.API_KEY;

        const encodedApiKey = Buffer.from(`${apiKey}:`).toString('base64');

        const apiUrl = 'https://marsapi.ams.usda.gov/services/v1.2/reports/2278?q=report_begin_date=09/06/2024&allSections=true';

        const apiResponse = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${encodedApiKey}`,
                'Accept': '*/*',
            }
        });

        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(3000, () => {
    console.log('Backend server running on http://localhost:3000');
});





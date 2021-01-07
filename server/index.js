const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const yup = require('yup');
const monk = require('monk');
const csp = require('helmet-csp')
const { nanoid } = require('nanoid');
const { nextTick } = require('process');
const fs = require('fs');

const app = express();

require('dotenv').config();


const db = monk(process.env.MONGODB_URI);

const patients = db.get('patients');
patients.createIndex({ id: 1 }, { unique: true });

app.enable('trust proxy');

app.use(helmet());

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'unpkg.com', 'cdn.jsdelivr.net',
            'fonts.googleapis.com', 'use.fontawesome.com', 'sha256-4Su6mBWzEIFnH4pAGMOuaeBrstwJN4Z3pq/s1Kn4/KQ'
        ],
        scriptSrc: ["'self'", "'unsafe-eval'", 'cdnjs.cloudflare.com', 'sha256-4Su6mBWzEIFnH4pAGMOuaeBrstwJN4Z3pq/s1Kn4/KQ'],
        fontSrc: [
            "'self'", // Default policy for specifiying valid sources for fonts loaded using "@font-face": allow all content coming from origin (without subdomains).
            'https://fonts.gstatic.com',
            'https://cdnjs.cloudflare.com'
        ],
        styleSrc: [
            "'self'", // Default policy for valid sources for stylesheets: allow all content coming from origin (without subdomains).
            'https://fonts.googleapis.com',
            'https://cdnjs.cloudflare.com'
        ],
    }
}));

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));


function buildJson() {
    for (var i = 0; i < 5000; i++) {
        patients.insert({ id: i, cough: getRandomVal(), fever: getRandomVal(), sore_throat: getRandomVal(), shortness_of_breath: getRandomVal(), lack_of_smell: getRandomVal(), lack_of_tase: getRandomVal(), runny_nose: getRandomVal(), nausea: getRandomVal(), diziness: getRandomVal() });
    }
}

function getRandomVal() {
    return Math.random() >= 0.5 ? 1 : 0;
}

app.get('/v1/patients/records', async function (req, res, next) {
    try {
        const added = await patients.find({});
        res.json({
            data: added
        });
    }
    catch {
        next(error)
    };
});

app.get('/v1/patients/records/:id', async function (req, res, next) {
    try {
        const { id: id } = req.params;
        const record = await patients.findOne({ id: parseInt(id) });
        res.json({
            data: [record]
        });
    }
    catch {
        next(error);
    }
});


app.use((error, req, res, next) => {
    if (error.status) {
        res.status(error.status);
    } else res.status(500);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack
    })
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log('Running on port ' + port);
});
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
const { goodArray } = require('./names.js');

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
    for (var i = 0; i < 2000; i++) {
        var age = Math.floor((Math.random() * (70 - 18)) + 18);
        console.log(i)
        patients.insert({
            id: i,
            name: goodArray[i],
            age: age,
            cough: getRandomVal('chronic', age),
            fever: getRandomVal(null, age),
            sore_throat: getRandomVal(null, age),
            shortness_of_breath: getRandomVal('chronic', age),
            tight_chest: getRandomVal(null, age),
            lack_of_smell: getRandomVal(null, age),
            lack_of_tase: getRandomVal(null, age),
            runny_nose: getRandomVal(null, age),
            nausea: getRandomVal(null, age),
            diziness: getRandomVal(null, age),
            muscle_ache: getRandomVal(null, age),
            headache: getRandomVal(null, age),
            fatigue: getRandomVal('chronic', age),
            vomiting: getRandomVal(null, age),
            diarrhea: getRandomVal(null, age),
            stomach_ache: getRandomVal(null, age),
            skin_rash: getRandomVal(null, age),
            sneezing: getRandomVal(null, age),
            swelling: getRandomVal(null, age),
            joint_pain: getRandomVal('chronic', age),
            joint_swelling: getRandomVal('chronic', age),
            reduced_mobility: getRandomVal('chronic', age),
            hunger: getRandomVal('chronic', age),
            thirst: getRandomVal('chronic', age),
            weight_loss: getRandomVal('chronic', age),
            blurred_vision: getRandomVal('chronic', age),
            frequent_urinating: getRandomVal('chronic', age),
            chest_pain: getRandomVal('chronic', age),
        });
    }
    return true;
}

function getRandomVal(chronic, age) {
    if (chronic) {
        if (age < 30) return Math.random() >= 0.85 ? 1 : 0;
        else if (age < 40) return Math.random() >= 0.75 ? 1 : 0;
        else if (age < 50) return Math.random() >= 0.65 ? 1 : 0;
        else if (age < 60) return Math.random() >= 0.5 ? 1 : 0;
        else if (age < 70) return Math.random() >= 0.37 ? 1 : 0;
    }
    else return Math.random() >= 0.5 ? 1 : 0;
}


app.get('/v1/patients/records', async function (req, res, next) {
    try {
        const added = await patients.find({});
        res.json({
            data: added
        });
    }
    catch (error) {
        next(error);
    };
});

app.get('/v1/patients/records/statistics', async function (req, res, next) {
    try {
        const added = await patients.find({});
        res.json({
            data: added
        });
    }
    catch (error) {
        next(error);
    };
});

app.post('/v1/patients/records/create', async function (req, res, next) {
    try {
        const added = buildJson();
        if (added) {
            res.json({
                data: added
            });
        }
    }
    catch (error) {
        next(error)
    };
});

app.patch('/v1/patients/records/update/:id', async function (req, res, next) {
    try {
        console.log(req.body)
    }
    catch (error) {
        next(error)
    };
});

app.delete('/v1/patients/records/delete', async function (req, res, next) {
    try {

        const added = await patients.drop();
        res.json({
            data: added
        });
    }
    catch (error) {
        next(error)
    };
});

app.delete('/v1/patients/records/delete/:id', async function (req, res, next) {
    const { id: id } = req.params;
    try {
        const deleted = await patients.remove({ id: parseInt(id) });
        res.json({
            data: deleted.deletedCount
        });
    }
    catch (error) {
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
    catch (error) {
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



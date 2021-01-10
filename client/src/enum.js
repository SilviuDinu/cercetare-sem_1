const symptoms = [
    'Tuse',
    'Febră',
    'Dureri de gât',
    'Dificultăți respiratorii',
    'Lipsă miros',
    'Lipsă gust',
    'Exces de mucozități',
    'Greață',
    'Amețeală',
    'Dureri musculare',
    'Dureri de cap',
    'Epuizare',
    'Vărsături',
    'Diaree',
    'Crampe stomacale',
    'Iritație de piele',
    'Strănut',
    'Umflături'
];

const tableHead = [
    'ID pacient',
    'Nume',
    'Vârsta',
    'Actualizat'
]

const diseases = [{
    cold: {
        symptoms: {
            cough: 1,
            fever: 1,
            sore_throat: 1,
            shortness_of_breath: 0,
            lack_of_smell: 0,
            lack_of_tase: 0,
            runny_nose: 1,
            nausea: 0,
            diziness: 0,
            muscle_ache: 0,
            headache: 1,
            fatigue: 0,
            vomiting: 0,
            diarrhea: 0,
            stomach_ache: 0,
            skin_rash: 0,
            sneezing: 1,
            swelling: 0
        }
    },
    food_poisoning: {
        symptoms: {
            cough: 0,
            fever: 0,
            sore_throat: 0,
            shortness_of_breath: 0,
            lack_of_smell: 0,
            lack_of_tase: 0,
            runny_nose: 0,
            nausea: 0,
            diziness: 1,
            muscle_ache: 0,
            headache: 1,
            fatigue: 0,
            vomiting: 1,
            diarrhea: 1,
            stomach_ache: 1,
            skin_rash: 1,
            sneezing: 0,
            swelling: 0
        }
    },
    covid_19: {
        symptoms: {
            cough: 1,
            fever: 1,
            sore_throat: 1,
            shortness_of_breath: 1,
            lack_of_smell: 1,
            lack_of_tase: 1,
            runny_nose: 1,
            nausea: 0,
            diziness: 1,
            muscle_ache: 1,
            headache: 1,
            fatigue: 1,
            vomiting: 0,
            diarrhea: 1,
            stomach_ache: 0,
            skin_rash: 0,
            sneezing: 0,
            swelling: 0
        }
    },
    flu: {
        symptoms: {
            cough: 1,
            fever: 1,
            sore_throat: 1,
            shortness_of_breath: 0,
            lack_of_smell: 0,
            lack_of_tase: 0,
            runny_nose: 1,
            nausea: 0,
            diziness: 0,
            muscle_ache: 1,
            headache: 1,
            fatigue: 1,
            vomiting: 1,
            diarrhea: 1,
            stomach_ache: 0,
            skin_rash: 0,
            sneezing: 1,
            swelling: 0
        }
    },
    allergy: {
        symptoms: {
            cough: 1,
            fever: 0,
            sore_throat: 0,
            shortness_of_breath: 1,
            lack_of_smell: 0,
            lack_of_tase: 0,
            runny_nose: 1,
            nausea: 0,
            diziness: 0,
            muscle_ache: 0,
            headache: 0,
            fatigue: 0,
            vomiting: 0,
            diarrhea: 0,
            stomach_ache: 0,
            skin_rash: 1,
            sneezing: 1,
            swelling: 1
        }
    }
}]


const enums = {
    symptoms,
    tableHead,
    diseases
};

export default enums;
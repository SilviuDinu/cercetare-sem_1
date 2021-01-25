const symptoms = [
    'Tuse',
    'Febră',
    'Dureri de gât',
    'Dificultăți respiratorii',
    'Senzație apăsătoare în piept',
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
    'Umflături specifice alergiei',
    'Dureri de alrticulații',
    "Umflături de articulații",
    "Mobilitate redusă a articulațiilor",
    "Foame",
    "Sete",
    "Pierdere subită în greutate",
    "Vedere încețoșată",
    "Urinare frecventă",
    "Durere în piept"
];

const tableHead = [
    'ID pacient',
    'Nume',
    'Vârsta',
    'Actualizat'
]

const diseases = [

    {
        cold: {
            symptoms: {
                cough: 1,
                fever: 1,
                sore_throat: 1,
                shortness_of_breath: 0,
                tight_chest: 0,
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
                swelling: 0,
                joint_pain: 0,
                joint_swelling: 0,
                reduced_mobility: 0,
                hunger: 0,
                thirst: 0,
                weight_loss: 0,
                blurred_vision: 0,
                frequent_urinating: 0,
                chest_pain: 0
            }
        }
    },
    {
        food_poisoning: {
            symptoms: {
                cough: 0,
                fever: 0,
                sore_throat: 0,
                shortness_of_breath: 0,
                tight_chest: 0,
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
                swelling: 0,
                joint_pain: 0,
                joint_swelling: 0,
                reduced_mobility: 0,
                hunger: 0,
                thirst: 0,
                weight_loss: 0,
                blurred_vision: 0,
                frequent_urinating: 0,
                chest_pain: 0
            }
        }
    },
    {
        covid_19: {
            symptoms: {
                cough: 1,
                fever: 1,
                sore_throat: 1,
                shortness_of_breath: 1,
                tight_chest: 1,
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
                swelling: 0,
                joint_pain: 0,
                joint_swelling: 0,
                reduced_mobility: 0,
                hunger: 0,
                thirst: 0,
                weight_loss: 0,
                blurred_vision: 0,
                frequent_urinating: 0,
                chest_pain: 0
            }
        }
    },
    {
        flu: {
            symptoms: {
                cough: 1,
                fever: 1,
                sore_throat: 1,
                shortness_of_breath: 0,
                tight_chest: 0,
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
                swelling: 0,
                joint_pain: 0,
                joint_swelling: 0,
                reduced_mobility: 0,
                hunger: 0,
                thirst: 0,
                weight_loss: 0,
                blurred_vision: 0,
                frequent_urinating: 0,
                chest_pain: 0
            }
        }
    },
    {
        allergy: {
            symptoms: {
                cough: 1,
                fever: 0,
                sore_throat: 0,
                shortness_of_breath: 1,
                tight_chest: 1,
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
                swelling: 1,
                joint_pain: 0,
                joint_swelling: 0,
                reduced_mobility: 0,
                hunger: 0,
                thirst: 0,
                weight_loss: 0,
                blurred_vision: 0,
                frequent_urinating: 0,
                chest_pain: 0
            }
        }
    },
    {
        arthritis: {
            symptoms: {
                cough: 0,
                fever: 0,
                sore_throat: 0,
                shortness_of_breath: 0,
                tight_chest: 0,
                lack_of_smell: 0,
                lack_of_tase: 0,
                runny_nose: 0,
                nausea: 0,
                diziness: 0,
                muscle_ache: 0,
                headache: 0,
                fatigue: 0,
                vomiting: 0,
                diarrhea: 0,
                stomach_ache: 0,
                skin_rash: 0,
                sneezing: 0,
                swelling: 0,
                joint_pain: 1,
                joint_swelling: 1,
                reduced_mobility: 1,
                hunger: 0,
                thirst: 0,
                weight_loss: 0,
                blurred_vision: 0,
                frequent_urinating: 0,
                chest_pain: 0
            }
        }
    },
    {
        asthma: {
            symptoms: {
                cough: 1,
                fever: 0,
                sore_throat: 0,
                shortness_of_breath: 1,
                tight_chest: 1,
                lack_of_smell: 0,
                lack_of_tase: 0,
                runny_nose: 0,
                nausea: 0,
                diziness: 0,
                muscle_ache: 0,
                headache: 0,
                fatigue: 0,
                vomiting: 0,
                diarrhea: 0,
                stomach_ache: 0,
                skin_rash: 0,
                sneezing: 0,
                swelling: 0,
                joint_pain: 0,
                joint_swelling: 0,
                reduced_mobility: 0,
                chest_pain: 0
            }
        }
    },
    {
        diabetes: {
            symptoms: {
                cough: 0,
                fever: 0,
                sore_throat: 0,
                shortness_of_breath: 0,
                tight_chest: 0,
                lack_of_smell: 0,
                lack_of_tase: 0,
                runny_nose: 0,
                nausea: 1,
                diziness: 0,
                muscle_ache: 0,
                headache: 0,
                fatigue: 1,
                vomiting: 1,
                diarrhea: 0,
                stomach_ache: 0,
                skin_rash: 0,
                sneezing: 0,
                swelling: 0,
                joint_pain: 0,
                joint_swelling: 0,
                reduced_mobility: 0,
                hunger: 1,
                thirst: 1,
                weight_loss: 1,
                blurred_vision: 1,
                frequent_urinating: 1,
                chest_pain: 0
            }
        }
    },
    {
        chronic_bronchitis: {
            symptoms: {
                cough: 0,
                fever: 0,
                sore_throat: 1,
                shortness_of_breath: 0,
                tight_chest: 0,
                lack_of_smell: 0,
                lack_of_tase: 0,
                runny_nose: 1,
                nausea: 0,
                diziness: 0,
                muscle_ache: 0,
                headache: 1,
                fatigue: 1,
                vomiting: 0,
                diarrhea: 0,
                stomach_ache: 0,
                skin_rash: 0,
                sneezing: 0,
                swelling: 0,
                joint_pain: 0,
                joint_swelling: 0,
                reduced_mobility: 0,
                hunger: 0,
                thirst: 0,
                weight_loss: 0,
                blurred_vision: 0,
                frequent_urinating: 0,
                chest_pain: 1
            }
        }
    }
]

const boli = ["Răceală", "Toxiinfecție alimentară", "Covid 19", "Gripă", "Alergie", "Artrită", "Astm", "Diabet", "Bronșită cronică"]

const mappedSymptoms = Object.assign(...Object.keys(diseases[0].cold.symptoms).map((k, i) => ({ [k]: symptoms[i] })));
const mappedDiseases = Object.assign(...Object.keys(diseases).map((k, i) => ({ [Object.keys(diseases[k])]: boli[i] })));

const enums = {
    symptoms,
    tableHead,
    diseases,
    mappedSymptoms,
    mappedDiseases,
    boli
};

export default enums;
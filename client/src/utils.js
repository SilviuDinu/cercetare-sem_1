import enums from './enum.js'

function API() {
    return {
        getPatientSymptoms: (entry) => {
            const arr = [];
            for (var symptom in entry) {
                if (entry[symptom] === 1) {
                    arr.push(symptom);
                }
            }
            return arr;
        },
        getDiseaseSpecificSymptoms: (element) => {
            const arr = [];
            for (var symptom in element[Object.keys(element)].symptoms) {
                if (element[Object.keys(element)].symptoms[symptom] === 1) {
                    arr.push(symptom);
                }
            }
            return arr;
        },
        getDiseasesSymptoms: () => {
            const aux = enums.diseases.map(element => {
                return {
                    disease: Object.keys(element).pop(),
                    symptoms: API().getDiseaseSpecificSymptoms(element)
                }
            });
            return aux;
        },
        generateDiagnosis: function (entry) {
            const patientSymptoms = this.getPatientSymptoms(entry);
            const diseasesSymptoms = this.getDiseasesSymptoms();
            const scoreArray = diseasesSymptoms.map(current => {
                return {
                    disease: current.disease,
                    matched_symptoms: current.symptoms.filter(symptom => patientSymptoms.includes(symptom)),
                    percent: ((current.symptoms.filter(symptom => patientSymptoms.includes(symptom)).length / current.symptoms.length) * 100).toFixed(2),
                    disease_symptoms: current.symptoms,
                }
            })
            return scoreArray;
        }
    }
}

const utils = API();

export default utils;
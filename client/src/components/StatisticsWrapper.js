import React from 'react';
import Chart from "react-google-charts";
import enums from "../enum.js"
import utils from "../utils.js"
import Loader from "./Loader"


export default function StatisticsWrapper(props) {
    const mapStatisticsArray = (data, i) => {
        const arr = [];
        console.log(i)
        data.forEach((elem, index) => {
            const scoreArray = utils.generateDiagnosis(elem);
            arr.push([elem.age, parseFloat(scoreArray[i].percent)]);
        });
        const sortedArr = arr.sort((a, b) => a[0] - b[0])
        const finalArr = getAgeMean(sortedArr);
        finalArr.unshift(['age', 'chances'])
        return finalArr;
    }

    const getAgeMean = (array) => {
        const ageMeanArrays = [];
        for (let i = array[0][0]; i < array[array.length - 1][0] + 1; i++) {
            ageMeanArrays.push(array.filter(element => element[0] === i))
        }
        const filteredArray = ageMeanArrays.filter(elem => elem && elem.length > 0);
        return filteredArray.map((elem, index) => {
            return getReducedValue(elem)
        })
    }
    const getReducedValue = (arr) => {
        const reducedArr = [];
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i][1];
        }
        reducedArr.push(arr[0][0], sum / arr.length)
        return reducedArr;
    }
    return (
        <>
            <button className="search stats" onClick={props.onClick}>Generate statistics</button>
            <div className="chart-wrapper">
                {props.statisticData && props.statisticData.length > 0 ? enums.diseases.map((disease, i) => {
                    return (
                        <div className="chart" key={i}>
                            <Chart
                                width={450}
                                height={350}
                                chartType="LineChart"
                                title={enums.mappedDiseases[disease]}
                                loader={<Loader loader={true} />}
                                data={mapStatisticsArray(props.statisticData, i)}
                                options={{
                                    title: enums.boli[i],
                                    intervals: { style: 'sticks' },
                                    legend: 'none',
                                    hAxis: {
                                        title: 'Vârsta',
                                        minValue: 18,
                                        maxValue: 70
                                    },
                                    vAxis: {
                                        title: 'Șansa de îmbolnăvire',
                                        minValue: 0,
                                        maxValue: 100
                                    },
                                }}
                            />
                        </div>
                    )
                })
                    : <Loader loader={props.loader} />}

            </div>
        </>
    )

}
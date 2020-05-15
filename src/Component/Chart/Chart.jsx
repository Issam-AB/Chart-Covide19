import React, { useState, useEffect } from 'react';
import {fetchDailyDate} from '../../api/index'
import {Line,Bar} from 'react-chartjs-2'
import style from './Chart.module.css'

const Chart = ({data: {confirmed, deaths, recovered}, country}) => {
    const [dailyData,setDailyData] = useState([]);
    
    useEffect(() => {
      const fetchAPI = async () => {
      setDailyData(await fetchDailyDate());
      }
      fetchAPI();
    },[]);

    const LinChart =(
        dailyData.length
        ? (
            <Line 
                data={{
                    labels: dailyData.map(({date}) => date),
                    datasets:[{
                       data:dailyData.map(({confirmed}) => confirmed),
                       label: 'Infected',
                       borderColor: '#3333ff',
                       fill:true,
                    },{
                       data:dailyData.map(({deaths}) => deaths),
                       label: 'Deaths',
                       borderColor: 'red',
                       backgroundColor: 'rgba(255,0,0,0.5)',
                       fill:true,
                    }],
                }}
            />
        ) : null

    )
    console.log(confirmed, deaths, recovered);
    const barChar = (
       confirmed 
        ? (
            <Bar 
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        labels: 'people',
                        backgroundColor: [
                            'rgba(0,0,255,0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255,0,0,0.5)'
                            ],
                            data: [confirmed.value, deaths.value, recovered.value] 
                    }]
                }}
                options={{
                    legend: {display: false},
                    title: { display: true, text:`èCurrent state in ${country}`}
                }}

            />

        ):null
    )
    
    return (
        <div className={style.Container}>
           {country ? barChar : LinChart}
        </div>
    )
}
export default  Chart ;
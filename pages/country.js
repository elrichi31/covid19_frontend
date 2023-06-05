import styles from "../styles/dataComponent.module.css"
import {Line} from "react-chartjs-2"
import {Component, useEffect, useState} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'


export default function country(){
    const cookie = new Cookies()
    const [data2, setData] = useState()
    
    console.log(cookie.get('token'))
    useEffect(()=>{
        axios({
            url: `${process.env.API}/data/country/Germany`,
            method: "get",
            headers: {Authorization: `Bearer ${cookie.get('token')}`}
        }).then(response => {return response})
        .then(response => setData(response))
    },[])
  let datesArr = ['']
  let vaccinesArr = ['']

  if (data2){
    data2.data.people_fully_vaccinated.map((it)=>{
      let conv = parseInt(it)
      vaccinesArr.push(conv)
    })
    // console.log(data2.data)
    data2.data.date.map((it) => {
      datesArr.push(it)
    })
  }
  console.log(data2)
  console.log(datesArr)
  console.log(vaccinesArr)
  const data1 = {
    labels: datesArr,
    datasets: [{
      label: '# of votes',
      data: vaccinesArr,
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    }]
  }
  return (
    <div className={styles.data}>
      {/* <div className={styles.titles}>{renderIt}</div> */}
      <Line className={styles.back} data={data1}></Line>
    </div>
  ) 
}
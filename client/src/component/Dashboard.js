import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Dashboard() {
    const [bills, setbill]= useState([]);
    const [reports,setReport]=useState([]);
    useEffect(()=>{
        const getdataToday = async()=>{
            let res = await axios.get(`http://localhost:3001/getbill/2022-05-03`)
            setbill(res.data)
        }
        const getdataMonth = async()=>{
            let res= await axios.get(`http://localhost:3001/getbill/2022-05-00`)
            setReport(res.data)
        }
        getdataToday();
        getdataMonth();
    },[])
    console.log(bills)
    console.log(reports)
    let total=0;
    for (let index = 0; index < reports.length; index++) {
        total+=reports[index].total
        
    }
    
  return (
    <div>
        <p>Dashboard</p>
        <>This Month revenue </>
        <div>Total Revenue : {total}</div>
    </div>
  )
}

export default Dashboard
import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Dashboard() {
    const [todayReports,setTodayReport] = useState([]);
    const [monthlyReports,setMonthlyReport] = useState([]);
    const [lifeTimeReports,setLifeTimeReport] = useState([]);
    
    useEffect(()=>{
        const getLifeTimeReport =async () => {
            let res = await axios.get('http://localhost:3001/getbill')
            setLifeTimeReport(res.data)
        }
        const getMonthlyReport = async()=>{
            var localDate= new Date();
            let queryDate = localDate.getFullYear()+"-"+(localDate.getMonth()+1)+"-"+"0"
            let res = await axios.get(`http://localhost:3001/getbill/${queryDate}`)
            setMonthlyReport(res.data)
        }
        const getTodayReport = async()=>{
            var localDate = new Date()
            let queryDate = localDate.getFullYear()+"-"+(localDate.getMonth()+1)+"-"+localDate.getDate()
            let res= await axios.get(`http://localhost:3001/getbill/${queryDate}`)
            setTodayReport(res.data)
            console.log(queryDate)
        }

        getLifeTimeReport();
        getMonthlyReport();
        getTodayReport()
    },[])
    
    let lifeTimeRevenue=0;
    let monthlyRevenue=0;
    let todayRevenue=0;

    for (let index = 0; index < lifeTimeReports.length; index++) {
        lifeTimeRevenue+= lifeTimeReports[index].total
    }
    for (let index = 0; index < monthlyReports.length; index++) {
        monthlyRevenue += monthlyReports[index].total;
    }
    for (let index = 0; index < todayReports.length; index++) {
        todayRevenue += todayReports[index].total;   
    }
   
    var localDate = new Date()
    
    
    
  return (
    <div className='main-container'>
        <div className='second-nav'>
            <h2>Dashboard</h2>
        </div>
        <div className='dashboard'>
        <div className='report-container'>
            <h3>Lifetime report</h3>
            <p>Number of order : {lifeTimeReports.length}</p>
            <p>Total revenue: {lifeTimeRevenue}</p>
        </div>

        <div className='report-container'>
            <h3>Monthly report</h3>
            <p>Number of order : {monthlyReports.length}</p>
            <p>Monthly revenue : {monthlyRevenue}</p>
        </div>

        <div className='report-container'>
            <h3>Today report:  {localDate.toLocaleDateString()}</h3>
            <p>Number of new order: {todayReports.length}</p>
            <p>Today revenue : {todayRevenue}</p>
        </div>
        </div>
        
    </div>
  )
}

export default Dashboard
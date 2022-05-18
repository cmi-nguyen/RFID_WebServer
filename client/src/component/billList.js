import React,{useState,useEffect} from 'react'
import axios from "axios";

import { useNavigate } from 'react-router-dom';


function BillList() {
  const [bills, setbill]= useState([]);
  useEffect(() => {
    //Runs only on the first render
    axios.get("http://localhost:3001/getbill")
    .then(function (response) {
      setbill(response.data)
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  
  
    const Navigate = useNavigate();
    function GetBillDetails(evt){
      evt.preventDefault();
      const id= evt.target.id;
      Navigate(`/billdetail/${id}`);

    }
    
  return (
        <div className='list-container'>
            <table>
              <thead>
                <tr>
                  <th>Bill id</th>
                  <th>date</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bills.map((bill)=>(
                  <tr>
                    <td>{bill.bill_id}</td>
                    <td>{bill.date}</td>
                    <td>{bill.total}</td>
                    <td>
                      <button id={bill.bill_id} onClick={GetBillDetails}>Detail</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
        </div>
    
  )
}

export default BillList
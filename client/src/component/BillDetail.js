import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function BillDetail() {
    const [productInstances, setProductInstance]= useState([]);
    const [billDetail,setBillDetail]=useState([]);
    const [productLines, setProductLine]= useState([]);
    console.log(productLines)
    const id= useParams();
    useEffect(() => {
      //Runs only on the first render
     axios.get(`http://localhost:3001/billdetails/${id.billid}`)
      .then(function (response) {
        setBillDetail(response.data)
      })
      .catch(function (error) {
      console.log(error);
      });

  }, []);
  
  useEffect(() => {
  for (let index = 0; index < billDetail.length; index++) {
    axios.get(`http://localhost:3001/billitem/${billDetail[index].product_instance_id}`)
    .then(function (response) {
      setProductInstance(productInstances.concat(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
}, [billDetail]);
useEffect(() => {
  for (let i = 0; i < productInstances.length; i++) {
    axios.get(`http://localhost:3001/billitems/${productInstances[i].product_line_id}`)
    .then(function (response) {
      setProductLine(productLines=> productLines.concat(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  }, [productInstances]);
  let temp=0;
  for (let index = 0; index < productLines.length; index++) {
    temp+=productLines[index].price
    
  }
  
  

   /* axios.get(`http://localhost:3001/billitem/:id`)
    .then(function (response) {
      setProductInstance(response.data)
      console.log(response);
      console.log(productInstances)
    })
    .catch(function (error) {
      console.log(error);
    }); */
   /* axios.get("http://localhost:3001/billitems/:id")
    .then(function (response) {
      setProductLine(response.data)
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    */
   return (
     <div className='main-container'>
      <p>Bill Detail</p>
      <p>Bill ID:  {id.billid}    Total: {temp}</p>
      <div className='list-container'>
        
  
        <table>
          <thead>
            <tr>
              <th>Productline ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productLines.map((productLine)=>(
              <tr>
                <td>{productLine.product_line_id}</td>
                <td>{productLine.name}</td>
                <td>{productLine.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
     </div>
    
)
}

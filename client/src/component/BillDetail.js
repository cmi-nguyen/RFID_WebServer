import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function BillDetail() {
    const [productInstances, setProductInstance]= useState([]);
    const [billDetail,setBillDetail]=useState([]);
    const [productLines, setProductLine]= useState([]);
    
    
    const id= useParams();
    useEffect(() => {
      const getData = async () => {
        let res = await axios.get(`http://localhost:3001/billdetails/${id.billid}`)
        setBillDetail(res.data)
      };
    
      getData(); // run it, run it
    
    }, []);
   
     
   
  
  useEffect(() => {
    const getData = async ()=>{
      for (let index = 0; index < billDetail.length; index++) {
        let res = await axios.get(`http://localhost:3001/billitem/${billDetail[index].product_instance_id}`) 
          setProductInstance(productInstances=> productInstances.concat(res.data)); 
      }
    };
    getData()
}, [billDetail]);

console.log(productInstances)
useEffect(() => {
  let i = productInstances.length;
  const getData = async ()=>{
      let res = await axios.get(`http://localhost:3001/billitems/${productInstances[i-1].product_line_id}`)
        setProductLine(productLines=> productLines.concat(res.data))
  }
  getData();
  
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
     <div >
       <div className='second-nav'>
        <p>Bill Detail:</p>
        
        <p>Bill ID:  {id.billid}    Total: {temp}</p>
       </div>
      
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

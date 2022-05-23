import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ReadOnlyRow from './ReadPrlRowOnly';

function ProductLineList() {
    const [productLines, setProductLine]= useState([]);
    const [addFormData,setAddFormData]=useState({
      product_line_id: "",
      name: "",
      price: ""
    });
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
      console.log(addFormData)
    };
    useEffect(() => {
      //Runs only on the first render
      axios.get("http://localhost:3001/getprl")
      .then(function (response) {
      setProductLine(response.data)
      console.log(response);
      })
      .catch(function (error) {
      console.log(error);
     });
    }, []);
    


    const addPrl = () => {
      axios.post("http://localhost:3001/addprl", {
        product_line_id: addFormData.product_line_id,
        name: addFormData.name,
        price: addFormData.price
      })
    };


    function deletePrl(evt){
      evt.preventDefault();
      const id= evt.target.id;
      axios.delete(`http://localhost:3001/deletePrl/${id}`)
      window.location.reload()
    }

  return (
    <div>
 <div className='list-container'>
            <table>
              <thead>
                <tr>
                  <th>Productline ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {productLines.map((productLine)=>(
                  <tr>
                  <td>{productLine.product_line_id}</td>
                  <td>{productLine.name}</td>
                  <td>{productLine.price}</td>
                  <td>
                    <button>Edit</button>
                    <button className='danger-button' id={productLine.product_line_id} onClick={deletePrl}>Delete</button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
        </div>
        <div className='list-container'>
        <p>Add Productline</p>
            <form onSubmit={addPrl}>
              <input type="text"
                name="product_line_id"
                required
                placeholder="Enter a id..."
                onChange={handleAddFormChange}
                />
                <input type="text"
                  name="name"
                  required
                  placeholder="Enter a Name..."
                  onChange={handleAddFormChange}
                />
                <input type="number"
                  name="price"
                  required
                  placeholder="Enter Price..."
                  onChange={handleAddFormChange}
                />
                <button>Add</button>
            </form>
        </div>
    </div>
       
  )
}

export default ProductLineList
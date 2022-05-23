import React,{useState,useEffect} from 'react'
import axios from 'axios'

function ProductIntanceList() {
  
    const [productInstances, setProductInstance]= useState([]);
    const [addFormData,setAddFormData]=useState({
      product_instance_id: "",
      product_line_id: "",
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

    const addPri = () => {
      axios.post("http://localhost:3001/addpri", {
        product_instance_id: addFormData.product_instance_id,
        product_line_id: addFormData.product_line_id,
      })
    };

    function deletePri(evt){
      evt.preventDefault();
      const id= evt.target.id;
      axios.delete(`http://localhost:3001/deletePri/${id}`)
      window.location.reload();
    }

    // render func

    useEffect(() => {
      //Runs only on the first render
      axios.get("http://localhost:3001/getpri")
      .then(function (response) {
      setProductInstance(response.data)
      console.log(response);
      })
     .catch(function (error) {
      console.log(error);
     });
    }, []);
    

  return (
    <div>
    <div className='list-container'>
            <table>
              <thead>
                <tr>
                  <th>ProductInstance Id</th>
                  <th>Productline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {productInstances.map((productIntance)=>(
                  <tr>
                    <td>{productIntance.product_instance_id}</td>
                    <td>{productIntance.product_line_id}</td>
                    <td>
                      <button>Edit</button>
                      <button className='danger-button' id={productIntance.product_instance_id} onClick={deletePri}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div className='list-container'>
            <p>Add Product Instance</p>
            
            <form onSubmit={addPri}>
              <input type="text"
                name="product_instance_id"
                required
                placeholder="Enter a id..."
                onChange={handleAddFormChange}
                />
                <input type="text"
                  name="product_line_id"
                  required
                  placeholder="Enter a Name..."
                  onChange={handleAddFormChange}
                />
                <button >Add</button>
            </form>
            </div>
            
            
            
        
    </div>
        
  )
}

export default ProductIntanceList
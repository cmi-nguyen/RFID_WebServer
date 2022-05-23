import React,{useState, useEffect} from 'react'
import axios from 'axios';

function TagList() {
  useEffect(() => {
    //Runs only on the first render
    axios.get("http://localhost:3001/gettag")
    .then(function (response) {
      setTag(response.data)
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  const [tags, setTag]= useState([]);

  const [addFormData,setAddFormData]=useState({
    tad_read_id: "",
    product_instance_id: "",
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

  const addTag = () => {
    axios.post("http://localhost:3001/addtag", {
      tad_read_id: addFormData.tad_read_id,
      product_instance_id: addFormData.product_instance_id,
    })
  };
  
  function deleteTag(evt){
    evt.preventDefault();
    const id= evt.target.id;
    axios.delete(`http://localhost:3001/deletetag/${id}`)
    window.location.reload();
  }
  return (
    <div>
 <div className='list-container'>
            <table>
              <thead>
                <tr>
                  <th>Tag ID</th>
                  <th>Product Instance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tags.map((tag)=>(
                  <tr>
                    <td>{tag.tad_read_id}</td>
                    <td>{tag.product_instance_id}</td>
                    <td>
                      <button>Edit</button>
                      <button className='danger-button' id={tag.tad_read_id} onClick={deleteTag}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
                
        </div>
           <div className='list-container'>
           <p>Add Tag</p>
            
            <form onSubmit={addTag}>
              <input type="text"
                name="tad_read_id"
                required
                placeholder="Enter a id..."
                onChange={handleAddFormChange}
                />
                <input type="text"
                  name="product_instance_id"
                  required
                  placeholder="Enter a Name..."
                  onChange={handleAddFormChange}
                />
                <button>Add</button>
            </form>
            
           </div>
    </div>
       
        
  )
}

export default TagList
import React from "react";

const EditablePrlRow = ({
  editFormData
  
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="product_instance_id"
          value={editFormData.fullName}
          
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
         
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditablePrlRow;
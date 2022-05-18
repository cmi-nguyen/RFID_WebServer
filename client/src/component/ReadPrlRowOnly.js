import React from "react";

const ReadOnlyRow = ({ productLines }) => {
  return (
    <tr>
      <td>{productLines.product_line_id}</td>
      <td>{productLines.name}</td>
      <td>{productLines.price}</td>
      <td>
        <button
          type="button" className="edit-btn"
          
        >
          Edit
        </button>
        <button type="button" className="danger-button" >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
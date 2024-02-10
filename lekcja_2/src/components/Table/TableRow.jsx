import { useState } from "react";

const TableRow = ({ user }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveButtonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <tr style={isActive ? { color: "red", backgroundColor: "lightgray" } : {}}>
      <td>{user.name}</td>
      <td>{user.lastName}</td>
      <td>{user.gender}</td>
      <td>
        <button onClick={handleActiveButtonClick}>
          {isActive ? "Deactivate" : "Activate"}
        </button>
        <button
          onClick={() => {
            deleteUser(user.id);
          }}
        >
          Delete User
        </button>
      </td>
    </tr>
  );
};

export default TableRow;

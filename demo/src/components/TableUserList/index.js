const TableuserList = (props) => {
    return (
      <table border>
        <tr>
          <td>Name </td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {props.userList.map((item) => {
          return (
            <tr>
              <td>{item.name} </td>
              <td>{item.email} </td>
              <td>{item.phone} </td>
              <td>
                <button
                  onClick={(e) => {
                    props.onEdit(item);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => {
                    props.onDelete(item);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    );
  };
  
  export default TableuserList;
  
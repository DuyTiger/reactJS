import React from "react";
import { useState, useEffect } from "react";
import TableUserList from "./TableUserList";
import FormUser from "./FormUser";

const DEFAULT_USER = { name: "", email: "", phone: "" };
const Bai4 = () => {
  const [userList, setUserList] = useState([]);
  const [formData, setformData] = useState([DEFAULT_USER]);
  const [keyword, setkeyworrd] = useState("");
  const [searchUserList, setSearchUserList] = useState([]);


//   useEffect(() => {
//     if (keyword !== ''){
//         const newUserList = userList.filter((item) => {
//             return item.name === keyword
//         })
//         setSearchUserList(newUserList)
//     }
//     else {
//         setSearchUserList(userList)
//     }
//   })

  const onClick = () => {
    if (formData.id) {
      const newUserList = userList.map((item) => {
        if (item.id === formData.id) {
          return formData;
        }
        return item;
      });
      setUserList(newUserList);
    } else {
      setUserList([
        ...userList,
        {
          id: Math.random(),
          ...formData,
        },
      ]);
    }

    setformData(DEFAULT_USER);
  };

  const onEdit = (item) => {
    setformData(item);
  };
  const onDelete = (item) => {
    const newUserList = userList.filter((user) => {
      return user.id !== item.id;
    });
    setUserList(newUserList);
  };

//   const onSearch = (e) => {
//     setkeyworrd(e.target.value)
//   };
  return (
    <div>
      <FormUser
        formData={formData}
        setformData={setformData}
        onClick={onClick}
      />
{/* 
      <input value={keyword} onChange={onSearch} /> */}

      <TableUserList userList={userList} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default Bai4;

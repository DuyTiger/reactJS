import { Button } from "antd";
import { useState } from "react";
import TableStudents from "./TableStudents";
import ModalFormStudent from "./ModalFormStudent";

const DEFAULT_STUDENT = { name: "", studentID: "", score: "", class: "" };
const Exam02 = (props) => {
  const [formData, setFormData] = useState(DEFAULT_STUDENT);
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);

  const onCreate = () => {
    setOpen(true);
  };

  const onEdit = (student) => {
    setFormData(student);
    setOpen(true);
  };

  const onDelete = (item) => {
    const newStudents = dataSource.filter((student) => {
      return student.id !== item.id;
    });
    setDataSource(newStudents);
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (data) => {
    if (data.id) {
      const newDataSource = dataSource.map((item) => {
        return item.id === id ? { id: id, ...data } : item;
      });

      setDataSource(newDataSource);
    } else {
      setDataSource([
        ...dataSource,
        {
          id: Math.random(),
          ...data,
        },
      ]);
    }
    setFormData(DEFAULT_STUDENT);
    setOpen(false);
  };

  return (
    <div>
      <div>
        <ModalFormStudent
          open={open}
          setOpen={setOpen}
          onSubmit={onSubmit}
          onChange={onChange}
          formData={formData}
        />

        <Button onClick={onCreate}>Create</Button>
      </div>
      <TableStudents
        dataSource={dataSource}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Exam02;

import { Table, Input, Button, Modal } from "antd";
import { useState } from "react";

const DEFAULT_STUDENT = { name: "", studentID: "", score: "", class: "" };
const TableformData = (props) => {
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

  const onDelete = () => {};

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (formData.id) {
      const newDataSource = dataSource.map((item) => {
        if (item.id === formData.id) {
          return formData;
        }

        return item;
      });

      setDataSource(newDataSource);
    } else {
      setDataSource([
        ...dataSource,
        {
          id: Math.random(),
          ...formData,
        },
      ]);
    }
    setFormData(DEFAULT_STUDENT);
    setOpen(false);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "StudentID",
      dataIndex: "studentID",
      key: "studentID",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, item) => {
        return (
          <div>
            <button
              onClick={() => {
                onEdit(item);
              }}
            >
              Edit
            </button>
            <button>Delete</button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div>
        <Modal open={open} onOk={onSubmit} onCancel={onCancel}>
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={onChange}
          />
          <Input
            name="studentID"
            placeholder="StudentID"
            value={formData.studentID}
            onChange={onChange}
          />
          <Input
            name="score"
            placeholder="Score"
            value={formData.score}
            onChange={onChange}
          />
          <Input
            name="class"
            placeholder="Class"
            value={formData.class}
            onChange={onChange}
          />
         
        </Modal>

        <Button onClick={onCreate}>Create</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default TableformData;

import { Table } from "antd";

const TableUserList = (props) => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      email: 32,
      phone: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      email: 42,
      phone: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
  ];
  
  <Table dataSource={dataSource} columns={columns} />;
};

export default TableUserList;

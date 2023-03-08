import { Table } from 'antd'

const TableUserList = ({dataSource, onEdit, onDelete}) => {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Action',
      key: 'action',
      // render: (text, record) => (
      //   <span>
      //     <a onClick={() => onEdit(record)}>Edit</a>
      //     <span> | </span>
      //     <a onClick={() => onDelete(record)}>Delete</a>
      //   </span>
      // ),
    },
  ];
  
  return (
    <Table dataSource={dataSource} columns={columns} />
  );
};

export default TableUserList;

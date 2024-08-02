import React from "react";
import { Table } from "antd";
import CustomeTable from "./tables";
const column = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
    className: "bg-dark text-white",
    render: () => <p className="">jack</p>,
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
    className: "bg-dark text-white",
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 150,
    className: "bg-dark text-white",
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 150,
    className: "bg-dark text-white",
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
    className: "bg-dark text-white",
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150,
    className: "bg-dark text-white",
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    width: 150,
    className: "bg-dark text-white",
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
    width: 150,
    className: "bg-dark text-white",
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
    width: 150,
    className: "bg-dark text-white",
  },
  {
    title: "Column 8",
    dataIndex: "address",
    key: "8",
    className: "bg-dark text-white",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
    className: "bg-danger text-white ",
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const Leads = () => {
  return (
    <div>
      <h1>Leads for you</h1>
      <div className="row vh-100">
        <CustomeTable columns={column} data={data} />
      </div>
    </div>
  );
};

export default Leads;

import React from "react";
import { Table } from "antd";

export default function CustomeTable({ columns, data }) {
  return (
    <div className="bg-dark">
      <Table
        className="bg-dark"
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1500,
          y: 300,
        }}
      />
    </div>
  );
}

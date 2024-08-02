import React from "react";
import { Menu } from "antd";

const MenuItem = ({ item }) => {
  return (
    <Menu
      className="bg-dark"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      items={item}
    />
  );
};

export default MenuItem;

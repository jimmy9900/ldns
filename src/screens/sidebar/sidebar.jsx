// @ts-nocheck
import React from "react";
import { useState } from "react";

import {
  BellOutlined,
  HomeOutlined,
  BarChartOutlined,
  PieChartOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import { Button, Menu } from "antd";
import logo from "./../../assets/logo.png";
import MenuItem from "./menu_item";

const Sidebar = () => {
  const [ShowMenu, setShowMenu] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(collapsed);
  };
  const handleMenuChange = (enable) => {
    setMenuFooter(enable);
  };
  return (
    <div className="col-2 d-none d-lg-block d-flex flex-column bg-dark align-items-start vh-100">
      <div>
        <div style={{ height: "5vh" }} />
        <img src={logo} alt="" className="img-fluid" />
        <div style={{ height: "5vh" }} />
        <Button
          type="primary"
          onClick={handleMenuChange}
          style={{
            marginBottom: 16,
          }}
        >
          {ShowMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          inlineCollapsed={!setShowMenu}
          className="bg-dark float"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          items={items}
        />
      </div>
      <div className="mt-auto">
        <Menu
          inlineCollapsed={!setShowMenu}
          className="bg-dark"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          items={logout}
        />
      </div>
    </div>
  );
};

export default Sidebar;

const items = [
  {
    key: "sub1",
    label: "Navigation One",
    icon: <HomeOutlined />,
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <BarChartOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <BellOutlined />,
  },
  {
    key: "sub5",
    label: "Navigation Three",
    icon: <PieChartOutlined />,
  },
  {
    key: "sub6",
    label: "Navigation Three",
    icon: <BellOutlined />,
  },
];

const logout = [
  {
    key: "sub1",
    label: "Logout",
    icon: <LogoutOutlined />,
  },
];

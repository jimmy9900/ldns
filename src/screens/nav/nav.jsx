// @ts-nocheck
import React from "react";
import { Select, Space } from "antd";
import profile from "./../../assets/profilepic.png";
import DropdownMenu from "./dropdown";

const CustomNavBar = ({ options }) => {
  return (
    <div>
      <div className="row align-items-center justify-content-evenly">
        <div className="col-3">
          <h2>Lead</h2>
        </div>
        <div className="col-6">
          <DropdownMenu
            options={[
              { value: "Calls", label: "Calls" },
              { value: "customer service", label: "Customer Service" },
              { value: "telesales", label: "Telesales" },
            ]}
          />
        </div>
        <div className="col-3">
          <img
            src={profile}
            alt="profilepic"
            className="img-thumbnail rounded-circle col-3"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomNavBar;

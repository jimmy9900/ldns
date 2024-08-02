import { Select } from "antd";
import React from "react";

const DropdownMenu = ({ options }) => {
  return (
    <Select defaultValue="Appointment" options={options} className="col-10" />
  );
};

export default DropdownMenu;

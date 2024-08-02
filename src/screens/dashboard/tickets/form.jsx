// @ts-nocheck
import React from "react";
import { Button, Modal, Form, Input } from "antd";
const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
export default function CustomeFormInput({
  className,
  layout,
  label,
  name,
  rules,
  icon,
  size,
}) {
  return (
    <div>
      <Form.Item
        {...formItemLayout}
        className={className}
        layout={layout}
        label={label}
        name={name}
        hasFeedback
        rules={rules}
      >
        <Input size={size} prefix={icon} />
      </Form.Item>
    </div>
  );
}

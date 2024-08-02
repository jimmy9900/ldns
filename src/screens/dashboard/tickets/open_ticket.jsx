// @ts-nocheck
import { useState } from "react";
import { FabAddButton } from "../../../components/buttons";
import { Button, Modal, Form, Input } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import empty from "./../../../assets/emptyticket.png";
import CustomeFormInput from "./form";
export default function OpenedTicket() {
  const [tickets, setTickets] = useState([]);
  const [open, setOpen] = useState(false);
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setTimeout(() => {
        setTickets([
          ...tickets,
          {
            id: Date.now(),
            title: `New Ticket ${
              tickets.length + 1
            } at ${new Date().toLocaleString()}`,
          },
        ]);
        form.resetFields();
        setOpen(false);
      }, 1000);
    } catch (errorInfo) {}
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  return (
    <div>
      {tickets.length > 0 ? (
        <div>
          {tickets.map((ticket) => (
            <div key={ticket.id}>{ticket.title}</div>
          ))}
        </div>
      ) : (
        <div>
          <img src={empty} alt="" className="img-fluid" />
          <p className="fs-5">No Open Requirements yet!</p>
        </div>
      )}
      <FabAddButton onClick={showModal} />

      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          name="modal-validation"
          layout="horizontal"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          form={form}
        >
          <CustomeFormInput
            className="mb-2"
            layout="Service"
            label="Service"
            name="Service"
            hasFeedback
            rules={[
              { min: 3, message: "dsadasd" },
              {
                min: 3,
                max: 20,
                required: true,
                message: "Please enter your service correctly!",
              },
            ]}
          />
          <CustomeFormInput
            className="pt-2 mb-2"
            layout="Ticket_Inquiry"
            label="Ticket / Inquiry"
            name="Ticket_Inquiry"
            hasFeedback
            rules={[
              {
                min: 3,
                max: 20,
                required: true,
                message: "Please enter your ticket title correctly!",
              },
            ]}
          />
          <Form.Item
            {...formItemLayout}
            className="pt-2 mb-2"
            layout="Description"
            label="Description"
            name="Description"
            hasFeedback
            rules={[
              {
                min: 3,
                max: 20,
                required: true,
                message: "Please write your description correctly!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item {...formItemLayout} className="text-end mt-3">
            <Button
              type="primary"
              htmlType="submit"
              key="submit"
              onClick={handleOk}
              className="p-3"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

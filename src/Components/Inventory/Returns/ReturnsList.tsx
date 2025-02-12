"use client";

import React, { useState } from "react";
import { Table, Tag, Button, Space, Modal, Input, Form } from "antd";
import { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import returnsData, { ReturnData } from "./data/returnsData";

// Columns configuration for the Ant Design Table
const columns: ColumnsType<ReturnData> = [
  {
    title: "Return ID",
    dataIndex: "id",
    key: "returnId",
  },
  {
    title: "Customer Name",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Return Reason",
    dataIndex: "returnReason",
    key: "returnReason",
  },
  {
    title: "Return Date",
    dataIndex: "returnDate",
    key: "returnDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      let color: string;
      switch (status) {
        case "Pending":
          color = "yellow";
          break;
        case "Approved":
          color = "green";
          break;
        case "Rejected":
          color = "red";
          break;
        case "Processed":
          color = "blue";
          break;
        default:
          color = "gray";
      }
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Button
          icon={<EditOutlined />}
          type="link"
          onClick={() => handleEditReturn(record)}
        />
        <Button
          icon={<DeleteOutlined />}
          type="link"
          onClick={() => handleDeleteReturn(record.id)}
        />
      </Space>
    ),
  },
];

// Handle edit of a return request
const handleEditReturn = (returnRequest: ReturnData) => {
  console.log("Edit return request: ", returnRequest);
  // Implement edit functionality, such as opening a modal to update the return status
};

// Handle delete of a return request
const handleDeleteReturn = (returnId: string) => {
  Modal.confirm({
    title: "Are you sure you want to delete this return request?",
    content: `Return ID: ${returnId}`,
    onOk: () => deleteReturn(returnId),
  });
};

// Delete a return request
const deleteReturn = (returnId: string) => {
  console.log("Deleted return ID: ", returnId);
  // Logic to delete the return request
};

// Returns Management Component
const ReturnsComp = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedReturn] = useState<ReturnData | null>(null);

  // Handle processing return status change
  const processReturn = (status: string) => {
    if (selectedReturn) {
      console.log(
        `Process return ID: ${selectedReturn.id} with status: ${status}`
      );
      // Logic to process the return, e.g., update status via API
      setIsModalVisible(false); // Close modal after processing
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Returns Management</h2>
        <Button
          type="primary"
          className="!bg-primary"
          size="large"
          onClick={() => setIsModalVisible(true)}
        >
          Process Return
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={returnsData}
        pagination={false}
        rowKey="id"
      />

      {/* Modal for processing a return */}
      <Modal
        title="Process Return"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={(values) => {
            if (selectedReturn) {
              processReturn(values.status);
            }
          }}
        >
          <Form.Item
            label="Return ID"
            name="returnId"
            initialValue={selectedReturn?.id || ""}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Select Status"
            name="status"
            rules={[{ required: true, message: "Please select a status" }]}
          >
            <Input
              placeholder="Approved / Rejected / Processed"
              autoComplete="off"
            />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default ReturnsComp;

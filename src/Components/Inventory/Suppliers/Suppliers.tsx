"use client";

import React, { useState } from "react";
import { Table, Button, Space, Modal, Input, Form } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";
import suppliersData, { SupplierData } from "./data/suppliersData";

// Columns for the Table
const columns: ColumnsType<SupplierData> = [
  {
    title: "Supplier ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Company Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Contact Person",
    dataIndex: "contactPerson",
    key: "contactPerson",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  // {
  //   title: "Address",
  //   dataIndex: "address",
  //   key: "address",
  // },
  {
    title: "Products Supplied",
    dataIndex: "productsSupplied",
    key: "productsSupplied",
    render: (products: string[]) => <span>{products.join(", ")}</span>,
  },
  {
    title: "Last Order Date",
    dataIndex: "lastOrderDate",
    key: "lastOrderDate",
  },
  {
    title: "Actions",
    key: "actions",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    render: (text: string, record: any) => (
      <Space size="middle">
        <Button
          icon={<EditOutlined />}
          className="!bg-primary"
          type="primary"
          // onClick={() => handleEdit(record)}
        />
        <Button
          icon={<DeleteOutlined />}
          // onClick={() => handleDelete(record.id)}
        />
      </Space>
    ),
  },
];

// Handle edit action
// const handleEditSupplier = (supplier: SupplierData) => {
//   console.log("Editing supplier: ", supplier);
//   // Open modal to edit supplier data (implement modal logic)
// };

// Handle delete action
// const handleDeleteSupplier = (id: string) => {
//   Modal.confirm({
//     title: "Are you sure you want to delete this supplier?",
//     content: `Supplier ID: ${id}`,
//     onOk: () => deleteSupplier(id),
//   });
// };

// Delete supplier from the list
// const deleteSupplier = (id: string) => {
//   console.log("Deleted supplier with ID: ", id);
//   // Logic to delete supplier (e.g., update state or make an API call)
// };

// Suppliers Management Component
const SuppliersComp = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSupplier] = useState<SupplierData | null>(null);

  // Handle creating/updating a supplier
  const handleSubmit = (values: SupplierData) => {
    if (selectedSupplier) {
      console.log("Updated supplier:", values);
    } else {
      console.log("Created new supplier:", values);
    }
    setIsModalVisible(false); // Close modal
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Suppliers Management</h2>

        <Button
          type="primary"
          className="!bg-primary"
          size="large"
          onClick={() => setIsModalVisible(true)}
        >
          Add Supplier
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={suppliersData}
        pagination={false}
        rowKey="id"
      />

      {/* Modal for Adding/Editing a Supplier */}
      <Modal
        title={selectedSupplier ? "Edit Supplier" : "Add Supplier"}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          initialValues={selectedSupplier || {}}
          onFinish={handleSubmit}
        >
          <Form.Item label="Supplier ID" name="id" required>
            <Input disabled={!selectedSupplier} />
          </Form.Item>

          <Form.Item label="Company Name" name="name" required>
            <Input />
          </Form.Item>

          <Form.Item label="Contact Person" name="contactPerson" required>
            <Input />
          </Form.Item>

          <Form.Item label="Phone" name="phone" required>
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email" required>
            <Input />
          </Form.Item>

          <Form.Item label="Address" name="address" required>
            <Input />
          </Form.Item>

          <Form.Item label="Products Supplied" name="productsSupplied" required>
            <Input />
          </Form.Item>

          <Form.Item label="Last Order Date" name="lastOrderDate" required>
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default SuppliersComp;

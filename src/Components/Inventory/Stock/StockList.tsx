"use client";

import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Space,
  Input,
  Modal,
  Form,
  InputNumber,
  message,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { stockData, StockItem } from "./data/stockData";

const StockComp = () => {
  const [data, setData] = useState(stockData);
  const [editingItem, setEditingItem] = useState<StockItem | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const handleEdit = (record: StockItem) => {
    setEditingItem(record);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    const newData = data.filter(
      (item: StockItem) => item?.id !== id.toString()
    );
    setData(newData);
    message.success("Item deleted successfully!");
  };

  const handleSave = (values: StockItem) => {
    const updatedData = data.map((item) =>
      item.id === editingItem?.id ? { ...item, ...values } : item
    );
    setData(updatedData);
    setIsEditing(false);
    setEditingItem(null);
    message.success("Item updated successfully!");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingItem(null);
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a: StockItem, b: StockItem) => a.quantity - b.quantity,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text: number) => `$${text.toFixed(2)}`,
    },
    {
      title: "Stock Status",
      dataIndex: "stockStatus",
      key: "stockStatus",
      render: (status: string) => {
        let color = "";
        if (status === "In Stock") color = "green";
        else if (status === "Low Stock") color = "orange";
        else color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: string, record: StockItem) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            type="primary"
            onClick={() => handleEdit(record)}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.category.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Stock Management</h1>
        <Input.Search
          placeholder="Search stock..."
          enterButton="Search"
          onSearch={handleSearch}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 300 }}
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{
          pageSize: 10,
        }}
        bordered
        className="shadow-md"
      />

      {/* Modal for Editing Stock Item */}
      <Modal
        title="Edit Stock Item"
        visible={isEditing}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          initialValues={editingItem || undefined}
          onFinish={handleSave}
          layout="vertical"
        >
          <Form.Item
            label="Product Name"
            name="name"
            rules={[
              { required: true, message: "Please input the product name!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please input the category!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: "Please input the quantity!" }]}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input the price!" }]}
          >
            <InputNumber min={0} step={0.01} prefix="$" />
          </Form.Item>

          <Form.Item
            label="Stock Status"
            name="stockStatus"
            rules={[
              { required: true, message: "Please select the stock status!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
            <Button className="ml-2" onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default StockComp;

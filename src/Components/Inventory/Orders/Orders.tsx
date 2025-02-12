"use client";

import React from "react";
import { Table, Tag, Button, Space, Modal } from "antd";
import { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// Dummy data for orders
interface Order {
  key: string;
  orderId: string;
  customerName: string;
  product: string;
  quantity: number;
  totalAmount: number;
  orderDate: string;
  status: "Pending" | "Shipped" | "Completed" | "Cancelled";
}

const ordersData: Order[] = [
  {
    key: "1",
    orderId: "O12345",
    customerName: "Alice Niyonzima",
    product: "Trainee Laptop",
    quantity: 3,
    totalAmount: 1500, 
    orderDate: "2025-02-10",
    status: "Pending",
  },
  {
    key: "2",
    orderId: "O12346",
    customerName: "John Rukundo",
    product: "Employee Laptop",
    quantity: 1,
    totalAmount: 1000, // USD
    orderDate: "2025-02-12",
    status: "Shipped",
  },
  {
    key: "3",
    orderId: "O12347",
    customerName: "Imana Karangwa",
    product: "Office Chair",
    quantity: 5,
    totalAmount: 1000, // USD
    orderDate: "2025-02-14",
    status: "Completed",
  },
  {
    key: "4",
    orderId: "O12348",
    customerName: "Amina Niyonsaba",
    product: "Monitors",
    quantity: 2,
    totalAmount: 800, // USD
    orderDate: "2025-02-15",
    status: "Cancelled",
  },
];

// Columns configuration for the Ant Design Table
const columns: ColumnsType<Order> = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
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
    title: "Total Amount ",
    dataIndex: "totalAmount",
    key: "totalAmount",
  },
  {
    title: "Order Date",
    dataIndex: "orderDate",
    key: "orderDate",
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
        case "Shipped":
          color = "blue";
          break;
        case "Completed":
          color = "green";
          break;
        case "Cancelled":
          color = "red";
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
          onClick={() => editOrder(record)}
        />
        <Button
          icon={<DeleteOutlined />}
          type="link"
          onClick={() => showDeleteConfirm(record.key)}
        />
      </Space>
    ),
  },
];

// Handle editing an order
const editOrder = (order: Order) => {
  console.log("Edit order: ", order);
  // Logic to edit the order
};

// Handle deleting an order
const showDeleteConfirm = (orderId: string) => {
  Modal.confirm({
    title: "Are you sure you want to delete this order?",
    content: `Order ID: ${orderId}`,
    onOk: () => deleteOrder(orderId),
  });
};

// Perform delete operation
const deleteOrder = (orderId: string) => {
  console.log("Deleted order ID: ", orderId);
  // Logic to delete the order
};

// Orders Management Component
const OrdersComp = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Orders Management</h2>
        <Button
          type="primary"
          className="!bg-primary"
          size="large"
          // onClick={() => setIsModalVisible(true)}
        >
          Add New Order
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={ordersData}
        pagination={false}
        rowKey="key"
      />

    </div>
  );
};

export default OrdersComp;

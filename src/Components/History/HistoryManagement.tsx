"use client";

import React from "react";
import { Table } from "antd";

// Define the type for history data
interface HistoryData {
  historyId: string;
  actionDate: string;
  user: string;
  action: string;
  details: string;
  status: "Successful" | "Failed";
}

// Dummy data for history logs
const historyData: HistoryData[] = [
  {
    historyId: "H001",
    actionDate: "2025-01-01",
    user: "Eric Murenzi",
    action: "Created New Order",
    details: "Order for 15 Trainee Laptops placed.",
    status: "Successful",
  },
  {
    historyId: "H002",
    actionDate: "2025-01-05",
    user: "Fatuma Akimana",
    action: "Updated Product",
    details: "Updated order for 20 Office Chairs.",
    status: "Successful",
  },
  {
    historyId: "H003",
    actionDate: "2025-01-10",
    user: "Samson Mugenzi",
    action: "Cancelled Order",
    details: "Cancelled order for 10 Mops due to incorrect quantity.",
    status: "Failed",
  },
  {
    historyId: "H004",
    actionDate: "2025-01-12",
    user: "Amina Niyonsaba",
    action: "Created New Supplier",
    details: "Added new supplier: CleanTech Supplies.",
    status: "Successful",
  },
  {
    historyId: "H005",
    actionDate: "2025-01-15",
    user: "Eric Murenzi",
    action: "Completed Payment",
    details: "Completed payment for 30 Employee Laptops.",
    status: "Successful",
  },
];

// Columns definition for Ant Design Table
const columns = [
  {
    title: "History ID",
    dataIndex: "historyId",
    key: "historyId",
  },
  {
    title: "Action Date",
    dataIndex: "actionDate",
    key: "actionDate",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
  {
    title: "Details",
    dataIndex: "details",
    key: "details",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: "Successful" | "Failed") => {
      let color = "";
      switch (status) {
        case "Successful":
          color = "green";
          break;
        case "Failed":
          color = "red";
          break;
        default:
          break;
      }
      return (
        <span className={`text-${color}-600 font-semibold`}>{status}</span>
      );
    },
  },
];

const HistoryManagement: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">History Management</h1>
      <Table
        columns={columns}
        dataSource={historyData}
        rowKey="historyId"
        className=" border-gray-300"
      />
    </div>
  );
};

export default HistoryManagement;

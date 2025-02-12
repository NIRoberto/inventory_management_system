"use client";


import React from "react";
import { Table } from "antd";

// Define the type for report data
interface ReportData {
  reportId: string;
  reportDate: string;
  department: string;
  totalAmount: number;
  status: "Pending" | "Completed" | "Cancelled";
}

const reportData: ReportData[] = [
  {
    reportId: "R001",
    reportDate: "2025-01-01",
    department: "IT",
    totalAmount: 15000,
    status: "Completed",
  },
  {
    reportId: "R002",
    reportDate: "2025-01-05",
    department: "HR",
    totalAmount: 5000,
    status: "Completed",
  },
  {
    reportId: "R003",
    reportDate: "2025-01-10",
    department: "Sales",
    totalAmount: 20000,
    status: "Pending",
  },
  {
    reportId: "R004",
    reportDate: "2025-01-15",
    department: "Marketing",
    totalAmount: 8000,
    status: "Completed",
  },
  {
    reportId: "R005",
    reportDate: "2025-01-20",
    department: "Finance",
    totalAmount: 10000,
    status: "Cancelled",
  },
];

const columns = [
  {
    title: "Report ID",
    dataIndex: "reportId",
    key: "reportId",
  },
  {
    title: "Report Date",
    dataIndex: "reportDate",
    key: "reportDate",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
    key: "totalAmount",
    render: (amount: number) => `$${amount.toLocaleString()}`,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: "Pending" | "Completed" | "Cancelled") => {
      let color = "";
      switch (status) {
        case "Completed":
          color = "green";
          break;
        case "Pending":
          color = "yellow";
          break;
        case "Cancelled":
          color = "red";
          break;
        default:
          break;
      }
      return <span className={`text-${color}-600`}>{status}</span>;
    },
  },
];

const ReportManagement: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Report Management</h1>
      <Table
        columns={columns}
        dataSource={reportData}
        rowKey="reportId"
        className=" border-gray-300"
      />
    </div>
  );
};

export default ReportManagement;

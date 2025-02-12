"use client";

import React, { useEffect, useState } from "react";
import { Table, Button, Spin, message, DatePicker, Select } from "antd";
import { ColumnsType } from "antd/es/table";

interface DamageReport {
  id: number;
  reportDate: string;
  itemName: string;
  damageDescription: string;
  status: string;
}

const DamageReports = () => {
  const [reports, setReports] = useState<DamageReport[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<{
    date: string | null;
    status: string | null;
  }>({
    date: null,
    status: null,
  });

  // Dummy data for damage reports
  const dummyData: DamageReport[] = [
    {
      id: 1,
      reportDate: "2025-02-01",
      itemName: "Laptop",
      damageDescription: "Screen cracked",
      status: "Resolved",
    },
    {
      id: 2,
      reportDate: "2025-02-03",
      itemName: "Projector",
      damageDescription: "Lens broken",
      status: "Pending",
    },
    {
      id: 3,
      reportDate: "2025-02-05",
      itemName: "Printer",
      damageDescription: "Paper jam error",
      status: "Unresolved",
    },
  ];

  // Simulate loading data and error handling
  const fetchReports = () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate fetching the dummy data
      setReports(dummyData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Error fetching reports");
      message.error("Failed to load damage reports.");
    } finally {
      setLoading(false);
    }
  };

  // Columns for the Ant Design table
  const columns: ColumnsType<DamageReport> = [
    {
      title: "Report Date",
      dataIndex: "reportDate",
      key: "reportDate",
    },
    {
      title: "Item Name",
      dataIndex: "itemName",
      key: "itemName",
    },
    {
      title: "Damage Description",
      dataIndex: "damageDescription",
      key: "damageDescription",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        const color =
          status === "Resolved"
            ? "green"
            : status === "Pending"
            ? "orange"
            : "red";
        return <span style={{ color }}>{status}</span>;
      },
    },
  ];

  // Filter handlers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateFilterChange = (date: any, dateString: string | string[]) => {
    const dateStr = Array.isArray(dateString) ? dateString[0] : dateString;
    setFilters((prev) => ({ ...prev, date: dateStr || null }));
  };

  const handleStatusFilterChange = (value: string) => {
    setFilters((prev) => ({ ...prev, status: value }));
  };

  const filteredReports = reports.filter((report) => {
    if (filters.date && !report.reportDate.includes(filters.date)) return false;
    if (filters.status && report.status !== filters.status) return false;
    return true;
  });

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Damage Reports</h2>

      {loading ? (
        <Spin tip="Loading reports..." />
      ) : error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <>
          <div style={{ marginBottom: "20px" }}>
            <DatePicker
              placeholder="Filter by Date"
              onChange={handleDateFilterChange}
              style={{ marginRight: 16 }}
            />
            <Select
              placeholder="Filter by Status"
              onChange={handleStatusFilterChange}
              style={{ width: 200 }}
            >
              <Select.Option value="Pending">Pending</Select.Option>
              <Select.Option value="Resolved">Resolved</Select.Option>
              <Select.Option value="Unresolved">Unresolved</Select.Option>
            </Select>
            <Button
              type="primary"
              onClick={fetchReports}
              style={{ marginLeft: 16 }}
            >
              Refresh Reports
            </Button>
          </div>

          <Table
            dataSource={filteredReports}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 5 }}
          />
        </>
      )}
    </div>
  );
};

export default DamageReports;

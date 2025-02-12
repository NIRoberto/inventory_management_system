"use client";

import React, { useState } from "react";
import { Table, Button, message, Spin } from "antd";

interface Borrowing {
  id: number;
  borrowerName: string;
  borrowedItem: string;
  borrowDate: string;
  returnDate: string;
  status: string;
}

const BorrowingsCom: React.FC = () => {
  const [borrowings, setBorrowings] = useState<Borrowing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Dummy borrowing data
  const dummyData: Borrowing[] = [
    {
      id: 1,
      borrowerName: "Jean Baptiste",
      borrowedItem: "Laptop",
      borrowDate: "2025-02-01",
      returnDate: "2025-02-10",
      status: "Returned",
    },
    {
      id: 2,
      borrowerName: "Alice Niyonsaba",
      borrowedItem: "Projector",
      borrowDate: "2025-02-05",
      returnDate: "2025-02-12",
      status: "Pending",
    },
    {
      id: 3,
      borrowerName: "David Habimana",
      borrowedItem: "Tablet",
      borrowDate: "2025-02-08",
      returnDate: "2025-02-15",
      status: "Overdue",
    },
  ];

  // Simulate loading data and error handling
  const fetchBorrowings = () => {
    setLoading(true);
    setError(null);

    try {
      // Simulating data loading with dummy data
      setBorrowings(dummyData);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Error fetching borrowings");
      message.error("Failed to load borrowings.");
    } finally {
      setLoading(false);
    }
  };

  // Load dummy data on component mount
  React.useEffect(() => {
    fetchBorrowings();
  }, []);

  // Columns for Ant Design table
  const columns = [
    {
      title: "Borrower Name",
      dataIndex: "borrowerName",
      key: "borrowerName",
    },
    {
      title: "Borrowed Item",
      dataIndex: "borrowedItem",
      key: "borrowedItem",
    },
    {
      title: "Borrow Date",
      dataIndex: "borrowDate",
      key: "borrowDate",
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
        const color =
          status === "Returned"
            ? "green"
            : status === "Pending"
            ? "orange"
            : "red";
        return <span style={{ color }}>{status}</span>;
      },
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4">Borrowings List</h2>

        <Button
          type="primary"
          className="!bg-primary"
          size="large"
          //   onClick={() => setIsModalVisible(true)}
        >
          Refresh Borrowings
        </Button>
      </div>

      {loading ? (
        <Spin tip="Loading borrowings..." />
      ) : error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <>
          <Table
            dataSource={borrowings}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 5 }}
          />
        </>
      )}
    </div>
  );
};

export default BorrowingsCom;

"use client";

//  eslint-disable

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Table, Modal, Input, message } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// Define user type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

// Initial user data array with Rwandan names
const initialUsers: User[] = [
  {
    id: "1",
    name: "Kigeli John",
    email: "kigeli.john@example.com",
    role: "admin",
    status: "active",
  },
  {
    id: "2",
    name: "Uwase Amina",
    email: "uwase.amina@example.com",
    role: "manager",
    status: "inactive",
  },
  {
    id: "3",
    name: "Ndayishimiye Emmanuel",
    email: "ndayishimiye.emmanuel@example.com",
    role: "staff",
    status: "active",
  },
  {
    id: "4",
    name: "Munyaneza Grace",
    email: "munyaneza.grace@example.com",
    role: "admin",
    status: "inactive",
  },
];

const UsersManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    role: Yup.string().required("Role is required"),
    status: Yup.string().required("Status is required"),
  });

  // Handle form submission
  const handleSubmit = (values: User) => {
    if (editingUser) {
      // Update existing user
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...user, ...values } : user
        )
      );
      message.success("User updated successfully");
    } else {
      // Add new user
      setUsers([...users, { ...values, id: Date.now().toString() }]);
      message.success("User added successfully");
    }
    setIsModalVisible(false); // Close modal
    setEditingUser(null); // Reset editing state
  };

  // Handle editing a user
  const handleEdit = (user: User) => {
    setEditingUser(user);
    setIsModalVisible(true);
  };

  // Handle deleting a user
  const handleDelete = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));
    message.success("User deleted successfully");
  };

  // Columns for the Ant Design Table
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: string, record: User) => (
        <span>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8 }}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            danger
          />
        </span>
      ),
    },
  ];

  return (
    <div>
      <h1>Users Management</h1>

      {/* Button to open the modal to add a new user */}
      <Button
        type="primary"
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: 16 }}
      >
        Add New User
      </Button>

      {/* Ant Design Table */}
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        pagination={false}
      />

      {/* Modal for adding or editing user */}
      <Modal
        title={editingUser ? "Edit User" : "Add User"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Formik
          initialValues={
            editingUser || { id: "", name: "", email: "", role: "", status: "" }
          }
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                render={({ field }: any) => (
                  <Input {...field} placeholder="Enter name" />
                )}
              />
              <ErrorMessage
                name="name"
                component="div"
                // style={{ color: "red" }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                render={({ field }: { field: any }) => (
                  <Input {...field} type="email" placeholder="Enter email" />
                )}
              />
              <ErrorMessage
                name="email"
                component="div"
                // style={{ color: "red" }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label htmlFor="role">Role</label>
              <Field as="select" name="role" className="ant-input">
                <option value="">Select role</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
                <option value="staff">Staff</option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                // style={{ color: "red" }}
              />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label htmlFor="status">Status</label>
              <Field as="select" name="status" className="ant-input">
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Field>
              <ErrorMessage
                name="status"
                component="div"
                // style={{ color: "red" }}
              />
            </div>

            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              {editingUser ? "Update User" : "Add User"}
            </Button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default UsersManagement;

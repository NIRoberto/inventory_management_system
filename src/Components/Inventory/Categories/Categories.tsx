"use client";

import React from "react";
import { useState } from "react";
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  message,
  Popconfirm,
  Image,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { categoriesData, Category } from "./data/categoriesData";

const CategoriesComp = () => {
  const [categories, setCategories] = useState<Category[]>(categoriesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [form] = Form.useForm();

  const handleAddEditCategory = (
    values: Omit<Category, "id" | "createdAt">
  ) => {
    if (editingCategory) {
      // Edit category
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === editingCategory.id ? { ...cat, ...values } : cat
        )
      );
      message.success("Category updated successfully!");
    } else {
      // Add new category
      const newCategory: Category = {
        id: String(categories.length + 1),
        ...values,
        createdAt: new Date().toISOString(),
      };
      setCategories((prev) => [...prev, newCategory]);
      message.success("Category added successfully!");
    }

    setIsModalOpen(false);
    form.resetFields();
    setEditingCategory(null);
  };

  const handleDeleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
    message.success("Category deleted successfully!");
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <Image
          width={50}
          height={50}
          src={image}
          alt="Category"
          className="w-12 h-12 rounded-md"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: Category) => (
        <div className="flex  gap-2">
          <Button
            icon={<EditOutlined />}
            className="!mx-2"
            onClick={() => {
              setEditingCategory(record);
              form.setFieldsValue(record);
              setIsModalOpen(true);
            }}
          />
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => handleDeleteCategory(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Categories Management</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            setEditingCategory(null);
            form.resetFields();
            setIsModalOpen(true);
          }}
        >
          Add Category
        </Button>
      </div>

      {/* Categories Table */}
      <Table
        dataSource={categories}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        className="overflow-x-auto"
      />

      {/* Add/Edit Category Modal */}
      <Modal
        title={editingCategory ? "Edit Category" : "Add Category"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddEditCategory}
          initialValues={{ name: "", description: "", image: "/logo.png" }}
        >
          <Form.Item
            label="Category Name"
            name="name"
            rules={[{ required: true, message: "Please enter category name" }]}
          >
            <Input placeholder="Enter category name" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input.TextArea rows={3} placeholder="Enter category description" />
          </Form.Item>

          <Form.Item label="Image URL" name="image">
            <Input placeholder="Enter image URL" />
          </Form.Item>

          <div className="flex justify-end gap-2">
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              {editingCategory ? "Update" : "Add"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CategoriesComp;

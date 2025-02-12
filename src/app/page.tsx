"use client";

import {
  HomeOutlined,
  AppstoreAddOutlined,
  SearchOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isAuthenticated] = useState(false); // Replace with actual auth logic
  // const router = useRouter();

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo & Brand Name */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>
        <h1 className="text-2xl font-bold text-dark">XYZ Inventory</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {isAuthenticated ? (
          <Link href="/dashboard">
            <Button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition">
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/auth/login">
            <Button className="bg-primary text-white px-4 py-2 border-none hover:bg-blue-700 transition">
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="max-w-7xl mx-auto py-10 flex-grow">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Inventory Management System
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SectionCard
            title="Overview"
            description="Get an overview of your inventory, including total items, status, and usage statistics."
            link="/auth/login"
            icon={<HomeOutlined className="text-5xl text-blue-600 mb-4" />}
          />
          <SectionCard
            title="Inventory Management"
            description="Register, track, and manage items such as laptops, furniture, and more."
            link="/auth/login"
            icon={
              <AppstoreAddOutlined className="text-5xl text-green-600 mb-4" />
            }
          />
          <SectionCard
            title="Borrowing & Assignment"
            description="Assign items to employees or trainees and track their usage."
            link="/auth/login"
            icon={<SearchOutlined className="text-5xl text-yellow-600 mb-4" />}
          />
          <SectionCard
            title="Condition & Damage Tracking"
            description="Track the condition of each item and manage damage reports."
            link="/auth/login"
            icon={<HistoryOutlined className="text-5xl text-red-600 mb-4" />}
          />
        </div>
      </div>

      <footer className="bg-dark text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} XYZ Organization. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-3">
          <Link href="/auth/login" className="hover:text-secondary">
            About Us
          </Link>
          <Link href="/auth/login" className="hover:text-secondary">
            Contact
          </Link>
          <Link href="/auth/login" className="hover:text-secondary">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}

// Reusable SectionCard Component
const SectionCard = ({
  title,
  description,
  link,
  icon,
}: {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-white p-6 justify-between flex flex-col rounded-lg shadow-md hover:shadow-xl transition-shadow">
      {icon}
      <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
      <p className="text-gray-500 mt-2">{description}</p>
      <Link href={link}>
        <span className="text-blue-500 hover:underline mt-4 block">
          Learn More
        </span>
      </Link>
    </div>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import { Layout, Menu, Image } from "antd";
import {
  HomeOutlined,
  AppstoreAddOutlined,
  SearchOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import HeaderComponent from "@/Components/Shared/Layout/Header";

const { Sider } = Layout;

// Dummy user data
const user = {
  roles: ["admin", "manager"], // User has multiple roles (admin and manager)
  permissions: [
    "view_dashboard", // Access to the dashboard
    "manage_inventory", // Full access to inventory management
    "view_stock", // Can view stock
    "manage_orders", // Can manage orders
    "view_suppliers", // Can view suppliers
    "manage_categories", // Can manage categories
    "manage_returns", // Can manage returns
    "view_reports", // Can view reports
    "view_history", // Can view history
    "view_borrowings", // Can view borrowed items
    "view_damage_reports", // Can view damage reports
    "manage_users", // Can manage users (admin-only)
    "view_logs", // Can view system logs (admin-only)
  ],
};

// Define menu structure with icons and permissions
const menuItems = [
  {
    key: "home",
    label: "Home",
    icon: <HomeOutlined />,
    permission: "view_dashboard",
    route: "/",
  },
  {
    key: "inventory",
    label: "Inventory Management",
    icon: <AppstoreAddOutlined />,
    permission: "manage_inventory",
    children: [
      {
        key: "stock",
        label: "Stock Overview",
        icon: <AppstoreAddOutlined />,
        permission: "view_stock",
        route: "/dashboard/inventory/stock",
      },
      {
        key: "orders",
        label: "Orders",
        icon: <AppstoreAddOutlined />,
        permission: "manage_orders",
        route: "/dashboard/inventory/orders",
      },
      {
        key: "suppliers",
        label: "Suppliers",
        icon: <AppstoreAddOutlined />,
        permission: "view_suppliers",
        route: "/dashboard/inventory/suppliers",
      },
      {
        key: "categories",
        label: "Categories",
        icon: <AppstoreAddOutlined />,
        permission: "manage_categories",
        route: "/dashboard/inventory/categories",
      },
      {
        key: "returns",
        label: "Returns & Refunds",
        icon: <AppstoreAddOutlined />,
        permission: "manage_returns",
        route: "/dashboard/inventory/returns",
      },
      {
        key: "borrowings",
        label: "Borrowed Items",
        icon: <AppstoreAddOutlined />,
        permission: "view_borrowings",
        route: "/dashboard/inventory/borrowings",
      },
      {
        key: "damage-reports",
        label: "Damage Reports",
        icon: <AppstoreAddOutlined />,
        permission: "view_damage_reports",
        route: "/dashboard/inventory/damage-reports",
      },
    ],
  },
  {
    key: "user-management",
    label: "User Management",
    icon: <AppstoreAddOutlined />,
    permission: "manage_users",
    route: "/dashboard/user-management",
  },
  {
    key: "logs",
    label: "System Logs",
    icon: <HistoryOutlined />,
    permission: "view_logs",
    route: "/dashboard/system-logs",
  },
  {
    key: "reports",
    label: "Reports",
    icon: <SearchOutlined />,
    permission: "view_reports",
    route: "/dashboard/reports",
  },
  {
    key: "history",
    label: "History",
    icon: <HistoryOutlined />,
    permission: "view_history",
    route: "/dashboard/history",
  },
];

const LayoutWithSidebar = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenuKey, setActiveMenuKey] = useState<string>("home");
  const router = useRouter();

  // Check if the user has permission
  const hasPermission = (permission: string) =>
    user.permissions.includes(permission);

  // Filter menu items based on user permissions
  const filteredMenuItems = menuItems
    .map((item) => {
      if (item.children) {
        const filteredChildren = item.children.filter((subItem) =>
          hasPermission(subItem.permission)
        );
        return filteredChildren.length
          ? { ...item, children: filteredChildren }
          : null;
      }
      return hasPermission(item.permission) ? item : null;
    })
    .filter(Boolean);

  // Handle menu click navigation
  const handleMenuClick = (e: { key: string }) => {
    setActiveMenuKey(e.key);
    router.push(e.key);
  };

  useEffect(() => {
    // Sync active menu state with current route
    const currentPath = window.location.pathname;
    const matchingMenu = menuItems.find((item) =>
      currentPath.startsWith(item.route ?? "")
    );
    if (matchingMenu) {
      setActiveMenuKey(matchingMenu.key);
    }
  }, [router]);

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        width={250}
        className="flex flex-col border-r border-gray-100"
      >
        <div className="logo flex justify-center items-center p-4">
          <Image
            preview={false}
            width={collapsed ? 50 : 80}
            src="/logo.png"
            alt="Company Logo"
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          className="mt-4"
          onClick={handleMenuClick}
          selectedKeys={[activeMenuKey]} // Set active menu item
        >
          {filteredMenuItems.map((item) =>
            item?.children ? (
              <Menu.SubMenu
                key={item.key}
                icon={item.icon}
                title={item.label}
                className="text-white"
              >
                {item.children.map((subItem) => (
                  <Menu.Item
                    key={subItem.route}
                    className={`${
                      activeMenuKey === subItem.key
                        ? "bg-primary text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {subItem.label}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                key={item?.route}
                icon={item?.icon}
                className={`${
                  activeMenuKey === item?.key
                    ? "bg-primary text-white"
                    : "text-gray-400"
                }`}
              >
                {item?.label}
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout className="bg-gray-100 min-h-screen">
        <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="p-6">
          <div className="bg-white min-h-[86vh] rounded-lg p-6 shadow- shadow-gray-100">
            {children}
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default LayoutWithSidebar;

import React from "react";
import { Layout, Menu, Dropdown, Space, Tooltip } from "antd";
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

// Type for each menu item

// Define the dropdown menus with an array of objects
const menus = [
  {
    icon: <BellOutlined style={{ fontSize: "20px", color: "#1890ff" }} />,
    title: "Notifications",
    menuItems: [
      { key: "1", label: "New message from Admin" },
      { key: "2", label: "Security Alert!" },
      { key: "3", label: "New comment on your post" },
    ],
  },

  {
    icon: <SettingOutlined style={{ fontSize: "20px", color: "#1890ff" }} />,
    title: "Settings",
    menuItems: [
      { key: "1", label: "Change Password" },
      { key: "2", label: "Account Settings" },
      { key: "3", label: "Privacy Settings" },
    ],
  },
  {
    icon: <UserOutlined style={{ fontSize: "20px", color: "#1890ff" }} />,
    title: "Profile",
    menuItems: [
      { key: "1", label: "View Profile" },
      { key: "2", label: "Logout" },
    ],
  },
];

// Header Icons with dropdown
const HeaderIcons = () => {
  return (
    <div>
      <Space size="large">
        {menus.map(({ icon, title, menuItems }, index) => (
          <Dropdown
            key={index}
            overlay={
              <Menu>
                {menuItems.map((item) => (
                  <Menu.Item key={item.key}>{item.label}</Menu.Item>
                ))}
              </Menu>
            }
            trigger={["click"]}
          >
            <Tooltip title={title}>{icon}</Tooltip>
          </Dropdown>
        ))}
      </Space>
    </div>
  );
};

// Header Component with Collapsing Sidebar Control
const HeaderComponent: React.FC<{
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}> = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Header className="shadow flex justify-between border bg-white  px-8 ">
      {/* Collapsible Sidebar Switch */}
      <div className="px-4">
        <Tooltip title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}>
          {collapsed ? (
            <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
          ) : (
            <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)} />
          )}
        </Tooltip>
      </div>

      {/* Header Icons Section */}
      <HeaderIcons />
    </Layout.Header>
  );
};

export default HeaderComponent;

import React from "react";

interface HeaderProps {
  title: string;
  actions: React.ReactNode;
}

const HeaderOfPage: React.FC<HeaderProps> = ({ title, actions }) => {
  return (
    <div className="flex justify-between items-center bg-white  py-4 rounded-lg mb-6">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <div className="flex items-center space-x-6">{actions}</div>
    </div>
  );
};

export default HeaderOfPage;

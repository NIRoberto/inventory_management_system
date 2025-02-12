"use client";

import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className="mb-6"
      />

      {/* 404 Text */}
      <h1 className="text-6xl font-extrabold text-blue-600 animate-bounce">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 mt-2">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>

      {/* Home Button */}
      <Link
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

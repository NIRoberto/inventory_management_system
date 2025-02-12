/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button, Typography, Divider, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Image from "next/image"; // For logo display
import Link from "next/link";

// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),
});

const { Title, Text } = Typography;

const LoginComp = () => {
  const router = useRouter();

  // Form submission handler
  const handleSubmit = (values: { email: string; password: string }) => {
    if (values.email != "" && values.password != "") {
      router.push("/dashboard");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center h-full w-full bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg border-2 w-full max-w-md mx-auto">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Company Logo"
            className="object-contain rounded-full"
            width={120}
            height={120}
          />
        </div>
        <Title level={2} className="text- text-gray-700 mb-4">
          Welcome Back!
        </Title>
        <Text className="text- text-gray-500 mb-6 block">
          Please log in to continue to your dashboard.
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Email Input */}
              <div>
                <Field name="email">
                  {({ field, form }: { field: any; form: any }) => (
                    <div>
                      <Input
                        {...field}
                        id="email"
                        prefix={<UserOutlined />}
                        placeholder="Enter your email"
                        size="large"
                        className="rounded-md"
                        status={
                          form.errors.email && form.touched.email ? "error" : ""
                        }
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <Field name="password">
                  {({ field, form }: { field: any; form: any }) => (
                    <div>
                      <Input.Password
                        {...field}
                        id="password"
                        prefix={<LockOutlined />}
                        placeholder="Enter your password"
                        size="large"
                        className="rounded-md"
                        status={
                          form.errors.password && form.touched.password
                            ? "error"
                            : ""
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  )}
                </Field>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  size="large"
                  loading={isSubmitting}
                  className="bg-[#FFAA2C] text-white rounded-md hover:bg-[#FDA352] transition"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Forgot Password Link */}
        <Row justify="center" className="mt-4">
          <Col>
            <Link href="/forgot-password">
              <Text className="text-blue-600 hover:underline">
                Forgot your password?
              </Text>
            </Link>
          </Col>
        </Row>

        {/* Divider */}
        <Divider className="my-6">Or</Divider>

        {/* Sign Up Link */}
        <Row justify="center">
          <Col>
            <Text className="text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginComp;

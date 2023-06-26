"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin } from "antd";

export default function Login() {
  const [isLoading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {!isLoading ? (
        <Spin size="large" />
      ) : (
        <div className="flex justify-center h-screen items-center bg-primary">
          <div className="card p-3 w-450">
            <h1 className="text-xl">DevPortal - Login</h1>
            <hr />
            <Form
              className="flex flex-col gap-3"
              name="login"
              layout="vertical"
              style={{
                display: "grid",
                maxWidth: 600,
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
              initialValues={{ remember: true }}
              autoComplete="off"
              onFinish={onFinish}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                style={{
                  paddingBottom: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                style={{ paddingBottom: 10, width: 400 }}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Button type="primary" htmlType="submit" block>
                Login
              </Button>

              <Link href="/register">Don't have an account? Register</Link>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}

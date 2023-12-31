"use client";
import React from "react";
import Link from "next/link";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio, message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { SetLoading } from "@/redux/loaderSlice";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const onFinish = async (values: any) => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.post("/api/users/login", values);
      message.success(response.data.message);
      router.push("/");
    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong!");
    } finally {
      dispatch(SetLoading(false));
    }
  };

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3 w-450">
        <h1 className="text-xl">DEVSYNC - Login</h1>
        <hr />
        <Form
          className="flex flex-col gap-3"
          layout="vertical"
          style={{
            display: "grid",
            maxWidth: 600,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
            style={{
              paddingBottom: 10,
              justifyContent: "center",
              alignItems: "center",
              width: 400,
            }}
          >
            <Input
              type="email"
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
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
  );
}

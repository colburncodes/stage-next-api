"use client";
import React from "react";
import Link from "next/link";
import { Button, Form, Input, Radio, message } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SetLoading } from "@/redux/loaderSlice";

export default function Register() {
  const dispatch = useDispatch();
  const onFinish = async (values: any) => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.post("/api/users/register", values);
      message.success(response.data.message);

      await axios.post("api/email", {
        method: "POST",
        body: values,
      });
    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong");
    } finally {
      dispatch(SetLoading(false));
    }
  };

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3 w-450">
        <h1 className="text-xl">DEVSYNC - Register</h1>
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
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            label="Register As"
            name="userType"
            rules={[
              {
                required: true,
                message: "Please register as Employer or Developer",
              },
            ]}
          >
            <Radio.Group>
              <Radio name="employer" value="employer">
                {" "}
                Employer{" "}
              </Radio>
              <Radio name="developer" value="developer">
                {" "}
                Developer{" "}
              </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
            style={{
              paddingBottom: 10,
              justifyContent: "center",
              alignItems: "center",
              width: 400,
            }}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>
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
            Register
          </Button>

          <Link href="/login">Already have an account? Login</Link>
        </Form>
      </div>
    </div>
  );
}

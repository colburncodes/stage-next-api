"use client";
import EmployeeForm from "@/components/EmployeeForm";
import EmployerForm from "@/components/EmployerForm";
import PageTitle from "@/components/PageTitle";
import { SetLoading } from "@/redux/loaderSlice";
import { Button, Form, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const onFinish = async (values: any) => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.put("/api/users/user", values);
      message.success(response.data.message);
    } catch (error: any) {
      message.error(error.response.data.message || "Issue updadting user!");
    } finally {
      dispatch(SetLoading(false));
    }
  };
  return (
    <div>
      <PageTitle title={"Profile"} />
      <Form layout="vertical" initialValues={user} onFinish={onFinish}>
        {user?.userType === "employer" ? <EmployerForm /> : <EmployeeForm />}

        <Button className="my-3" type="primary" htmlType="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

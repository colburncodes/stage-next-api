"use client";
import JobForm from "@/components/JobForm";
import PageTitle from "@/components/PageTitle";
import { SetLoading } from "@/redux/loaderSlice";
import { Button, Form, message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Create() {
  const dispatch = useDispatch();
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.post("/api/jobs", values);
      message.success(response.data.message);
      router.push("/jobs");
    } catch (error: any) {
      message.error(error.response.data.message || "Issue creating job!");
    } finally {
      dispatch(SetLoading(false));
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title={"Create Job"} />
        <Button type="default" onClick={() => router.back()}>
          Back
        </Button>
      </div>

      <Form layout="vertical" onFinish={onFinish}>
        <JobForm />
        <div className="flex justify-end items-center gap-3 py-2">
          <Button type="default" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Save Job
          </Button>
        </div>
      </Form>
    </div>
  );
}

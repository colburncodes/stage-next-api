"use client";
import JobForm from "@/components/JobForm";
import PageTitle from "@/components/PageTitle";
import { Button, Form } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function Edit() {
  const router = useRouter();

  const onFinish = () => {};
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title={"Edit Job"} />
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

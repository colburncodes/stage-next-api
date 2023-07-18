"use client";
import JobForm from "@/components/JobForm";
import PageTitle from "@/components/PageTitle";
import { SetLoading } from "@/redux/loaderSlice";
import { Button, Form, message } from "antd";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Edit() {
  const [data, setData] = useState<any>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { jobid } = useParams();
  const onFinish = async (values: any) => {
    try {
      values._id = jobid;
      dispatch(SetLoading(true));
      const response = await axios.put("/api/jobs", values);
      console.log("Response", response);
      message.success(response.data.message);
      router.push("/jobs");
    } catch (error: any) {
      message.error(error.response.data.message || "Issue creating job!");
    } finally {
      dispatch(SetLoading(false));
    }
  };

  const fetchJob = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.get(`/api/jobs/${jobid}`);
      setData(response.data.data);
    } catch (error: any) {
      message.error(error.response.data.message || "Issue fetching job!");
    } finally {
      dispatch(SetLoading(false));
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    data && (
      <div>
        <div className="flex justify-between">
          <PageTitle title={"Edit Job"} />
          <Button type="default" onClick={() => router.back()}>
            Back
          </Button>
        </div>

        <Form layout="vertical" onFinish={onFinish} initialValues={data}>
          <JobForm />
          <div className="flex justify-end items-center gap-3 py-2">
            <Button type="default" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Update Job
            </Button>
          </div>
        </Form>
      </div>
    )
  );
}

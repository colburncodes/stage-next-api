"use client";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import Table from "antd/es/table";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SetLoading } from "@/redux/loaderSlice";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";

const getFullDate = (date: string): string => {
  const dateAndTime = date.split("T");

  return dateAndTime[0].split("-").reverse().join("-");
};

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();

  const getJobs = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.get("/api/jobs");
      message.success(response.data.message);
      setJobs(response.data.data);
    } catch (error: any) {
      message.error(error.response.message || "Issue processing request");
    } finally {
      dispatch(SetLoading(false));
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
      key: "jobType",
    },
    {
      title: "Work Type",
      dataIndex: "workType",
      key: "workType",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Salary From",
      dataIndex: "salaryFrom",
      key: "salaryFrom",
    },
    {
      title: "Salary To",
      dataIndex: "salaryTo",
      key: "salaryTo",
    },
    {
      title: "Posted On",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => getFullDate(date),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text: any, record: any) => {
        return (
          <div className="flex gap-3">
            <i
              className="ri-edit-box-line"
              onClick={() => router.push(`/jobs/edit/${record._id}`)}
            ></i>
            <i className="ri-delete-bin-7-line"></i>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title={"Jobs"} />
        <Button type="primary" onClick={() => router.push("/jobs/create")}>
          New Job
        </Button>
      </div>
      <Table columns={columns} dataSource={jobs} />
    </div>
  );
}



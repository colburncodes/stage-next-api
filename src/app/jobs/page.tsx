"use client";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import Table from "antd/es/table";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SetLoading } from "@/redux/loaderSlice";
import { Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

const getFullDate = (date: string): string => {
  const dateAndTime = date.split("T");

  return dateAndTime[0].split("-").reverse().join("-");
};

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const { user } = useSelector((state: any) => state.users);
  const router = useRouter();
  const dispatch = useDispatch();

  const fetchJobs = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.get(`/api/jobs?user=${user._id}`);
      setJobs(response.data.data);
    } catch (error: any) {
      message.error(error.response.message || "Issue processing request");
    } finally {
      dispatch(SetLoading(false));
    }
  };

  const handleClickDelete = async (jobId: string) => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.delete(`api/jobs/${jobId}`);
      message.success(response.data.message);
      fetchJobs();
    } catch (error: any) {
      message.error(error.response.message);
    } finally {
      dispatch(SetLoading(false));
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
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
            <i
              className="ri-delete-bin-7-line"
              onClick={() => handleClickDelete(record._id)}
            ></i>
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



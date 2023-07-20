"use client";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import Table from "antd/es/table";
import axios from "axios";
import { SetLoading } from "@/redux/loaderSlice";
import { message } from "antd";
import { useDispatch } from "react-redux";

const getFullDate = (date: string): string => {
  const dateAndTime = date.split("T");

  return dateAndTime[0].split("-").reverse().join("-");
};

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const dispatch = useDispatch();

  const fetchApplications = async () => {
    try {
      dispatch(SetLoading(true));
      //   const response = await axios.get("/api/applications");
      //   setApplications(response.data.data);
    } catch (error: any) {
      //   message.error(error.response.message || "Issue processing request");
    } finally {
      dispatch(SetLoading(false));
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const columns = [
    {
      title: "Application ID",
      dataIndex: "_id",
    },
    {
      title: "Job Title",
      dataIndex: "job",
      render: (job: any) => job.title,
    },
    {
      title: "Company",
      dataIndex: "job",
      render: (job: any) => job.company.name,
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Applied On",
      dataIndex: "createdAt",
      render: (date: string) => getFullDate(date),
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title={"Applications"} />
      </div>
      <Table columns={columns} dataSource={applications} />
    </div>
  );
}

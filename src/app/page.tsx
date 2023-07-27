"use client";
import PageTitle from "@/components/PageTitle";
import { SetLoading } from "@/redux/loaderSlice";
import { Col, Row, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();

  const fetchJobs = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.get("/api/jobs");
      setJobs(response.data.data);
    } catch (error: any) {
      message.error(error.response.message || "Issue processing request");
    } finally {
      dispatch(SetLoading(false));
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <PageTitle title="Listed Jobs" />
      <Row>
        {jobs.map((job: any) => (
          <Col key={job._id} span={8}>
            <h1 className="text-md" style={{ color: "black" }}>
              {job.title}
            </h1>
          </Col>
        ))}
      </Row>
    </div>
  );
}

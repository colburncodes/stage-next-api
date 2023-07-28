"use client";
import PageTitle from "@/components/PageTitle";
import { SetLoading } from "@/redux/loaderSlice";
import { Badge, Button, Card, Col, Row, Space, message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

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
      <PageTitle title="Open Positions" />
      <Row gutter={[16, 16]}>
        {jobs.map((job: any) => (
          <Card
            hoverable
            bordered={true}
            key={job._id}
            title={job.title}
            style={{ width: 300, margin: "3px" }}
          >
            {" "}
            <Badge.Ribbon text="New" color="yellow">
              <Col span={8} style={{}}></Col>
            </Badge.Ribbon>
            <p>
              <small style={{ color: "gray" }}>
                <b>Pay:</b> {job.salaryFrom} - {job.salaryTo}
              </small>
            </p>
            <p>
              <small style={{ color: "gray" }}>
                <b>Job Type:</b> {job.jobType}
              </small>
            </p>
            <p>
              <small style={{ color: "gray" }}>
                <b>Work Type:</b> {job.workType.toLowerCase()}
              </small>
            </p>
            <Button
              onClick={() => router.push(`/jobs/details/${job._id}`)}
              type="primary"
            >
              View Job
            </Button>
          </Card>
        ))}
      </Row>
    </div>
  );
}

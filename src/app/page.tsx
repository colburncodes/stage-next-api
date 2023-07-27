"use client";
import PageTitle from "@/components/PageTitle";
import { SetLoading } from "@/redux/loaderSlice";
import { Badge, Button, Card, Col, Row, Space, message } from "antd";
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
      <Row gutter={[16, 16]}>
        {jobs.map((job: any) => (
          <Card
            hoverable
            bordered={true}
            key={job._id}
            title={job.title}
            style={{ width: 300, margin: "3px" }}
          >
            <Col span={8} style={{ margin: "3px" }}></Col>
            {job.description}
            <p>
              <Badge.Ribbon text="Hot" color="red">
                <small style={{ color: "gray" }}>
                  <b>Pay:</b> {job.salaryFrom} - {job.salaryTo}
                </small>
              </Badge.Ribbon>
            </p>
            <p>
              <small style={{ color: "gray" }}>
                <b>Job Type:</b> {job.jobType} {job.salaryFrom} - {job.salaryTo}
              </small>
            </p>
            <p>
              <small style={{ color: "gray" }}>
                <b>Location:</b> {job.location.toLowerCase()}
              </small>
            </p>
            <Button type="primary">Apply Now</Button>
            <i className="ri-bookmark-line" style={{ fontSize: 24 }}></i>
          </Card>
        ))}
      </Row>
    </div>
  );
}

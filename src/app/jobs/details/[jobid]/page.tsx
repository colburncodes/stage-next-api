"use client";
import PageTitle from "@/components/PageTitle";
import { SetLoading } from "@/redux/loaderSlice";
import { Avatar, Button, Card, Col, Row, Tag, message } from "antd";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Details() {
  const [job, setJob] = useState<any>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { jobid } = useParams();

  const date = new Date(job?.createdAt);

  const fetchJob = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.get(`/api/jobs/${jobid}`);
      setJob(response.data.data);
      console.log(job);
    } catch (error: any) {
      message.error(error.response.data.message || "Issue fetching job!");
    } finally {
      dispatch(SetLoading(false));
    }
  };

  const onApply = async () => {};

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    job && (
      <>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <PageTitle title={job.title} /> */}
          <a className="cursor" onClick={() => router.push("/")}>
            <small>
              <i className="ri-arrow-left-s-fill"></i> Back to all jobs
            </small>
          </a>
          <Row gutter={[16, 16]}>
            <Card
              key={job._id}
              style={{
                width: 500,
                margin: "3px",
                backgroundColor: "#354375",
                color: "white",
              }}
            >
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <small>
                    <Tag className="label">
                      <b>Job Type</b>
                    </Tag>
                    <p>{job.jobType}</p>
                    <Tag className="label">
                      <b>Pay</b>
                    </Tag>
                    <p>
                      {job.salaryFrom} - {job.salaryTo}
                    </p>
                    <Tag className="label">
                      <b>Location</b>
                    </Tag>
                    <p>{job.location}</p>
                  </small>
                </Col>
                <Col span={12}>
                  <small>
                    <Tag className="label">
                      <b>Work Type</b>
                    </Tag>
                    <p>{job.workType}</p>
                    <Tag className="label">
                      <b>Experience</b>
                    </Tag>
                    <p>{job.experience} years</p>
                  </small>
                </Col>
                <Tag className="label">
                  <b>Description</b>
                </Tag>
                <p>{job.description}</p>
              </Row>
            </Card>

            <Card
              bordered={true}
              style={{
                height: 400,
                width: 300,
                margin: "3px",
              }}
            >
              <div className="avatar-details">
                <Avatar.Group
                  maxCount={2}
                  maxPopoverTrigger="click"
                  size={52}
                  maxStyle={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                    cursor: "pointer",
                  }}
                >
                  <Avatar
                    className="avatar"
                    style={{ backgroundColor: "#f56a00" }}
                    shape="circle"
                    alt="Avatar"
                    onClick={() => router.push("/profile")}
                  ></Avatar>
                </Avatar.Group>
              </div>
              <p>{job.user.name}</p>
              <Button
                onClick={() => {}}
                type="primary"
                style={{
                  margin: 5,
                  marginBottom: 5,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                block
              >
                <b>Apply Now</b>
              </Button>
              <Row gutter={[16, 16]}>
                <Col span={12} style={{ marginTop: 10 }}>
                  <small>
                    <Tag>Job posted</Tag>
                    <p>{date.toLocaleDateString()}</p>
                    <Tag>Pay</Tag>
                    <p>
                      {job.salaryFrom} - {job.salaryTo}
                    </p>
                    <Tag>Location</Tag>
                    <p>{job.location}</p>
                  </small>
                </Col>
              </Row>
            </Card>
          </Row>
        </div>
      </>
    )
  );
}

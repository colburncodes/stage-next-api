"use client";
import PageTitle from "@/components/PageTitle";
import { SetLoading } from "@/redux/loaderSlice";
import { Avatar, Badge, Card, Col, Row, Tag, message } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Details() {
  const [job, setJob] = useState<any>(null);
  const dispatch = useDispatch();
  const { jobid } = useParams();

  const fetchJob = async () => {
    try {
      dispatch(SetLoading(true));
      const response = await axios.get(`/api/jobs/${jobid}`);
      setJob(response.data.data);
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
    job && (
      <>
        <div>
          <PageTitle title={job.title} />

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
                  <p>{job.experience}</p>
                </small>
              </Col>
              <Tag className="label">
                <b>Description</b>
              </Tag>
              <p>{job.description}</p>
            </Row>
          </Card>
        </div>
      </>
    )
  );
}

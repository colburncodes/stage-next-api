"use client";
import { Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import React from "react";

export default function JobForm() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input type="text" />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Required" }]}
        >
          <TextArea style={{ width: "100%", height: 75 }} />
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item label="Job Type" name="type">
          <Select defaultValue={"Select"}>
            <Option value="full-time">Full Time</Option>
            <Option value="part-time">Part Time</Option>
            <Option value="contractor">Contractor</Option>
          </Select>
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item label="Location" name="location">
          <Input type="text" />
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item label="Experience" name="experience">
          <Input type="text" />
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item label="Work Type" name="workType">
          <Select defaultValue={"Select"}>
            <Option value="remote">Remote</Option>
            <Option value="office">Office</Option>
          </Select>
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item label="Salary From Range" name="salaryFrom">
          <Input type="text" />
        </Form.Item>
      </Col>

      <Col span={8}>
        <Form.Item label="Salary To Range" name="salaryTo">
          <Input type="text" />
        </Form.Item>
      </Col>
    </Row>
  );
}

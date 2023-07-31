"use client";
import { Button, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import React from "react";

export default function JobForm() {
  return (
    <>
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
          <Form.Item label="Job Type" name="jobType">
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
            <Input type="number" />
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
            <Input type="number" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Salary To Range" name="salaryTo">
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>

      {/* Categories */}
      <div className="my-3">
        <h1 className="text-md">Categories</h1>
        <Form.List name="categories">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={[16, 16]} align={"bottom"}>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Category"
                      name={[name, "category"]}
                      rules={[{ required: true, message: "required" }]}
                    >
                      <Input type="text" />
                    </Form.Item>
                  </Col>
                  <i
                    className="ri-delete-bin-line"
                    onClick={() => remove(name)}
                  ></i>
                </Row>
              ))}
              <Form.Item className="my-2">
                <Button type="dashed" onClick={() => add()} block>
                  Add Category
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>

      {/* Skills */}
      <div className="my-3">
        <h1 className="text-md">Skills</h1>
        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={[16, 16]} align={"bottom"}>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Technology"
                      name={[name, "technology"]}
                      rules={[{ required: true, message: "required" }]}
                    >
                      <Input type="text" />
                    </Form.Item>
                  </Col>
                  <i
                    className="ri-delete-bin-line"
                    onClick={() => remove(name)}
                  ></i>
                </Row>
              ))}
              <Form.Item className="my-2">
                <Button type="dashed" onClick={() => add()} block>
                  Add Skills
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
    </>
  );
}

import { Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

function EmployerForm() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            label="Company Name"
            name="name"
            rules={[{ required: true, message: "Required" }]}
          >
            <Input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Required" }]}
          >
            <Input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Phone" name="phone">
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Est Year" name="establishedYear">
            <Input type="number" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item
            label="Website"
            name="website"
            rules={[{ required: true, message: "Required" }]}
          >
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Company Size" name="companySize">
            <Input type="number" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Company Info" name="companyInfo">
            <TextArea style={{ width: "100%", height: 75 }} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Address" name="address">
            <TextArea style={{ width: "100%", height: 75 }} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default EmployerForm;

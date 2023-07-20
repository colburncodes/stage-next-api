import { Button, Col, Form, Input, Row, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

function EmployeeForm() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            label="Name"
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

        <Col span={24}>
          <Form.Item label="Career Objective" name="career">
            <TextArea style={{ width: "100%", height: 75 }} />
          </Form.Item>
        </Col>
      </Row>

      {/* Education */}
      <div className="my-3">
        <h1 className="text-md">Education</h1>
        <Form.List name="education">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={[16, 16]} align={"bottom"}>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Degree"
                      name={[name, "degree"]}
                      rules={[{ required: true, message: "required" }]}
                    >
                      <Input type="text" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="School"
                      name={[name, "school"]}
                      rules={[{ required: true, message: "required" }]}
                    >
                      <Input type="text" />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      {...restField}
                      label="Year"
                      name={[name, "year"]}
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
                  Add Education
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
                  <Col span={4}>
                    <Form.Item
                      {...restField}
                      label="Rating"
                      name={[name, "rating"]}
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

      {/* Experience */}
      <div className="my-3">
        <h1 className="text-md">Experience</h1>
        <Form.List name="experience">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={[16, 16]} align={"bottom"}>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Company"
                      name={[name, "company"]}
                      rules={[{ required: true, message: "required" }]}
                    >
                      <Input type="text" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      label="Role"
                      name={[name, "role"]}
                      rules={[{ required: true, message: "required" }]}
                    >
                      <Input type="role" />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item
                      {...restField}
                      label="Year"
                      name={[name, "year"]}
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
                  Add Experience
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
    </>
  );
}

export default EmployeeForm;

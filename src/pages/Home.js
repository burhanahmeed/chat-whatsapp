import React from 'react';
import { Link } from 'react-router';

import './../App.css';

import { Card, Row, Col, Form, Input, InputNumber, Select, Button } from 'antd';

export default class Home extends React.Component {
    constructor () {
        super ();
        this.state = {
            formLayout: 'horizontal'
        }
    }
    render () {
        const { formLayout } = this.state;
        return (
            <div style={{ 'position': 'relative' }}>
                <Row>
                    <Col lg={10} xl={14}>
                        <div className="illustrator">
                        </div>
                    </Col>
                    <Col lg={6} xl={10}>
                    <div className="wa-card">
                        <h1><strong>Welcome to Redirector</strong></h1>
                        <p>Using Redirector you don't need to save every strangers number anymore to chat them.</p>
                        <Card title="Use Redirector" bordered={false} >
                        <Form layout={formLayout}>
                            <Form.Item label="Whatsapp number">
                            <Input.Group compact>
                                <Select defaultValue="62">
                                    <Select.Option value="62">(INA) 62</Select.Option>
                                    <Select.Option value="65">(SIN) 65</Select.Option>
                                </Select>
                                <InputNumber placeholder="87219821234" style={{ width: '70%' }}/>
                            </Input.Group>
                            </Form.Item>
                            <Form.Item label="Message">
                                <Input.TextArea placeholder="input a any message you want" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary">
                                    Redirected
                                </Button>
                            </Form.Item>
                        </Form>
                        </Card>
                    </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
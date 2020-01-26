import React from 'react';
import { Link } from 'react-router';

import './../App.css';

import { Card, Row, Col, Form, Input, InputNumber, Select, Button } from 'antd';

export default class Home extends React.Component {
    constructor () {
        super ();
        this.state = {
            formLayout: 'horizontal',
            countryCode: '62',
            number: '',
            message: '',
            isLoading: false
        }
        this.doAction = this.doAction.bind(this);
    }

    doAction (e) {
        let property = this.state;
        let number  = property.number,
            code    = property.countryCode,
            message = property.message;
        this.setState({ isLoading: true });
        setTimeout(() => {
            window.open(`https://api.whatsapp.com/send?phone=${code}${number}&text=${message}&source=&data=`, '_blank');
            this.setState({ 
                isLoading: false,
                message: ''
             });
        }, 2000);
        e.preventDefault();
    }

    onChanges (name, e) {
        let text = e;
        if (name == 'message') {
            text = e.target.value
        }
        this.setState({ [name]: text });
    }

    render () {
        const { formLayout, countryCode, number, message, isLoading } = this.state;
        const windowWidth = window.innerWidth;
        let sideImg = '';
        if (windowWidth > 750) {
          sideImg = (
            <Col lg={14} xl={14}>
                <div className="illustrator">
                </div>
            </Col>
          );
        }
        let button = '';
        if (isLoading) {
            button = (
                <Button type="primary">
                    Please wait...
                </Button>
            );
        } else {
            button = (
                <Button onClick={this.doAction} type="primary">
                    Send
                </Button>
            );
        }
        return (
            <div style={{ 'position': 'relative' }}>
                <Row>
                    
                    { sideImg }

                    <Col lg={10} xl={10}>
                    <div className="wa-card">
                        <h1><strong>Welcome to Redirector</strong></h1>
                        <p>Using Redirector you don't need to save every strangers number anymore to chat with them.</p>
                        <Card title="Use Redirector" bordered={false} >
                        <Form layout={formLayout}>
                            <Form.Item label="Targeted whatsapp number">
                            <Input.Group compact>
                                <Select name="countryCode" value={countryCode} onChange={this.onChanges.bind(this, 'countryCode')} defaultValue={countryCode} style={{ width: '35%' }}>
                                    <Select.Option value="62">🇮🇩 &nbsp; 62</Select.Option>
                                    <Select.Option value="65">🇸🇬 &nbsp; 65</Select.Option>
                                    <Select.Option value="60">🇲🇾 &nbsp; 60</Select.Option>
                                    <Select.Option value="63">🇵🇭 &nbsp; 63</Select.Option>
                                </Select>
                                <InputNumber name="number" onChange={this.onChanges.bind(this, 'number')} value={number} placeholder="87219821234" style={{ width: '65%' }}/>
                            </Input.Group>
                            </Form.Item>
                            <Form.Item label="Message">
                                <Input.TextArea name="message" onChange={this.onChanges.bind(this, 'message')} value={message} placeholder="input a any message you want" />
                            </Form.Item>
                            <Form.Item>
                                { button }
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
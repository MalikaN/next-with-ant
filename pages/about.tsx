import React from "react";

import AppLayout from "../components/AppLayout";

import { Switch, Table, Row, Col } from "antd";


const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: 'mike@gmail.com',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: 'john@gmail.com',
    },
    {
        key: '2',
        name: 'Jane',
        age: 42,
        address: 'jane@gmail.com',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Email',
        dataIndex: 'address',
        key: 'address',
    },
];

const About = () => {
    return (
        <AppLayout>
            <Row style={{ marginTop: "0.5rem" }}>
                <h2 id="about_heading">About page</h2>
                <Col span={24} id="about-table">
                    <div id="about_table">
                        <Table className='candidateSearchlist-table' dataSource={dataSource} columns={columns} />
                    </div>
                </Col>

            </Row>
        </AppLayout>
    );
};

export default About;

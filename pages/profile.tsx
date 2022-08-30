import React from "react";

import AppLayout from "../components/AppLayout";

import { Switch, Table, Row, Col } from "antd";


const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
    {
        key: '3',
        name: 'Mary',
        age: 45,
        address: '10 york Street',
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
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const profile = () => {
    return (
        <AppLayout>
            <Row style={{ marginTop: "0.5rem" }}>
                <h2 id="profile_heading">Profile page</h2>
                <Col span={24} >
                    <div id="profile_table">
                        <Table className='onboardinglist-table' dataSource={dataSource} columns={columns} />
                    </div>
                </Col>

            </Row>
        </AppLayout>
    );
};

export default profile;

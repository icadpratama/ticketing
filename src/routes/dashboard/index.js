import React from "react";
import { Col, Row } from "antd";

import SiteVisit from "components/dashboard/CRM/SiteVisit";
import Auxiliary from "util/Auxiliary";
import IconWithTextCard from "components/dashboard/CRM/IconWithTextCard";

const Dashboard = () => {
    return (
        <Auxiliary>
            <Row span={24}>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <IconWithTextCard cardColor="purple" title="7" subTitle="Unresolved" />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <IconWithTextCard cardColor="red" title="10" subTitle="Overdue" />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <IconWithTextCard cardColor="indigo" title="4" subTitle="Due Today" />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <IconWithTextCard cardColor="cyan" title="20" subTitle="Open" />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <IconWithTextCard cardColor="blue" title="3" subTitle="On Hold" />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                    <IconWithTextCard cardColor="orange" title="11" subTitle="Unassigned" />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <div className="gx-card">
                        <div className="gx-card-body">
                            <Row>
                                <Col xl={24} lg={24} md={24} sm={24} xs={24} className="gx-visit-col">
                                    <SiteVisit />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Auxiliary>
    );
};

export default Dashboard;

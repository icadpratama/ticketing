import React from "react";
import { ticketList } from "./data";
import { Col, Row } from "antd";
import ContainerHeader from "components/ContainerHeader/index";
import IntlMessages from "util/IntlMessages";
import CardsListItem from "./component/CardListItem";

function Ticket({ match }) {
    return (
        <div className="gx-main-content gx-pb-sm-4">
            <Row>
                <Col span={24}>
                    <ContainerHeader title={<IntlMessages id="sidebar.allTickets" />} match={match} />
                </Col>
                <Col span={24}>
                    {ticketList.map((data, index) => (
                        <CardsListItem key={index} data={data} styleName="gx-card-list" />
                    ))}
                </Col>
            </Row>
        </div>
    )
}

export default Ticket;

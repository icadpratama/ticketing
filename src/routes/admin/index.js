import React from "react";
import { Card } from "antd";
import Auxiliary from "util/Auxiliary";

const Admin = () => {
    return (
        <Auxiliary>
            <Card title="General Setting">
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-family" style={{ paddingRight: 10 }} /> Company
                    </Card.Grid>
                </a>
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-team" style={{ paddingRight: 10 }} /> Agent
                    </Card.Grid>
                </a>
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-ticket-new" style={{ paddingRight: 10 }} /> Ticket
                    </Card.Grid>
                </a>
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-setting" style={{ paddingRight: 10 }} /> Admin
                    </Card.Grid>
                </a>
            </Card>

            <Card title="Account Setting">
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-user-o" style={{ paddingRight: 10 }} /> Account
                    </Card.Grid>
                </a>
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-bitcoin" style={{ paddingRight: 10 }} /> Plans & Billing
                    </Card.Grid>
                </a>
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-table-data" style={{ paddingRight: 10 }} /> Reports
                    </Card.Grid>
                </a>
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-editor" style={{ paddingRight: 10 }} /> Audit Log
                    </Card.Grid>
                </a>

                {/* Test Many Menus */}
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-family" style={{ paddingRight: 10 }} /> Company
                    </Card.Grid>
                </a>
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-team" style={{ paddingRight: 10 }} /> Agent
                    </Card.Grid>
                </a>
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-ticket-new" style={{ paddingRight: 10 }} /> Ticket
                    </Card.Grid>
                </a>
                <a href="/" style={{ color: "#545454", fontSize: 15.5 }}>
                    <Card.Grid>
                        <i className="icon icon-setting" style={{ paddingRight: 10 }} /> Admin
                    </Card.Grid>
                </a>
            </Card>
        </Auxiliary>
    );
};

export default Admin;

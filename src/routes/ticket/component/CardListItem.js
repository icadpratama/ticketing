import React from "react";
import { Dropdown, Menu, Icon } from "antd";

function handleMenuClick(e) {
    alert("You are clicked " + e.key);
    console.log('click', e);
}

const menuPriority = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="0">
            Low
        </Menu.Item>
        <Menu.Item key="1">
            Medium
        </Menu.Item>
        <Menu.Item key="3">
            High
        </Menu.Item>
        <Menu.Item key="4">
            Urgent
        </Menu.Item>
    </Menu>
);

const menuAssign = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="0">
            Irsyad
        </Menu.Item>
        <Menu.Item key="1">
            Jamal
        </Menu.Item>
        <Menu.Item key="3">
            Pratama
        </Menu.Item>
        <Menu.Item key="4">
            Putra
        </Menu.Item>
    </Menu>
);

const menuStatus = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="0">
            Open
        </Menu.Item>
        <Menu.Item key="1">
            Pending
        </Menu.Item>
        <Menu.Item key="3">
            Resolved
        </Menu.Item>
        <Menu.Item key="4">
            Closed
        </Menu.Item>
        <Menu.Item key="5">
            Waiting on Agent
        </Menu.Item>
        <Menu.Item key="6">
            Waiting on Third Party
        </Menu.Item>
    </Menu>
);

function CardsListItem({ styleName, data }) {
    const { avatar, subject, created, name, response, description } = data;
    return (
        <div className={`gx-user-list ${styleName}`}>
            <img alt="..." src={avatar} className="gx-avatar-img gx-border-0" />
            <div className="gx-description">
                <div className="gx-flex-row">
                    <a href="/"><h4 className="gx-text-blue">{subject}</h4></a>
                    <span className="gx-d-inline-block gx-toolbar-separator">&nbsp;</span>
                    <span>{name}</span>
                </div>
                <p className="gx-text-black gx-mb-2">{description}</p>
                <p>
                    <span className="gx-mr-3"><span className="gx-text-grey">{created}</span></span>
                    <span className="gx-mr-3"><span className="gx-text-grey">{response}</span></span>
                </p>
            </div>
            <div className="gx-card-list-footer">
                <Dropdown overlay={menuPriority} trigger={['click']}>
                    <span className="gx-link ant-dropdown-link">
                        Open <Icon type="down" />
                    </span>
                </Dropdown>
                <br></br>
                <Dropdown overlay={menuAssign} trigger={['click']}>
                    <span className="gx-link ant-dropdown-link">
                        Irsyad <Icon type="down" />
                    </span>
                </Dropdown>
                <br></br>
                <Dropdown overlay={menuStatus} trigger={['click']}>
                    <span className="gx-link ant-dropdown-link">
                        Low <Icon type="down" />
                    </span>
                </Dropdown>
            </div>
        </div>
    );
}

export default CardsListItem;

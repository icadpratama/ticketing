import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";

import Auxiliary from "util/Auxiliary";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";
import { connect } from "react-redux";

const MenuItemGroup = Menu.ItemGroup;


class SidebarContent extends Component {

  getNoHeaderClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
      return "gx-no-header-notifications";
    }
    return "";
  };
  getNavStyleSubMenuClass = (navStyle) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };

  render() {
    const { themeType, navStyle, pathname } = this.props;
    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1];
    return (
      <Auxiliary>
        <SidebarLogo />
        <div className="gx-sidebar-content">
          <div className={`gx-sidebar-notifications ${this.getNoHeaderClass(navStyle)}`}>
            <UserProfile />
            <AppsNavigation />
          </div>
          <CustomScrollbars className="gx-layout-sider-scrollbar">
            <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
              mode="inline">

              <MenuItemGroup key="main" className="gx-menu-group" title={<IntlMessages id="sidebar.main" />}>
                <Menu.Item key="dashboard">
                  <Link to="/dashboard"><i className="icon icon-dasbhoard" />
                    <IntlMessages id="sidebar.dashboard" /></Link>
                </Menu.Item>

                <Menu.Item key="ticket">
                  <Link to="/ticket"><i className="icon icon-tickets" />
                    <IntlMessages id="sidebar.ticket" /></Link>
                </Menu.Item>

                <Menu.Item key="company">
                  <Link to="/company"><i className="icon icon-family" />
                    <IntlMessages id="sidebar.company" /></Link>
                </Menu.Item>

                <Menu.Item key="agent">
                  <Link to="/agent"><i className="icon icon-team" />
                    <IntlMessages id="sidebar.agent" /></Link>
                </Menu.Item>

                <Menu.Item key="admin">
                  <Link to="/admin"><i className="icon icon-setting" />
                    <IntlMessages id="sidebar.admin" /></Link>
                </Menu.Item>

              </MenuItemGroup>
            </Menu>
          </CustomScrollbars>
        </div>
      </Auxiliary>
    );
  }
}

SidebarContent.propTypes = {};
const mapStateToProps = ({ settings }) => {
  const { navStyle, themeType, locale, pathname } = settings;
  return { navStyle, themeType, locale, pathname }
};
export default connect(mapStateToProps)(SidebarContent);


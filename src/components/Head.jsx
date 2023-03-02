import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React from "react";
import Dropdown from "./Dropdown";
import { Layout } from "antd";
const { Header } = Layout;

const Head = ({ setCollapsed, collapsed }) => {
  return (
    <Header
      style={{
        paddingRight: "1rem",
        background: "#e6f4ff",
        display: "flex",
        justifyContent: "space-between",
        widows: "100%",
      }}
    >
      <div>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: "trigger",
          onClick: () => setCollapsed(!collapsed),
        })}
      </div>
      <Dropdown />
    </Header>
  );
};

export default Head;

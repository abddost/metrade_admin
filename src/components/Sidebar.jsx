import React from "react";
import {
  HddOutlined,
  NumberOutlined,
  UnorderedListOutlined,
  NodeIndexOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: "960px" }}>
        <div
          className="logo"
          style={{
            height: "32px",
            margin: "16px",
            color: "#fff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "inhetit", color: "inherit" }}>
            <h2>{collapsed ? "A" : "Admin"}</h2>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          items={[
            {
              key: "/",
              icon: <NumberOutlined />,
              label: "products",
            },
            {
              key: "/categories",
              icon: <HddOutlined />,
              label: "categories",
            },
            {
              key: "/subcategories",
              icon: <NodeIndexOutlined />,
              label: "sub categories",
            },
            {
              key: "/brends",
              icon: <UnorderedListOutlined />,
              label: "brends",
            },
          ]}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
    </Layout>
  );
};
export default Sidebar;

import React from "react";
import { Outlet } from "react-router-dom";
import Head from "../../components/Head";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { products } = useSelector((store) => store.allProducts);
  return (
    <main style={{ display: "grid", gridTemplateColumns: "auto 1fr" }}>
      <Sidebar collapsed={collapsed} />
      <div>
        <Head setCollapsed={setCollapsed} collapsed={collapsed} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            margin: "2.5rem 2.5rem 1.5rem  2.5rem",
            justifyContent: "space-between",
          }}
        >
          <Link to="form">
            <Button type="primary" size={"large"}>
              Add <PlusOutlined />
            </Button>
          </Link>
          <h2 style={{ fontWeight: "500" }}>
            <span style={{ color: "#c41d7f" }}>{products.length}</span> products
          </h2>
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;

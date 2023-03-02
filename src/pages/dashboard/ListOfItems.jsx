import { Space, Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { Column } = Table;
const ListOfItems = () => {
  const { products } = useSelector((store) => store.allProducts);
  return (
    <>
      <Table dataSource={products} style={{ paddingLeft: "1rem" }}>
        <Column title="#" dataIndex="key" key="key" />
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column title="City" dataIndex="city" key="city" />

        <Column
          title="Action"
          key="action"
          render={() => (
            <Space size="middle">
              <Link to="form">
                <Button type="link" style={{ border: "none" }} danger size={"small"}>
                  <EditOutlined />
                </Button>
              </Link>
              <Button type="link" size={"samll"}>
                <DeleteOutlined />
              </Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
};
export default ListOfItems;

import { ShoppingCartOutlined } from "@ant-design/icons";

import {
  DashboardTotalCount,
  DashboardTotalCountSkeleton,
  Text,
} from "@/components";
import { Layout } from "antd";

const { Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Content>
        <Text size="xl" className="font-bold">
          Dashboard
        </Text>

        <div className="mt-5">
          <DashboardTotalCount
            title="Total Orders"
            count={75}
            icon={<ShoppingCartOutlined />}
            iconColor="#4757E6"
            iconBgColor="#bbcbff"
            variation={3}
          />
        </div>
        <DashboardTotalCountSkeleton />
      </Content>
    </Layout>
  );
};

export default Home;

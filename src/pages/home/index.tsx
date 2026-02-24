import { ShoppingCartOutlined } from "@ant-design/icons";

import {
  DashboardCustomerFeedbackList,
  DashboardCustomerFeedbackListSkeleton,
  DashboardNetProfit,
  DashboardNetProfitSkeleton,
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

        <div className="mt-8">
          <DashboardNetProfit amount={6759.25} progress={70} variation={3} />
        </div>
        <div className="mt-4">
          <DashboardNetProfitSkeleton />
        </div>

        <div className="mt-8">
          <DashboardCustomerFeedbackList
            feedbacks={[
              {
                name: "Ilysa Hurt",
                rating: 5,
                comment:
                  "Breakfast with a perfect Eggs Benedict on focaccia and delightful coffee, earning a solid five stars.",
              },
              {
                name: "Jeff Dickson",
                rating: 4,
                comment:
                  "While the Gluten-Free Pizza was a departure from the standard offerings, there was effort in crafting a superior option.",
              },
            ]}
          />
        </div>
        <div className="mt-4">
          <DashboardCustomerFeedbackListSkeleton count={2} />
        </div>
      </Content>
    </Layout>
  );
};

export default Home;

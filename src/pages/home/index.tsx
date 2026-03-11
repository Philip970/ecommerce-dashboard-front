import { ShoppingCartOutlined } from "@ant-design/icons";

import {
  DashboardActivityChart,
  DashboardActivityChartSkeleton,
  DashboardCustomerFeedbackList,
  DashboardCustomerFeedbackListSkeleton,
  DashboardNetProfit,
  DashboardNetProfitSkeleton,
  DashboardQuickLinks,
  DashboardTotalCount,
  DashboardTotalCountSkeleton,
  Text,
} from "@/components";
import { Layout } from "antd";

const { Content } = Layout;

const monthlySalesData = [
  { label: "01-01-2026", value: 7200 },
  { label: "02-01-2026", value: 7000 },
  { label: "03-01-2026", value: 7600 },
  { label: "04-01-2026", value: 8100 },
  { label: "05-01-2026", value: 7450 },
  { label: "06-01-2026", value: 8600 },
  { label: "07-01-2026", value: 9200 },
  { label: "08-01-2026", value: 8350 },
  { label: "09-01-2026", value: 7800 },
  { label: "10-01-2026", value: 8950 },
  { label: "11-01-2026", value: 9800 },
  { label: "12-01-2026", value: 9400 },
  { label: "13-01-2026", value: 9050 },
  { label: "14-01-2026", value: 9700 },
  { label: "15-01-2026", value: 10400 },
  { label: "16-01-2026", value: 9950 },
  { label: "17-01-2026", value: 9100 },
  { label: "18-01-2026", value: 10150 },
  { label: "19-01-2026", value: 10900 },
  { label: "20-01-2026", value: 11600 },
  { label: "21-01-2026", value: 11250 },
  { label: "22-01-2026", value: 10500 },
  { label: "23-01-2026", value: 9650 },
  { label: "24-01-2026", value: 10200 },
  { label: "25-01-2026", value: 11000 },
  { label: "26-01-2026", value: 11850 },
  { label: "27-01-2026", value: 11400 },
  { label: "28-01-2026", value: 10650 },
  { label: "29-01-2026", value: 10050 },
  { label: "30-01-2026", value: 10800 },
  { label: "31-01-2026", value: 11550 },
];

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
        <div className="mt-4">
          <DashboardQuickLinks />
        </div>

        <div className="mt-4">
          <DashboardActivityChart
            data={monthlySalesData}
            title="Activity"
            periodLabel="Monthly"
          />
        </div>
        <div className="mt-4">
          <DashboardActivityChartSkeleton barsCount={31} />
        </div>
      </Content>
    </Layout>
  );
};

export default Home;

import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DollarCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import {
  DashboardActivityChart,
  DashboardCustomerFeedbackList,
  DashboardNetProfit,
  DashboardQuickLinks,
  DashboardRecentOrders,
  DashboardTotalCount,
  Text,
} from "@/components";
import { Layout, Row, Col } from "antd";

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

const orders = [
  {
    key: "1",
    customer: "Wade Warren",
    orderNo: "15478256",
    amount: 124,
    status: "Delivered",
  },
  {
    key: "2",
    customer: "Jane Cooper",
    orderNo: "48935766",
    amount: 365.02,
    status: "Delivered",
  },
  {
    key: "3",
    customer: "Guy Hawkins",
    orderNo: "78958215",
    amount: 45.88,
    status: "Cancelled",
  },
  {
    key: "4",
    customer: "Kristin Watson",
    orderNo: "20965732",
    amount: 65,
    status: "Pending",
  },
  {
    key: "5",
    customer: "Cody Fisher",
    orderNo: "95715620",
    amount: 545,
    status: "Delivered",
  },
  {
    key: "6",
    customer: "Savannah Nguyen",
    orderNo: "78514568",
    amount: 128.2,
    status: "Delivered",
  },
  {
    key: "7",
    customer: "Brooklyn Simmons",
    orderNo: "63489127",
    amount: 249.99,
    status: "Pending",
  },
  {
    key: "8",
    customer: "Leslie Alexander",
    orderNo: "91827463",
    amount: 89.5,
    status: "Delivered",
  },
  {
    key: "9",
    customer: "Courtney Henry",
    orderNo: "57264019",
    amount: 312.75,
    status: "Cancelled",
  },
];

const Home = () => {
  return (
    <Layout>
      <Content>
        <Text size="xl" className="font-bold">
          Dashboard
        </Text>

        <Row gutter={[16, 16]} className="mt-5">
          <Col xs={24} lg={16}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} xl={6}>
                <DashboardTotalCount
                  title="Total Orders"
                  count={75}
                  icon={<ShoppingCartOutlined />}
                  iconColor="#5B8FF9"
                  iconBgColor="rgba(91,143,249,0.2)"
                  variation={3}
                />
              </Col>
              <Col xs={24} sm={12} xl={6}>
                <DashboardTotalCount
                  title="Total Delivered"
                  count={70}
                  icon={<CheckCircleOutlined />}
                  iconColor="#5AD8A6"
                  iconBgColor="rgba(90,216,166,0.2)"
                  variation={3}
                />
              </Col>
              <Col xs={24} sm={12} xl={6}>
                <DashboardTotalCount
                  title="Total Cancelled"
                  count={5}
                  icon={<CloseCircleOutlined />}
                  iconColor="#F4664A"
                  iconBgColor="rgba(244,102,74,0.2)"
                  variation={-3}
                />
              </Col>
              <Col xs={24} sm={12} xl={6}>
                <DashboardTotalCount
                  title="Total Revenue"
                  count={12000}
                  icon={<DollarCircleOutlined />}
                  iconColor="#F6BD16"
                  iconBgColor="rgba(246,189,22,0.2)"
                  variation={-3}
                />
              </Col>
            </Row>
          </Col>

          <Col xs={24} lg={8}>
            <DashboardNetProfit amount={6759.25} progress={70} variation={3} />
          </Col>

          <Col xs={24} lg={16}>
            <DashboardActivityChart
              data={monthlySalesData}
              title="Activity"
              periodLabel="Monthly"
            />
          </Col>

          <Col xs={24} lg={8}>
            <DashboardQuickLinks />
          </Col>

          <Col xs={24} lg={16}>
            <DashboardRecentOrders title="Recent Orders" data={orders} />
          </Col>

          <Col xs={24} lg={8}>
            <DashboardCustomerFeedbackList
              feedbacks={[
                {
                  name: "Jenny Wilson",
                  rating: 5,
                  comment:
                    "The food was excellent and service was very attentive.",
                },
                {
                  name: "Dianne Russell",
                  rating: 4,
                  comment: "Great variety and fresh ingredients every time.",
                },
                {
                  name: "Devon Lane",
                  rating: 4,
                  comment:
                    "Normally wings are juicy and flavorful, very consistent.",
                },
              ]}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;

import { Table, Tag, theme } from "antd";
import { Text } from "../common/text";

export type DashboardRecentOrder = {
  key: string;
  customer: string;
  orderNo: string;
  amount: number;
  status: string;
};

type DashboardRecentOrdersProps = {
  title?: string;
  data: DashboardRecentOrder[];
};

const statusColorMap: Record<string, string> = {
  Delivered: "green",
  Pending: "gold",
  Cancelled: "red",
};

const { useToken } = theme;

export const DashboardRecentOrders = ({
  title = "Recent Orders",
  data,
}: DashboardRecentOrdersProps) => {
  const { token } = useToken();

  const columns = [
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Order No.",
      dataIndex: "orderNo",
      key: "orderNo",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (value: number) => `$${value.toFixed(2)}`,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={statusColorMap[status] ?? "default"}>{status}</Tag>
      ),
    },
  ];

  return (
    <div
      className="w-full rounded-md p-4"
      style={{ backgroundColor: token.colorBgContainer }}
    >
      <Text size="xl" className="font-bold">
        {title}
      </Text>
      <div className="mt-4 max-h-[340px] overflow-y-auto">
        <Table
          dataSource={data}
          columns={columns}
          size="small"
          pagination={false}
          scroll={{ x: 700 }}
        />
      </div>
    </div>
  );
};

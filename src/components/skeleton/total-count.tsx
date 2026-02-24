import { Skeleton, theme } from "antd";

const { useToken } = theme;

export const DashboardTotalCountSkeleton = () => {
  const { token } = useToken();

  return (
    <div
      className="flex flex-col gap-4 rounded-md p-2"
      style={{ backgroundColor: token.colorBgContainer }}
    >
      <div className="flex flex-col">
        <Skeleton.Node
          active
          style={{ width: 32, height: 32, borderRadius: 8 }}
        />

        <Skeleton.Node active style={{ width: 90, height: 12 }} />
      </div>

      <div className="flex items-end justify-between">
        <Skeleton.Node active style={{ width: 58, height: 30 }} />
        <Skeleton.Node active style={{ width: 32, height: 12 }} />
      </div>
    </div>
  );
};

import { Skeleton, theme } from "antd";

const { useToken } = theme;

export const DashboardNetProfitSkeleton = () => {
  const { token } = useToken();

  return (
    <div
      className="flex w-full items-stretch justify-between rounded-md p-4"
      style={{ backgroundColor: token.colorBgContainer }}
    >
      <div className="flex flex-col justify-between gap-2">
        <Skeleton.Node active style={{ width: 64, height: 12 }} />
        <Skeleton.Node active style={{ width: 140, height: 44 }} />
        <Skeleton.Node active style={{ width: 36, height: 12 }} />
      </div>

      <div className="flex flex-col items-center gap-2">
        <Skeleton.Node active style={{ width: 100, height: 100, borderRadius: 9999 }} />
        <Skeleton.Node active style={{ width: 140, height: 12 }} />
      </div>
    </div>
  );
};

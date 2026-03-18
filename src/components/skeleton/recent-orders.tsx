import { Skeleton, theme } from "antd";

const { useToken } = theme;

export const DashboardRecentOrdersSkeleton = () => {
  const { token } = useToken();

  return (
    <div
      className="w-full rounded-md p-4"
      style={{ backgroundColor: token.colorBgContainer }}
    >
      <Skeleton.Node active style={{ width: 140, height: 24 }} />

      <div className="mt-4 flex items-center gap-4">
        <Skeleton.Node active style={{ width: 150, height: 12 }} />
        <Skeleton.Node active style={{ width: 120, height: 12 }} />
        <Skeleton.Node active style={{ width: 90, height: 12 }} />
        <Skeleton.Node active style={{ width: 100, height: 12 }} />
      </div>

      <div className="mt-3 flex flex-col gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex items-center gap-4">
            <Skeleton.Node active style={{ width: 150, height: 16 }} />
            <Skeleton.Node active style={{ width: 120, height: 16 }} />
            <Skeleton.Node active style={{ width: 90, height: 16 }} />
            <Skeleton.Node
              active
              style={{ width: 90, height: 20, borderRadius: 9999 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

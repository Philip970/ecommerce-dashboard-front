import { Skeleton } from "antd";

export const DashboardCustomerFeedbackSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex items-center gap-3">
        <Skeleton.Node active style={{ width: 36, height: 36, borderRadius: 9999 }} />
        <Skeleton.Node active style={{ width: 120, height: 22 }} />
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton.Node key={index} active style={{ width: 14, height: 14 }} />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <Skeleton.Node active style={{ width: "100%", height: 14 }} />
        <Skeleton.Node active style={{ width: "88%", height: 14 }} />
      </div>
    </div>
  );
};

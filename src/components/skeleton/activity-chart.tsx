import { Skeleton, theme } from "antd";
import { Text } from "../common/text";

type DashboardActivityChartSkeletonProps = {
  barsCount?: number;
};

const { useToken } = theme;

export const DashboardActivityChartSkeleton = ({
  barsCount = 16,
}: DashboardActivityChartSkeletonProps) => {
  const { token } = useToken();

  const barHeights = [44, 68, 56, 84, 52, 74, 92, 64, 80, 104, 72, 88];

  return (
    <div
      className="w-full rounded-md p-4"
      style={{ backgroundColor: token.colorBgContainer }}
    >
      <div className="mb-3 flex items-center justify-between">
        <Text size="xl" className="font-bold">
          Activity
        </Text>
        <Skeleton.Node
          active
          style={{ width: 72, height: 24, borderRadius: 9999 }}
        />
      </div>

      <div className="flex gap-3">
        <div className="flex h-[220px] flex-col justify-between pb-6 pt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton.Node
              key={index}
              active
              style={{ width: 28, height: 10 }}
            />
          ))}
        </div>

        <div className="flex-1">
          <div
            className="flex h-[220px] items-end gap-1.5 rounded-sm border-b border-l px-2 pb-2"
            style={{ borderColor: token.colorBorderSecondary }}
          >
            {Array.from({ length: barsCount }).map((_, index) => (
              <Skeleton.Node
                key={index}
                active
                style={{
                  width: 12,
                  height: barHeights[index % barHeights.length],
                  borderRadius: 6,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

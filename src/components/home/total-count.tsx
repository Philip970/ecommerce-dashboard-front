import type { ReactNode } from "react";
import { Text } from "../common/text";
import { theme } from "antd";
import { AnimatedCounter } from "../common/animated-counter";

type Props = {
  title: string;
  count: number;
  icon: ReactNode;
  iconColor: string;
  iconBgColor: string;
  variation: number;
};

const { useToken } = theme;

export const DashboardTotalCount = ({
  title,
  count,
  icon,
  iconColor,
  iconBgColor,
  variation,
}: Props) => {
  const isPositive = variation >= 0;

  const { token } = useToken();

  return (
    <div
      className="flex  flex-col gap-2 rounded-md p-4"
      style={{ backgroundColor: token.colorBgContainer }}
    >
      <div>
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg text-base leading-none"
          style={{
            backgroundColor: iconBgColor,
            color: iconColor,
          }}
        >
          {icon}
        </div>

        <Text
          size="xs"
          className="font-semibold"
          style={{
            color: token.colorTextSecondary,
          }}
        >
          {title}
        </Text>
      </div>

      <div className="flex items-end justify-between">
        <AnimatedCounter className="text-3xl font-bold" from={0} to={count} />
        <Text
          size="xs"
          className="font-bold"
          style={{
            color: isPositive ? "#12B76A" : "#F04438",
          }}
        >
          {isPositive ? "▲" : "▼"} {Math.abs(variation)}%
        </Text>
      </div>
    </div>
  );
};

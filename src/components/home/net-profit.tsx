import { theme } from "antd";

import { AnimatedCircularProgress } from "../common/animated-circular-progress";
import { AnimatedCounter } from "../common/animated-counter";
import { Text } from "../common/text";

type NetProfitProps = {
  amount: number;
  progress: number;
  variation: number;
};

const { useToken } = theme;

export const DashboardNetProfit = ({
  amount,
  progress,
  variation,
}: NetProfitProps) => {
  const { token } = useToken();
  const isPositive = variation >= 0;

  return (
    <div
      className="flex w-full items-stretch justify-between rounded-md p-4"
      style={{ backgroundColor: token.colorBgContainer }}
    >
      <div className="flex flex-col justify-between gap-2">
        <Text
          size="xs"
          className="font-semibold"
          style={{
            color: token.colorTextSecondary,
          }}
        >
          Net Profit
        </Text>

        <AnimatedCounter
          from={0}
          to={amount}
          prefix="$ "
          decimals={2}
          className="text-5xl font-bold"
        />

        <Text
          size="xs"
          className="font-bold"
          style={{ color: isPositive ? "#12B76A" : "#F04438" }}
        >
          {isPositive ? "▲" : "▼"} {Math.abs(variation)}%
        </Text>
      </div>

      <div className="flex flex-col items-center">
        <AnimatedCircularProgress
          count={progress}
          label="Completed"
          size={100}
          strokeWidth={10}
          valueClassName="text-2xl font-bold"
          labelClassName="text-[10px] font-medium"
        />
        <Text size="xs" style={{ color: token.colorTextSecondary }}>
          You are close from your goal.
        </Text>
      </div>
    </div>
  );
};

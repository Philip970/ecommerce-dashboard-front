import { theme } from "antd";

import { Text } from "../common/text";
import { DashboardCustomerFeedbackSkeleton } from "./customer-feedback";

type DashboardCustomerFeedbackListSkeletonProps = {
  count?: number;
};

const { useToken } = theme;

export const DashboardCustomerFeedbackListSkeleton = ({
  count = 2,
}: DashboardCustomerFeedbackListSkeletonProps) => {
  const { token } = useToken();

  return (
    <div
      className="w-full rounded-md p-4"
      style={{
        backgroundColor: token.colorBgContainer,
      }}
    >
      <Text size="xl" className="font-bold">
        Customer&apos;s Feedback
      </Text>

      <div className="mt-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={index < count - 1 ? "border-b border-gray-200" : ""}
          >
            <DashboardCustomerFeedbackSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

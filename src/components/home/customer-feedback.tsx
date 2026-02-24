import { Text } from "../common/text";
import { CustomerFeedback } from "../common/customer-feedback";
import { theme } from "antd";

type FeedbackItem = {
  name: string;
  comment: string;
  rating: number;
  avatarUrl?: string;
};

type DashboardCustomerFeedbackProps = {
  title?: string;
  feedbacks: FeedbackItem[];
};

const { useToken } = theme;

export const DashboardCustomerFeedback = ({
  title = "Customer's Feedback",
  feedbacks,
}: DashboardCustomerFeedbackProps) => {
  const { token } = useToken();
  return (
    <div
      className="w-full rounded-md  p-4"
      style={{
        backgroundColor: token.colorBgContainer,
      }}
    >
      <Text size="xl" className="font-bold">
        {title}
      </Text>

      <div className="mt-2 max-h-[340px] overflow-y-auto pr-2">
        {feedbacks.map((feedback, index) => (
          <div
            key={`${feedback.name}-${index}`}
            className={
              index < feedbacks.length - 1 ? "border-b border-gray-200" : ""
            }
          >
            <CustomerFeedback
              name={feedback.name}
              comment={feedback.comment}
              rating={feedback.rating}
              avatarUrl={feedback.avatarUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

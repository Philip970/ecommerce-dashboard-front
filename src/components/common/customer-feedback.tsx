import { Avatar, theme } from "antd";
import { StarFilled, StarOutlined, UserOutlined } from "@ant-design/icons";

import { Text } from "./text";

type CustomerFeedbackProps = {
  name: string;
  comment: string;
  rating: number;
  avatarUrl?: string;
};

const { useToken } = theme;

export const CustomerFeedback = ({
  name,
  comment,
  rating,
  avatarUrl,
}: CustomerFeedbackProps) => {
  const { token } = useToken();
  const safeRating = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <div className="flex flex-col gap-3 py-4">
      <div className="flex items-center gap-3">
        <Avatar
          src={avatarUrl}
          icon={!avatarUrl ? <UserOutlined /> : undefined}
          size={36}
        />
        <Text
          size="lg"
          className="font-semibold"
          style={{
            color: token.colorText,
          }}
        >
          {name}
        </Text>
      </div>

      <div className="flex items-center gap-1 text-[#FACC15]">
        {Array.from({ length: 5 }).map((_, index) =>
          index < safeRating ? (
            <StarFilled key={index} />
          ) : (
            <StarOutlined key={index} />
          ),
        )}
      </div>

      <Text
        size="sm"
        style={{
          color: token.colorTextSecondary,
        }}
      >
        {comment}
      </Text>
    </div>
  );
};

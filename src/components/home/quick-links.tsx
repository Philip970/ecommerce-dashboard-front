import {
  AimOutlined,
  AppstoreOutlined,
  CoffeeOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { theme } from "antd";
import { Text } from "../common/text";

const links = [
  {
    key: "goals",
    label: "Goals",
    icon: <AimOutlined className="text-[#F67A7A]" />,
    iconBgClass: "bg-[rgba(247,120,120,0.2)]",
  },
  {
    key: "popular-dishes",
    label: "Popular Dishes",
    icon: <CoffeeOutlined className="text-[#5A79FF]" />,
    iconBgClass: "bg-[rgba(90,121,255,0.2)]",
  },
  {
    key: "menus",
    label: "Menus",
    icon: <AppstoreOutlined className="text-[#46D4E4]" />,
    iconBgClass: "bg-[rgba(70,212,228,0.2)]",
  },
];

const { useToken } = theme;

export const DashboardQuickLinks = () => {
  const { token } = useToken();
  return (
    <div
      className="w-full rounded-md p-4"
      style={{
        backgroundColor: token.colorBgContainer,
      }}
    >
      {links.map((item) => (
        <div
          key={item.key}
          className="mb-1.5 flex items-center rounded-full px-2 py-2.5 last:mb-0"
        >
          <div
            className={`mr-3 flex h-9 w-9 items-center justify-center rounded-full ${item.iconBgClass}`}
          >
            {item.icon}
          </div>
          <Text
            size="sm"
            className="flex-1"
            style={{
              color: token.colorTextSecondary,
            }}
          >
            {item.label}
          </Text>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full"
            style={{
              backgroundColor: token.colorBgTextHover,
            }}
          >
            <RightOutlined
              size={24}
              style={{
                color: token.colorIcon,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

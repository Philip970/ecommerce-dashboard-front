import type { RefineThemedLayoutHeaderProps } from "@refinedev/antd";
import { useGetIdentity } from "@refinedev/core";
import {
  BellOutlined,
  MailOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Layout as AntdLayout,
  Avatar,
  Input,
  Space,
  Switch,
  theme,
} from "antd";
import React, { useContext } from "react";
import { ColorModeContext } from "../../contexts/color-mode";

const { useToken } = theme;

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header: React.FC<RefineThemedLayoutHeaderProps> = ({
  sticky = true,
}) => {
  const { token } = useToken();
  const { data: user } = useGetIdentity<IUser>();
  const { mode, setMode } = useContext(ColorModeContext);

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
  };

  if (sticky) {
    headerStyles.position = "sticky";
    headerStyles.top = 0;
    headerStyles.zIndex = 1;
  }

  return (
    <AntdLayout.Header style={headerStyles}>
      <Input
        placeholder="Search"
        prefix={<SearchOutlined style={{ color: token.colorTextTertiary }} />}
        style={{
          maxWidth: 260,
          backgroundColor: token.colorBgTextHover,
          borderColor: token.colorBorderSecondary,
        }}
      />

      <Space size={12}>
        <Switch
          size="small"
          checked={mode === "dark"}
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
        />

        <Avatar
          size={32}
          icon={
            <MailOutlined
              size={10}
              style={{
                color: token.colorIcon,
              }}
            />
          }
          style={{ backgroundColor: token.colorBgTextHover }}
        />
        <Avatar
          size={32}
          icon={
            <SettingOutlined
              size={10}
              style={{
                color: token.colorIcon,
              }}
            />
          }
          style={{ backgroundColor: token.colorBgTextHover }}
        />
        <Avatar
          size={32}
          icon={
            <BellOutlined
              size={10}
              style={{
                color: token.colorIcon,
              }}
            />
          }
          style={{ backgroundColor: token.colorBgTextHover }}
        />

        <Avatar
          src={user?.avatar}
          alt={user?.name}
          icon={<UserOutlined />}
          size={34}
        >
          {user?.name?.charAt(0)}
        </Avatar>
      </Space>
    </AntdLayout.Header>
  );
};

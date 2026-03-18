import { Column, type ColumnConfig } from "@ant-design/plots";
import { DownOutlined } from "@ant-design/icons";
import { theme } from "antd";
import { Text } from "../common/text";

export type DashboardActivityPoint = {
  label: string;
  value: number;
};

type DashboardActivityChartProps = {
  data: DashboardActivityPoint[];
  title?: string;
  periodLabel?: string;
  height?: number;
  yAxisMax?: number;
};

const { useToken } = theme;

const formatSales = (value: number | string) => {
  return `$${Math.round(Number(value) / 1000)}k`;
};

const formatDayFromDate = (dateLabel: string) => {
  return dateLabel.split("-")[0] ?? dateLabel;
};

export const DashboardActivityChart = ({
  data,
  title = "Activity",
  periodLabel = "Weekly",
  height = 175,
  yAxisMax,
}: DashboardActivityChartProps) => {
  const { token } = useToken();
  const chartData = data.map((item) => ({
    ...item,
    value: Number(item.value ?? 0),
  }));

  const config: ColumnConfig = {
    data: chartData,
    xField: "label",
    yField: "value",
    meta: {
      value: {
        formatter: (v: number | string) => formatSales(v),
      },
    },
    height,
    autoFit: true,
    padding: [8, 8, 28, 44],
    appendPadding: [0, 0, 0, 0],
    columnStyle: {
      radius: [6, 6, 0, 0],
      fill: "#5D7CFF",
      opacity: 0.95,
    },
    minColumnWidth: 10,
    maxColumnWidth: 20,
    xAxis: {
      label: {
        autoHide: false,
        formatter: (v: string) => formatDayFromDate(v),
        style: {
          fill: "#808AAD",
          fontSize: 10,
        },
      },
      line: {
        style: {
          stroke: "rgba(255,255,255,0.15)",
        },
      },
      tickLine: null,
    },
    yAxis: {
      max: yAxisMax,
      grid: {
        line: {
          style: {
            stroke: "rgba(255,255,255,0.12)",
            lineDash: [3, 3],
          },
        },
      },
      label: {
        style: {
          fill: "#808AAD",
          fontSize: 10,
        },
      },
    },
    tooltip: {
      customContent: (
        _title: string,
        items: Array<{ data?: DashboardActivityPoint }> = [],
      ) => {
        const current = items[0]?.data;
        if (!current) return "";
        return `<div style="padding:6px 8px;"><div style="font-weight:600;">${
          current.label
        }</div><div>Sales: ${`$${Number(current.value) / 1000}k`}</div></div>`;
      },
    },
    interactions: [{ type: "active-region" }],
    legend: false,
    animation: true,
  };

  return (
    <div
      className="w-full rounded-md p-4 "
      style={{ backgroundColor: token.colorBgContainer }}
    >
      <div className="mb-3 flex items-center justify-between">
        <Text size="xl" className="font-bold">
          {title}
        </Text>
        <button
          type="button"
          className="flex items-center gap-1 rounded-full  px-2 py-1"
          style={{
            backgroundColor: token.colorBgTextHover,
          }}
        >
          <Text size="xs" style={{ color: token.colorTextSecondary }}>
            {periodLabel}
          </Text>
          <DownOutlined
            style={{
              color: token.colorTextSecondary,
            }}
            className="text-[9px]"
          />
        </button>
      </div>
      <Column {...config} />
    </div>
  );
};

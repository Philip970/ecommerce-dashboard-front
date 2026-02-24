"use client";

import {
  animate,
  useInView,
  useIsomorphicLayoutEffect,
  type KeyframeOptions,
} from "framer-motion";
import { theme, Typography } from "antd";
import { useRef, useState } from "react";
import { AnimatedCounter } from "./animated-counter";

type AnimatedCircularProgressProps = {
  count: number;
  label?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trailColor?: string;
  animationOptions?: KeyframeOptions;
};

const { useToken } = theme;

export const AnimatedCircularProgress = ({
  count,
  label = "Performances",
  size = 240,
  strokeWidth = 20,
  color = "#7398f9",
  trailColor = "#bcc9ff",
  animationOptions,
}: AnimatedCircularProgressProps) => {
  const { token } = useToken();
  const clampedCount = Math.max(0, Math.min(100, count));
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    if (!inView) return;

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      setValue(clampedCount);
      return;
    }

    const controls = animate(0, clampedCount, {
      duration: 1,
      ease: "easeOut",
      ...animationOptions,
      onUpdate: (next) => setValue(next),
    });

    return () => controls.stop();
  }, [inView, clampedCount, animationOptions]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - value / 100);

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-0">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trailColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <AnimatedCounter
          from={0}
          to={clampedCount}
          suffix="%"
          className="text-4xl font-bold"
          animationOptions={animationOptions}
        />
        <Typography.Text
          className="text-2xl font-medium"
          style={{
            color: token.colorTextSecondary,
          }}
        >
          {label}
        </Typography.Text>
      </div>
    </div>
  );
};

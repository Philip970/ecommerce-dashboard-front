"use client";

import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { Typography } from "antd";
import { useRef } from "react";
import type { ComponentRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  animationOptions?: KeyframeOptions;
};

export const AnimatedCounter = ({
  from,
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<ComponentRef<typeof Typography.Text>>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = `${prefix}${from.toFixed(decimals)}${suffix}`;

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = `${prefix}${to.toFixed(decimals)}${suffix}`;
      return;
    }

    const controls = animate(from, to, {
      duration: 1,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to, prefix, suffix, decimals, animationOptions]);

  return (
    <Typography.Text ref={ref} className={className}>
      {`${prefix}${from.toFixed(decimals)}${suffix}`}
    </Typography.Text>
  );
};

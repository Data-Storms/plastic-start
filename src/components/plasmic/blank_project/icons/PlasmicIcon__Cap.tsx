// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CapIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CapIcon(props: CapIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      fill={"none"}
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 2 4"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={"M0 0v4a2.17 2.17 0 001.333-2A2.17 2.17 0 000 0"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CapIcon;
/* prettier-ignore-end */

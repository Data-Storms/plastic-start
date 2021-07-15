// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kqxfhDjZpqd51BR3p2izvQ
// Component: 2tWZkb00RRk9
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: kqxfhDjZpqd51BR3p2izvQ/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: 2tWZkb00RRk9/css

import CapIcon from "./icons/PlasmicIcon__Cap"; // plasmic-import: eZ_LDE-acCN/icon
import WifiIcon from "./icons/PlasmicIcon__Wifi"; // plasmic-import: xh39PL2Dw1T/icon
import CellularConnectionIcon from "./icons/PlasmicIcon__CellularConnection"; // plasmic-import: 9nXFNGx_7Hg/icon
import UnionIcon from "./icons/PlasmicIcon__Union"; // plasmic-import: cVqOPaR4VMQ/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  component1?: p.Flex<"div">;
  rectangle?: p.Flex<"div">;
  statusBar?: p.Flex<"div">;
  connections?: p.Flex<"div">;
  battery?: p.Flex<"div">;
  border?: p.Flex<"div">;
  capacity?: p.Flex<"div">;
  time?: p.Flex<"div">;
  time2?: p.Flex<"div">;
  register?: p.Flex<"div">;
  component?: p.Flex<"div">;
  rectangle2?: p.Flex<"div">;
  component2?: p.Flex<"div">;
  rectangle3?: p.Flex<"div">;
  button?: p.Flex<"div">;
  rectangle4?: p.Flex<"div">;
  keyboard?: p.Flex<"div">;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  dataFetches?: PlasmicHomepage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"component1"}
            data-plasmic-override={overrides.component1}
            className={classNames(defaultcss.all, sty.component1)}
          >
            <div
              data-plasmic-name={"rectangle"}
              data-plasmic-override={overrides.rectangle}
              className={classNames(defaultcss.all, sty.rectangle)}
            >
              <div
                data-plasmic-name={"statusBar"}
                data-plasmic-override={overrides.statusBar}
                className={classNames(defaultcss.all, sty.statusBar)}
              >
                <div
                  data-plasmic-name={"connections"}
                  data-plasmic-override={overrides.connections}
                  className={classNames(defaultcss.all, sty.connections)}
                >
                  <div
                    data-plasmic-name={"battery"}
                    data-plasmic-override={overrides.battery}
                    className={classNames(defaultcss.all, sty.battery)}
                  >
                    <div
                      data-plasmic-name={"border"}
                      data-plasmic-override={overrides.border}
                      className={classNames(defaultcss.all, sty.border)}
                    />

                    <CapIcon
                      className={classNames(defaultcss.all, sty.svg__tjgNt)}
                      role={"img"}
                    />

                    <div
                      data-plasmic-name={"capacity"}
                      data-plasmic-override={overrides.capacity}
                      className={classNames(defaultcss.all, sty.capacity)}
                    />
                  </div>

                  <WifiIcon
                    className={classNames(defaultcss.all, sty.svg__fRaZm)}
                    role={"img"}
                  />

                  <CellularConnectionIcon
                    className={classNames(defaultcss.all, sty.svg__ejNww)}
                    role={"img"}
                  />
                </div>

                <div
                  data-plasmic-name={"time"}
                  data-plasmic-override={overrides.time}
                  className={classNames(defaultcss.all, sty.time)}
                >
                  <div
                    data-plasmic-name={"time2"}
                    data-plasmic-override={overrides.time2}
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.time2
                    )}
                  >
                    {"9:27"}
                  </div>
                </div>
              </div>
            </div>

            <div
              data-plasmic-name={"register"}
              data-plasmic-override={overrides.register}
              className={classNames(defaultcss.all, sty.register)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___4KSgn
                )}
              >
                {"Register"}
              </div>
            </div>

            <div
              data-plasmic-name={"component"}
              data-plasmic-override={overrides.component}
              className={classNames(defaultcss.all, sty.component)}
            >
              <div
                data-plasmic-name={"rectangle2"}
                data-plasmic-override={overrides.rectangle2}
                className={classNames(defaultcss.all, sty.rectangle2)}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__laVvk
                )}
              >
                {"jane@example.com"}
              </div>
            </div>

            <div
              data-plasmic-name={"component2"}
              data-plasmic-override={overrides.component2}
              className={classNames(defaultcss.all, sty.component2)}
            >
              <div
                data-plasmic-name={"rectangle3"}
                data-plasmic-override={overrides.rectangle3}
                className={classNames(defaultcss.all, sty.rectangle3)}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__qTf3B
                )}
              >
                {"••••••••••••"}
              </div>
            </div>

            <div
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames(defaultcss.all, sty.button)}
            >
              <div
                data-plasmic-name={"rectangle4"}
                data-plasmic-override={overrides.rectangle4}
                className={classNames(defaultcss.all, sty.rectangle4)}
              />

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__pvoMg
                )}
              >
                {"next"}
              </div>
            </div>

            <div
              data-plasmic-name={"keyboard"}
              data-plasmic-override={overrides.keyboard}
              className={classNames(defaultcss.all, sty.keyboard)}
            />

            <UnionIcon
              className={classNames(defaultcss.all, sty.svg___6MTpA)}
              role={"img"}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "component1",
    "rectangle",
    "statusBar",
    "connections",
    "battery",
    "border",
    "capacity",
    "time",
    "time2",
    "register",
    "component",
    "rectangle2",
    "component2",
    "rectangle3",
    "button",
    "rectangle4",
    "keyboard"
  ],
  component1: [
    "component1",
    "rectangle",
    "statusBar",
    "connections",
    "battery",
    "border",
    "capacity",
    "time",
    "time2",
    "register",
    "component",
    "rectangle2",
    "component2",
    "rectangle3",
    "button",
    "rectangle4",
    "keyboard"
  ],
  rectangle: [
    "rectangle",
    "statusBar",
    "connections",
    "battery",
    "border",
    "capacity",
    "time",
    "time2"
  ],
  statusBar: [
    "statusBar",
    "connections",
    "battery",
    "border",
    "capacity",
    "time",
    "time2"
  ],
  connections: ["connections", "battery", "border", "capacity"],
  battery: ["battery", "border", "capacity"],
  border: ["border"],
  capacity: ["capacity"],
  time: ["time", "time2"],
  time2: ["time2"],
  register: ["register"],
  component: ["component", "rectangle2"],
  rectangle2: ["rectangle2"],
  component2: ["component2", "rectangle3"],
  rectangle3: ["rectangle3"],
  button: ["button", "rectangle4"],
  rectangle4: ["rectangle4"],
  keyboard: ["keyboard"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  component1: "div";
  rectangle: "div";
  statusBar: "div";
  connections: "div";
  battery: "div";
  border: "div";
  capacity: "div";
  time: "div";
  time2: "div";
  register: "div";
  component: "div";
  rectangle2: "div";
  component2: "div";
  rectangle3: "div";
  button: "div";
  rectangle4: "div";
  keyboard: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHomepage__Fetches;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    component1: makeNodeComponent("component1"),
    rectangle: makeNodeComponent("rectangle"),
    statusBar: makeNodeComponent("statusBar"),
    connections: makeNodeComponent("connections"),
    battery: makeNodeComponent("battery"),
    border: makeNodeComponent("border"),
    capacity: makeNodeComponent("capacity"),
    time: makeNodeComponent("time"),
    time2: makeNodeComponent("time2"),
    register: makeNodeComponent("register"),
    component: makeNodeComponent("component"),
    rectangle2: makeNodeComponent("rectangle2"),
    component2: makeNodeComponent("component2"),
    rectangle3: makeNodeComponent("rectangle3"),
    button: makeNodeComponent("button"),
    rectangle4: makeNodeComponent("rectangle4"),
    keyboard: makeNodeComponent("keyboard"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
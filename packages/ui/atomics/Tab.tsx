import ContainerBox, { ContainerBoxProps } from "../molecules/ContainerBox";
import { Box, Tab as MuiTab, styled, Tabs } from "@mui/material";
import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface StyledTabProps {
  size?: string;
  type?: string;
  bodyScrollable?: boolean;
}

const StyledBox = styled(ContainerBox, {
  name: "TabWrapper",
  slot: "Root",
  shouldForwardProp: (prop: string) => prop !== "bodyScrollable",
})<StyledTabProps>({});

const StyledTab = styled(MuiTab, {
  name: "Tab",
  slot: "Root",
  shouldForwardProp: (prop: string) => prop !== "bodyScrollable",
})<StyledTabProps>({});

const StyledTabs = styled(Tabs, {
  name: "Tabs",
  slot: "Root",
  shouldForwardProp: (prop: string) => prop !== "bodyScrollable",
})<StyledTabProps>({});

export interface TabsProps {
  label: ReactNode;
  component: ReactNode;
}

export interface Tabs {
  tabHeader?: ReactNode;
  tabItems: TabsProps[];
  tabSubHeader?: ReactNode;
  defaultValue?: number;
  tabIndex?: number;
  onTabChange?: (tabIndex: number) => void;
}

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {children}
    </div>
  );
};

export interface TabActions {
  headerClientRect?: DOMRect;
  bodyClientRect?: DOMRect;
}

export type TabProps = Tabs & StyledTabProps & ContainerBoxProps;

const Tab: ForwardRefRenderFunction<TabActions, TabProps> = (
  {
    tabHeader,
    tabItems,
    tabSubHeader,
    fullWidth,
    onTabChange,
    defaultValue = 0,
    tabIndex,
    ...props
  },
  ref
) => {
  const styleProps: StyledTabProps = { ...props };

  const [value, setValue] = useState(defaultValue);
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    headerClientRect: headerRef.current?.getBoundingClientRect(),
    bodyClientRect: bodyRef.current?.getBoundingClientRect(),
  }));

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onTabChange?.(newValue);
  };

  useEffect(() => {
    if (tabIndex != undefined) {
      setValue(tabIndex);
    }
  }, [tabIndex]);

  return (
    <StyledBox direction={"column"} fullWidth={fullWidth} {...styleProps}>
      <Box ref={headerRef} className={`tab-sticky-header`}>
        {tabHeader}
        <StyledTabs {...styleProps} value={value} onChange={handleChange}>
          {tabItems.map(({ label }, i) => (
            <StyledTab
              {...styleProps}
              label={label}
              key={i}
              title={value === i ? "선택됨" : ""}
              aria-selected={undefined}
              tabIndex={0}
            />
          ))}
        </StyledTabs>
        {tabSubHeader}
      </Box>
      <Box ref={bodyRef} className="tab-body">
        {tabItems.map(({ component }, i) => (
          <TabPanel value={value} index={i} key={i}>
            {component}
          </TabPanel>
        ))}
      </Box>
    </StyledBox>
  );
};

export default forwardRef(Tab);

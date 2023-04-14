import { ITab } from "../config/constants";

interface TabProps {
  tab: ITab;
  onClick?: Function;
  isFilterTab?: boolean;
  isActiveTab?: boolean;
}

const Tab = ({ tab }: TabProps) => {
  return <div>Tab</div>;
};

export default Tab;

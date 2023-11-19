import { useSnapshot } from "valtio";

import state from "../store";

const Tab = ({ tab, isFilteredTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilteredTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      onClick={handleClick}
      key={tab.name}
      className={`tab ${
        isFilteredTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
      style={activeStyles}>
      <img src={tab.icon} alt={tab.name} />
    </div>
  );
};

export default Tab;

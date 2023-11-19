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
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilteredTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </div>
  );
};

export default Tab;

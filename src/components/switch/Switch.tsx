import "./_switch.scss";

import React from "react";

interface SwitchProps {
  onToggle: () => void;
  isToggledOn: boolean;
}

function Switch({onToggle, isToggledOn}: SwitchProps) {
  return (
    <label className={"switch"}>
      <input
        className={"switch__controller"}
        type={"checkbox"}
        checked={isToggledOn}
        onChange={onToggle}
      />

      <span className={"switch__slider"} />
    </label>
  );
}

export default Switch;

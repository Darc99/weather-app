import React, { useState } from "react";

const useDropdown = (label, defaultState) => {
  const [state, setState] = useState(defaultState);
  const Dropdown = () => (
    <label>
      {label}
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
      ></select>
    </label>
  );
  return [state, Dropdown, setState];
};

export default useDropdown;

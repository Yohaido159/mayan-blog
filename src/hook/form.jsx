import { useState } from "react";

export default (initalValue) => {
  const [value, setValue] = useState(initalValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};

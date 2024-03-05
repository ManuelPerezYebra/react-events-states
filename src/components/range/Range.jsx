import { useState } from "react"

  
  const Range = () => {
    const [value, setValue] = useState(0);
  
    return (
      <>
        <h1>{value}</h1>
        <input
          onChange={(event)=>changeValue(setValue,event)}
          type="range"
          min={0}
          max={10}
          defaultValue={value}
        />
      </>
    );
  };
  const changeValue = (setValue, event) => {
    setValue(event.target.value);
  };
  
  export default Range;
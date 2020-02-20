import React from "react";
import { Range } from "rc-slider";

const RangeField = props => {
  return props.defaultValues.length > 0 ? (
    <Range
      allowCross={false}
      min={props.defaultPriceRange[0]}
      max={props.defaultPriceRange[1]}
      value={props.values}
      onChange={props.onPriceChange}
      onAfterChange={props.onAfterChange}
      defaultValue={props.defaultValues}
      {...props}
    />
  ) : null;
};

export default RangeField;

import React from "react";
import { CustomInput } from "./CustomInput";

export const CustomInputPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <CustomInput labelText="Checkbox" inputType="checkbox" />
        <CustomInput labelText="Email" inputType="email" />
        <CustomInput labelText="Password" inputType="password" />
        <CustomInput labelText="Confirm Password" inputType="password" />
        <CustomInput labelText="Phone Number" inputType="number" />
      </div>
    </div>
  );
};

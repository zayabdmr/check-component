import React from "react";
import { CustomInput } from "./CustomInput";

export const CustomInputPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 bg-purple-950">
        <CustomInput labelText="Checkbox" inputType="checkbox" />
        <CustomInput labelText="email" type="email" />
        <CustomInput labelText="password" inputType="password" />
        <CustomInput labelText="password" inputType="number" />
      </div>
    </div>
  );
};

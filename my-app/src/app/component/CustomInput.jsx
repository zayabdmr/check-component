export const CustomInput = ({ labelText, inputType }) => {
  return (
    <div className="flex gap-x-[10px]">
      <input style={{ color: "black" }} type={inputType} />
      <label>{labelText}</label>
    </div>
  );
};

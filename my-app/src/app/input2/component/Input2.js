export const Input = ({ handleOnChange }) => {
  return (
    <input
      onChange={handleOnChange}
      className="min-w-[280px] py-2 px-4 rounded-md border-solid border border-[#E4E4E7] outline-none focus:border-black"
      placeholder="Add a new task..."
    />
  );
};

import { CustomInput } from "../component/CustomInput";
import { CustomInputPage } from "../component/CustomInputPage";

export default function Home() {
  const data = [
    { labelText: "Task 1", inputType: "text" },
    { labelText: "Task 2", inputType: "text" },
    { labelText: "Task 3", inputType: "text" },
  ];

  return (
    <div className="px-12 py-10 bg-purple-800 min-h-scree">
      <CustomInputPage />

      <div className="flex flex-col gap-4 mt-6">
        {data.map((item) => (
          <CustomInput
            key={item.labelText}
            labelText={item.labelText}
            inputType={item.inputType}
          />
        ))}
      </div>
    </div>
  );
}

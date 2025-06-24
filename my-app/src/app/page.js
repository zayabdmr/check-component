// import { CustomInput } from "./component/CustomInput";
// import { CustomInputPage } from "./component/CustomInputPage";
// import { CiStar } from "react-icons/ci";

import { PictureBox } from "./component/PictureBox";
import { TextBox } from "./component/TextBox";

// export default function Home() {
//   const data = [
//     { labelText: "Task 1", inputType: "text" },
//     { labelText: "Task 2", inputType: "text" },
//     { labelText: "Task 3", inputType: "text" },
//   ];

//   return (
//     <div className="p-4">
//       <CustomInputPage />

//       <div className="flex flex-col gap-4 mt-4">
//         {data.map((value, index) => (
//           <CustomInput
//             key={index}
//             labelText={value.labelText}
//             type={value.inputType}
//           />
//         ))}
//       </div>
//       <div>
//         <div>
//           <button className="flex items-center gap-[5px] justify-center w-fit min-w-[200px] h-[20px] rounded-full border-solid border-white border-[2px] bg-white text-black text-[20px]">
//             <p className="w-fit min-w-[120px]">to do list</p>
//             <CiStar />
//           </button>
//         </div>

//         <div>
//           {data?.map((value, index) => (
//             <CustomInput
//               key={index}
//               labelText={value.labelText}
//               type={value.inputType}
//             />
//           ))}

//           <div>
//             <button className="flex items-center gap-[5px] justify-center w-fit min-w-[200px] h-[20px] rounded-full border-solid border-white border-[2px] bg-white text-black text-[20px]">
//               <p className="w-fit min-w-[120px]">to do list</p>
//               <CiStar />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div>
//       <Student />
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex justify-between w-[300px] gap-[20px]">
        <PictureBox />
        <PictureBox />
        <PictureBox />
      </div>

      <div className="flex w-[950px] gap-[20px]">
        <TextBox title="Header" content="Content 1" />
        <TextBox title="Header" content="Content 2" />
      </div>
    </div>
  );
}

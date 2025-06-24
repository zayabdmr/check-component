import { PictureBox } from "./component/PictureBox";
import { TextBox } from "./component/TextBox";

export default function Home() {
  return (
    <div className="py-60 px-100 flex flex-col gap-6">
      <div className="flex w-[300px] gap-[20px]">
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

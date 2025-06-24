export const ProfileCard = ({ name, nickname, gender, seedNo, hobby }) => {
  return (
    <div className="w-[510px] h-[260px]">
      <div className="bg-purple-400 rounded-xl w-[200px] h-6 flex justify-center items-center">
        <h1>Leap 2G Glass</h1>
      </div>
      <div className="flex justift-between p-6 bg-white text-black rounded-xl">
        <div className="flex gap-[20px]">
          <img
            className="w-[50px] h-[50px]"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          ></img>
          <div className="font-bold">
            <p>Name: {name}</p>
            <p>Nickname: {nickname}</p>
            <p>Gender: {gender} </p>
            <p>Seat #: {seedNo} </p>
            <p>hobby: {hobby.join(",  ")} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

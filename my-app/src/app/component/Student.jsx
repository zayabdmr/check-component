import React from "react";
import { ProfileCard } from "./ProfileCard";

export const Student = () => {
  const students = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      name: "Munkhbold",
      seedNo: "2c",
      gender: "male",
      nickname: "muugii",
      hobby: [
        "gamer",
        "artist",
        "streamer",
        "digitalart",
        "volleyball",
        "3dmodelmaker",
      ],
    },
    {
      name: "Javkhlan",
      nickname: "Javhaa",
      seedNo: "1F",
      gender: "male",
      hobby: ["gaming", "coding", "watching movie, anime", "sleeping"],
    },
    {
      name: "Tsatsral",
      seedNo: "4A",
      gender: "female",
      hobby: ["watch anime"],
      nickname: ["nottsatsa"],
    },
    {
      name: "Ochirzaya",
      nickname: "Zaya",
      seedNo: "1E",
      gender: "Male",
      hobby: ["play-soccer"],
    },
    {
      name: "Enkhbayar",
      seedNo: "5c",
      nickname: "Eba",
      gender: "Male",
      hobby: ["Quiz", "movie", "reading", "cooking", "gaming", "hiking"],
    },
    {
      name: "Tumen-Ulzii",
      seedNo: "3F",
      nickname: "TK",
      gender: "male",
      hobby: ["sagsan bumbug"],
    },
    {
      name: "Batmend",
      nickname: "mende",
      seedNo: "4E",
      gender: "male",
      hobby: ["basketball", "billiard", "reading"],
    },
    {
      name: "Magnaibayar",
      nickname: "Magnai",
      seedNo: "2F",
      gender: "male",
      hobby: ["Riding bicycle", "reading", "watching movie, anime", "sleeping"],
    },
    {
      name: "Chimeg-Erdene",
      seedNo: "3e",
      gender: "female",
      nickname: "Chimgee",
      hobby: [
        "playing puzzle games",
        "watching movie",
        "volleyball",
        "walking",
      ],
    },
    {
      name: "Bayandelger",
      seedNo: "3D",
      gender: "male",
      nickname: "bayna",
      hobby: ["gaming", "cooking", "watch anime"],
    },
    {
      name: "Ganzaya",
      nickname: "Zaya",
      seedNo: "2D",
      gender: "Female",
      hobby: ["movie", "paint", "badminton"],
    },
    {
      name: "Maral",
      seedNo: "3A",
      gender: "Female",
      nickname: "Marla",
      hobby: ["watching movies", "baking"],
    },
    {
      name: "chinggis",
      seedNo: "3c",
      gender: "man",
      hobby: ["yuch hamaaguu hiine"],
    },
    {
      name: "Ochirdari",
      nickname: "Ochko",
      seedNo: "2E",
      gender: "male",
      hobby: ["reading", "Movie"],
    },
    {
      name: "Amartuvshin",
      nickname: "Amaraa",
      seedNo: "3B",
      gender: "male",
      hobby: ["curious about everything, but not an expert in anything"],
    },
    {
      name: "bayarjavkhlan",
      seedNo: "5B",
      gender: "male",
      hobby: ["listen to music, driving, watching movie"],
    },
    {
      name: "Бат-Очир",
      seedNo: "2A",
      gender: "male",
      hobby: [
        "сагс хааяал",
        "гүйх",
        "зохион бүтээх",
        "засварлах",
        "шинэ зүйл сурах турших",
      ],
      nickname: "надад таалагдвал хүссэнээрээ дуудоо",
    },
    {
      name: "Gantumur",
      seedNo: "1B",
      gender: "Male",
      nickname: "Ganaa",
      hobby: ["Movie", "reading"],
    },
    {
      name: "Oyunbayar",
      nickname: "Omoo",
      seedNo: "4F",
      gender: "female",
      hobby: ["reading", "movie", "outdoor walking", "traveling"],
    },
    {
      name: "Bishrelt",
      nickname: "montoo",
      seedNo: "4c",
      gender: "male",
      hobby: ["mongo oloh durtai"],
    },
    {
      name: "Tsog",
      seedNo: "5A",
      gender: "Male",
      nickname: "Gots",
      hobby: ["Travel"],
    },
    {
      name: "Garamdagii",
      nickname: "Dagii",
      seedNo: "2B",
      gender: "female",
      hobby: ["Movie"],
    },
  ];
  return (
    <div className="px-150 py-5">
      {students.map((value, i) => {
        return (
          <ProfileCard
            key={i}
            name={value.name}
            nickname={value.nickname}
            gender={value.gender}
            seedNo={value.seedNo}
            hobby={value.hobby}
          />
        );
      })}
    </div>
  );
};

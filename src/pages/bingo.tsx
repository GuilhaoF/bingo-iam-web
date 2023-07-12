import Image from "next/image";

import BingoInfo from "../assets/bingoinfo.jpeg";

export default function BingoPage() {
  return (
 
      <div className="flex items-center justify-center h-screen  bg-gradient-to-b from-yellow-400 to-red-600 p-3">
        <Image
          src={BingoInfo}
          alt="bingo iam"
          className=" object-contain w-full h-full"
        />
      </div>
  );
}

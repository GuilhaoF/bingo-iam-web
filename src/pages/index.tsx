import Image from "next/image";
import IamLogo from "../assets/iamlogo.png";
import { useRouter } from "next/router";
import { QRCodeCanvas } from "qrcode.react";

export default function Home() {
  const route = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-red-600 to-yellow-400">
      <Image
        className=""
        src={IamLogo}
        alt="logo"
        width={400}
        height={400}
        quality={80}
      />
      <button
        className=" p-4  shadow-xl w-44 mt-2 rounded-lg border-solid border-2"
        onClick={() => route.push("/bingo")}
      >
        Bingo IAM 2023
      </button>

      <div className="mt-8">
        <QRCodeCanvas
          value={"https://caixa-jm-web.vercel.app/bingo"}
          size={185}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"H"}
          includeMargin={false}
          imageSettings={{
            src: "https://i.pinimg.com/originals/c6/05/e4/c605e40aed52f6a0c84cf35d9a842261.png",
            x: undefined,
            y: undefined,
            height: 57,
            width: 57,
            excavate: true,
          }}
        />
      </div>
    </div>
  );
}

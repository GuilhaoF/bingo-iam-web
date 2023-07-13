import Image from "next/image";

import IamUnidos from "../assets/iamUnidos.png";
import { WhatsappLogo } from "@phosphor-icons/react";

export default function BingoPage() {
  const listaDePremios = [
    { id: 1, texto: "TRITURADOR" },
    { id: 2, texto: "CHUTEIRA SOCIETY" },
    { id: 3, texto: "PERFUME NATURA" },
    { id: 4, texto: "MINI BOLO CONFEITADO" },
    { id: 5, texto: "PERFUME NATURA" },
    { id: 6, texto: "CESTA DA NATURA" },
    { id: 7, texto: "PERFUME BOTICÁRIO" },
    { id: 8, texto: "VENTILADOR" },
  ];

  return (
    <div className="flex items-center flex-col justify-center h-screen bg-[#bdc3c7]">
      <Image
        src={IamUnidos}
        alt="unidos-iam"
        className="mb-4"
        width={250}
        height={300}
      />

      <div className="mb-4 text-center">
        <h2>
          Em prol da viagem da Infância e Adolescência
          <br></br>
          Missionária ao Santuário de Nossa Senhora Aparecida.
        </h2>
        <h2>
          Valor da Cartela : R$ <b>10,00</b>
        </h2>
      </div>

      <div className="grid grid-cols-1 border-2 md:p-6 p-4 shadow-2xl bg-yellow-300 border-solid rounded-lg">
        <h2 className="col-span-1 text-center font-extrabold">
          PREMIAÇÕES POR COLUNA
        </h2>
        <h2 className="col-span-1 col-start-2 text-center font-extrabold">
          CARTELA CHEIA
        </h2>

        {listaDePremios.map((item) => (
          <li key={item.id} className="p-3">
            {item.texto}
          </li>
        ))}
      </div>

      <div className="m-4 text-center">
        <h2 className=" text-justify">
          Bingo, dia: 26 de julho, na igreja de São Joaquim e Santa Ana, no
          encerramento do festejo.<br></br>
          Infância e Adolescência Missionária Paróquia Nossa Senhora das Graças,
          Caxias-ma
        </h2>
      </div>

      <div className="text-center">
        <h1 className=" font-semibold from-neutral-700">
          {" "}
          Adquira sua cartela com assessores,
          <br></br>
          responsáveis ou entre em contato nos numeros :
        </h1>
      </div>

      {/* Contato dos organizadores */}
      <div className="flex gap-3 mt-8">
        <a
          href="https://api.whatsapp.com/send?phone=5599984221692"
          className="flex items-center p-1"
        >
          <WhatsappLogo size={48} color="#ff3838" weight="light" />
          Roberth
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5599988073626"
          className="flex items-center p-1"
        >
          <WhatsappLogo size={48} color="#fff200" weight="light" />
          Raissa
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5599984490348"
          className="flex items-center p-1"
        >
          <WhatsappLogo size={48} color="#27ae60" weight="light" />
          Daniel
        </a>
      </div>
    </div>
  );
}

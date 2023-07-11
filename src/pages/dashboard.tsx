import { useState } from "react";

export default function DashboardPage() {
  const [valorPago, setValorPago] = useState<number>(0);
  const [valorTotal, setValorTotal] = useState<number>(0);
  const [troco, setTroco] = useState<number>(0);

  const handleValorPagoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valor = parseFloat(event.target.value);
    setValorPago(valor);
  };

  const handleValorTotalChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valor = parseFloat(event.target.value);
    setValorTotal(valor);
  };

  const calcularTroco = () => {
    const valorTroco = valorPago - valorTotal;
    setTroco(valorTroco);
  };

  return (
    <>
      <header className="flex justify-center items-center w-screen  h-[80px] bg-cyan-500">
        <div className="flex justify-between w-full p-4 ">
          <h1>Vendas</h1>

          <span>
            <label>Troco:</label>
            {troco}
          </span>
        </div>
      </header>

      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-wrap justify-center gap-4 md:w-2/3 lg:w-1/2 p-3">
          <div className="flex-1 flex items-center flex-col justify-center bg-blue-500 p-9">
            <h2 className="text-lg font-extrabold from-neutral-600">
              Calculadora
            </h2>
            <div>
              <label>Valor Pago:</label>
              <input
                className="p-3"
                type="number"
                value={valorPago}
                onChange={handleValorPagoChange}
              />
            </div>
            <div>
              <label>Valor Total:</label>
              <input
                className="p-3 mt-1"
                type="number"
                value={valorTotal}
                onChange={handleValorTotalChange}
              />
            </div>
            <button
              className="rounded mt-4 border-2 p-3 "
              onClick={calcularTroco}
            >
              Calcular
            </button>
            <div>
              <label>Troco:</label>
              <span>{troco}</span>
            </div>
          </div>

          <div className="flex-1 bg-yellow-500 text-white p-4">
            <h2 className="text-xl">Coluna 2</h2>
            <p>Conteúdo da Coluna 2</p>
          </div>
        </div>
      </div>
    </>
  );
}

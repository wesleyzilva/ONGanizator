"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { getProjects, addContribution } from '@/lib/mockUtils';

export default function ContribuirPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id || "";
  const projeto = getProjects().find((p: any) => p.id === id) || { titulo: id };

  const [amount, setAmount] = useState(0);
  const [step, setStep] = useState<"form" | "pix" | "success">("form");

  function simulateGeneratePix() {
    setStep("pix");
  }

  function simulateConfirmPayment() {
    addContribution({ projetoId: id, amount, date: new Date().toISOString() });
    setStep("success");
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contribuir — {projeto.titulo}</h1>

      {step === "form" && (
        <form onSubmit={(e) => { e.preventDefault(); simulateGeneratePix(); }} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Valor (R$)</label>
            <input type="number" value={amount || ''} onChange={(e) => setAmount(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={() => router.back()} className="text-sm text-gray-500">Voltar</button>
            <button className="bg-brand-600 text-white px-4 py-2 rounded">Gerar PIX</button>
          </div>
        </form>
      )}

      {step === "pix" && (
        <div className="space-y-4">
          <div className="p-4 border rounded bg-white">
            <p className="text-sm text-gray-600">QR Code (simulado)</p>
            <div className="w-full h-40 bg-gray-100 mt-2 flex items-center justify-center">[QR CODE]</div>
            <p className="text-xs text-gray-500 mt-2">Chave PIX: pix-demo@onganizator.com.br</p>
            <p className="text-sm font-semibold mt-2">Valor: R$ {amount}</p>
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={() => setStep('form')} className="text-sm text-gray-500">Editar</button>
            <button onClick={simulateConfirmPayment} className="bg-brand-600 text-white px-4 py-2 rounded">Simular pagamento</button>
          </div>
        </div>
      )}

      {step === "success" && (
        <div className="space-y-4">
          <p className="text-green-600 font-semibold">Pagamento registrado com sucesso (simulado).</p>
          <div className="flex gap-2">
            <button onClick={() => router.push(`/projetos/${id}`)} className="bg-brand-600 text-white px-4 py-2 rounded">Voltar ao projeto</button>
            <button onClick={() => router.push('/')} className="text-sm text-gray-500">Ir ao dashboard</button>
          </div>
        </div>
      )}
    </div>
  );
}

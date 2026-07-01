'use client';

import { useState } from 'react';

const PRESET_CORES = [
  { label: 'Índigo (padrão)', primary: '#4f46e5', light: '#eef2ff' },
  { label: 'Esmeralda', primary: '#059669', light: '#ecfdf5' },
  { label: 'Violeta', primary: '#7c3aed', light: '#f5f3ff' },
  { label: 'Laranja', primary: '#ea580c', light: '#fff7ed' },
  { label: 'Safira', primary: '#0284c7', light: '#f0f9ff' },
  { label: 'Rosa', primary: '#db2777', light: '#fdf2f8' },
];

const PRESET_FONTES = ['Inter', 'Roboto', 'Poppins', 'Open Sans', 'Nunito'];

const PRESET_LOGOS = [
  { label: 'ONGanizator (padrão)', sigla: 'O', nome: 'ONGanizator' },
  { label: 'Rede Social BR',       sigla: 'R', nome: 'Rede Social BR' },
  { label: 'ImpactoHub',           sigla: 'I', nome: 'ImpactoHub' },
  { label: 'TerceiroSetor.app',    sigla: 'T', nome: 'TerceiroSetor.app' },
];

export default function ConfiguracoesPage() {
  const [cor, setCor] = useState(PRESET_CORES[0]);
  const [fonte, setFonte] = useState(PRESET_FONTES[0]);
  const [logo, setLogo] = useState(PRESET_LOGOS[0]);
  const [nomeOrg, setNomeOrg] = useState('Rede Social BR');
  const [tagline, setTagline] = useState('Plataforma auditável para o terceiro setor');
  const [modoEscuro, setModoEscuro] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-slate-100 rounded-xl text-3xl">🎨</div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">White-label</h1>
            <p className="text-slate-500 mt-1 text-sm">
              Personalize nome, cor, logo e fonte para demonstrar o uso por uma rede parceira ou cliente.{' '}
              <span className="text-amber-600 font-medium">Configuração de demonstração — não persiste.</span>
            </p>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition"
          style={{ backgroundColor: cor.primary }}
        >
          {saved ? '✅ Salvo!' : '💾 Salvar configuração'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left — config panels */}
        <div className="space-y-6">

          {/* Identity */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Identidade</h2>
            <div>
              <label className="text-xs font-medium text-slate-500 mb-1 block">Nome da organização / plataforma</label>
              <input
                value={nomeOrg}
                onChange={(e) => setNomeOrg(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-500 mb-1 block">Tagline</label>
              <input
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
            </div>
          </div>

          {/* Logo preset */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-3">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Logo (textual)</h2>
            <div className="grid grid-cols-2 gap-2">
              {PRESET_LOGOS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => { setLogo(l); if (l.label !== 'ONGanizator (padrão)') setNomeOrg(l.nome); }}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-sm font-medium transition ${logo.label === l.label ? 'border-indigo-400 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-600 hover:border-indigo-200 hover:bg-slate-50'}`}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: cor.primary }}
                  >
                    {l.sigla}
                  </span>
                  {l.nome}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-3">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Cor primária</h2>
            <div className="grid grid-cols-3 gap-2">
              {PRESET_CORES.map((c) => (
                <button
                  key={c.label}
                  onClick={() => setCor(c)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition ${cor.label === c.label ? 'border-2 border-slate-400 bg-slate-50' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <span className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: c.primary }} />
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Font */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-3">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Fonte (mock visual)</h2>
            <div className="flex flex-wrap gap-2">
              {PRESET_FONTES.map((f) => (
                <button
                  key={f}
                  onClick={() => setFonte(f)}
                  className={`px-3 py-1.5 rounded-lg border text-sm transition ${fonte === f ? 'border-indigo-400 bg-indigo-50 text-indigo-700 font-semibold' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
                  style={{ fontFamily: f }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Dark mode toggle */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-700">Modo escuro</div>
              <div className="text-xs text-slate-400 mt-0.5">Aplicado apenas no preview abaixo</div>
            </div>
            <button
              onClick={() => setModoEscuro((v) => !v)}
              className={`w-11 h-6 rounded-full relative transition-colors ${modoEscuro ? 'bg-indigo-600' : 'bg-slate-200'}`}
            >
              <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all ${modoEscuro ? 'left-6' : 'left-1'}`} />
            </button>
          </div>
        </div>

        {/* Right — live preview */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Preview ao vivo</h2>
          <div
            className={`rounded-2xl overflow-hidden shadow-lg border ${modoEscuro ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}
            style={{ fontFamily: fonte }}
          >
            {/* Fake header */}
            <div className="flex items-center gap-3 px-5 py-3" style={{ backgroundColor: cor.primary }}>
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                {logo.sigla}
              </div>
              <div>
                <div className="text-white font-bold text-sm">{nomeOrg || logo.nome}</div>
                <div className="text-white/70 text-xs">{tagline}</div>
              </div>
            </div>

            {/* Fake sidebar + content */}
            <div className="flex">
              <div className={`w-40 px-3 py-4 space-y-1 border-r ${modoEscuro ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
                {['Dashboard', 'Projetos', 'Captação', 'Governança', 'Impacto'].map((item, i) => (
                  <div
                    key={item}
                    className="px-2 py-1.5 rounded-lg text-xs font-medium"
                    style={i === 1 ? { backgroundColor: cor.light, color: cor.primary } : {}}
                  >
                    <span className={i === 1 ? '' : modoEscuro ? 'text-slate-300' : 'text-slate-500'}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex-1 p-4 space-y-3">
                <div className={`text-xs font-bold ${modoEscuro ? 'text-slate-300' : 'text-slate-500'}`}>
                  Projetos · {nomeOrg || logo.nome}
                </div>
                {['Adote uma Nascente', 'Brigadas Pantanal', 'Banco de Sementes'].map((p, i) => (
                  <div
                    key={p}
                    className={`px-3 py-2 rounded-xl border text-xs ${modoEscuro ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-white border-slate-100 text-slate-700'}`}
                  >
                    <div className="font-semibold">{p}</div>
                    <div className="mt-1 h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${[62, 77, 53][i]}%`, backgroundColor: cor.primary }}
                      />
                    </div>
                    <div className="mt-0.5" style={{ color: cor.primary }}>{[62, 77, 53][i]}% captado</div>
                  </div>
                ))}
                {/* Fake button */}
                <button
                  className="w-full py-2 rounded-xl text-white text-xs font-semibold mt-2"
                  style={{ backgroundColor: cor.primary }}
                >
                  + Novo Projeto
                </button>
              </div>
            </div>

            {/* Fake status bar */}
            <div className={`px-4 py-2 text-xs flex items-center gap-2 border-t ${modoEscuro ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
              <span style={{ color: cor.primary }}>●</span>
              {fonte} · {cor.label} {modoEscuro ? '· Modo escuro' : ''}
            </div>
          </div>

          {/* Config summary */}
          <div className={`rounded-xl border p-4 text-xs space-y-1 ${modoEscuro ? 'bg-slate-50' : ''}`}>
            <div className="font-semibold text-slate-600 mb-2">Configuração ativa</div>
            {[
              ['Organização', nomeOrg || logo.nome],
              ['Tagline', tagline],
              ['Cor primária', `${cor.label} (${cor.primary})`],
              ['Fonte', fonte],
              ['Modo escuro', modoEscuro ? 'Ativado' : 'Desativado'],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <span className="text-slate-400 w-28">{k}:</span>
                <span className="text-slate-700 font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer disclaimer */}
      <div className="text-xs text-slate-400 border-t border-slate-100 pt-4">
        White-label de demonstração — as configurações não são persistidas. Em produção, seriam salvas em banco de dados e aplicadas via CSS variables / tema dinâmico.
      </div>
    </div>
  );
}

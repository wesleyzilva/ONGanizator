export const dynamic = 'force-static';

interface Journey {
  icon: string;
  title: string;
  steps: { n: number; label: string; detail: string; url?: string }[];
  painPoints: string[];
  gains: string[];
}

const JOURNEYS: Record<'advogado' | 'contador', Journey> = {
  advogado: {
    icon: '⚖️',
    title: 'Advogado · Jornada na Plataforma',
    steps: [
      {
        n: 1, label: 'Cadastrar / acessar como Advogado',
        detail: 'Login com perfil Advogado dá acesso ao CRM de prospecção e às ferramentas jurídico-fiscais.',
        url: '/login',
      },
      {
        n: 2, label: 'Prospectar financiadores no CRM',
        detail: 'Kanban com colunas Backlog → Prospecção → Em andamento → Finalizado. Registre tickets, status e próxima ação.',
        url: '/crm',
      },
      {
        n: 3, label: 'Selecionar mecanismo de captação',
        detail: 'Compare Rouanet, Esporte, FIA, PRONON, PRONAS, MROSC e doação direta. Calcule o incentivo fiscal do patrocinador.',
        url: '/captacao',
      },
      {
        n: 4, label: 'Aprovar projeto para prospecção',
        detail: 'Mude o status do projeto para "Aprovado para prospecção" — gera evento auditável com timestamp e responsável.',
        url: '/projetos',
      },
      {
        n: 5, label: 'Gerar proposta para patrocinador',
        detail: 'Proposta automática com objetivo, KRs, ODS, orçamento, mecanismo recomendado e contrapartidas.',
        url: '/projetos',
      },
      {
        n: 6, label: 'Analisar risco do projeto',
        detail: 'Painel de risco jurídico-operacional por categoria: legal, financeiro, operacional, reputacional.',
        url: '/risco',
      },
    ],
    painPoints: [
      'Perco tempo montando proposta no Word para cada cliente.',
      'Difícil explicar ao patrocinador qual lei se aplica ao projeto.',
      'Não tenho visão do pipeline de patrocínio em um só lugar.',
      'Cada cliente tem um jeito diferente de organizar documentação.',
    ],
    gains: [
      'Proposta gerada em segundos com KRs, ODS e mecanismo recomendado.',
      'Calculadora mostra o benefício fiscal exato para o patrocinador.',
      'CRM centraliza todo o funil de captação com semáforo de urgência.',
      'Trilha de auditoria comprova a atuação profissional no processo.',
    ],
  },
  contador: {
    icon: '📒',
    title: 'Contador · Jornada na Plataforma',
    steps: [
      {
        n: 1, label: 'Cadastrar / acessar como Contador',
        detail: 'Login com perfil Contador dá acesso às ferramentas de validação financeira e prestação de contas.',
        url: '/login',
      },
      {
        n: 2, label: 'Validar comprovantes e conciliar',
        detail: 'Painel de contabilidade mostra pendências em semáforo (verde/amarelo/vermelho) e permite registrar parecer.',
        url: '/contabilidade',
      },
      {
        n: 3, label: 'Monitorar KRs e metas financeiras',
        detail: 'Acompanhe orçamento aprovado × executado, adiantamentos e cronograma de desembolso.',
        url: '/monitoramento',
      },
      {
        n: 4, label: 'Simular incentivo fiscal do cliente',
        detail: 'Calculadora de incentivo fiscal por mecanismo — útil para orientar empresas e ONGs sobre limites e documentação.',
        url: '/captacao',
      },
      {
        n: 5, label: 'Emitir parecer contábil no relatório',
        detail: 'O relatório anual inclui seção de parecer contábil com responsável, CRC e conclusão.',
        url: '/projetos',
      },
    ],
    painPoints: [
      'Clientes entregam comprovantes fora de ordem ou incompletos.',
      'Prestação de contas exige recompilação manual de documentos.',
      'Difícil calcular o limite de incentivo fiscal de cada mecanismo.',
      'Relatório final demora semanas para consolidar.',
    ],
    gains: [
      'Semáforo de pendências mostra exatamente o que falta validar.',
      'Relatório anual consolidado já formatado com parecer contábil.',
      'Calculadora de incentivo traz limite, documentos e comparativo.',
      'Trilha de auditoria comprova cada passo da validação financeira.',
    ],
  },
};

const COMMON_FEATURES = [
  { icon: '🔏', title: 'Trilha de Auditoria', desc: 'Cada aprovação, parecer e envio gera evento com data, hora e responsável. Prova de diligência profissional.' },
  { icon: '📄', title: 'Relatório Anual', desc: 'Documento consolidado com objetivo, KRs, orçamento executado, evidências, parecer contábil e jurídico.' },
  { icon: '📦', title: 'Pacote de Auditoria', desc: 'Download de todos os documentos do projeto: contrato, comprovantes, evidências, relatórios e eventos.' },
  { icon: '🧮', title: 'Calculadora de Incentivos', desc: 'Simule o benefício fiscal para o patrocinador por mecanismo (Rouanet, Esporte, FIA, PRONON, PRONAS).' },
  { icon: '🎖️', title: 'Selos de Maturidade', desc: 'Bronze, Prata e Ouro indicam o nível de governança e evidências do projeto — aumenta confiança do financiador.' },
  { icon: '🤝', title: 'Proposta Automática', desc: 'Gere proposta para patrocinador em segundos com ODS, KRs, orçamento e modalidade de captação.' },
];

export default function ParaProfissionaisPage() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-12">
      {/* Hero */}
      <div className="text-center space-y-3 py-6">
        <h1 className="text-3xl font-bold text-slate-800">
          ONGanizator para <span className="text-indigo-600">Profissionais</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Uma plataforma construída para advogados e contadores que trabalham com o terceiro setor — centraliza prospecção, compliance, validação financeira e geração de relatórios.
        </p>
      </div>

      {/* Jornadas */}
      {(['advogado', 'contador'] as const).map((role) => {
        const j = JOURNEYS[role];
        return (
          <div key={role} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Header */}
            <div className={`px-6 py-5 ${role === 'advogado' ? 'bg-indigo-50' : 'bg-emerald-50'}`}>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{j.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">{j.title}</h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {role === 'advogado'
                      ? 'Prospecção de financiadores, compliance jurídico-fiscal e geração de propostas.'
                      : 'Validação financeira, prestação de contas e emissão de parecer contábil.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Steps */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Passo a Passo</h3>
                <ol className="space-y-3">
                  {j.steps.map((s) => (
                    <li key={s.n} className="flex gap-3">
                      <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ${role === 'advogado' ? 'bg-indigo-600' : 'bg-emerald-600'}`}>
                        {s.n}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-700 text-sm">{s.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{s.detail}</div>
                        {s.url && (
                          <a href={s.url} className={`text-xs mt-1 inline-block underline ${role === 'advogado' ? 'text-indigo-500' : 'text-emerald-600'}`}>
                            → Acessar
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Pain/Gain */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Dores atuais</h3>
                  <ul className="space-y-2">
                    {j.painPoints.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-red-400 flex-shrink-0">✖</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Ganhos com a plataforma</h3>
                  <ul className="space-y-2">
                    {j.gains.map((g, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-emerald-500 flex-shrink-0">✔</span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Common Features */}
      <div>
        <h2 className="text-lg font-bold text-slate-700 mb-4">Recursos compartilhados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMMON_FEATURES.map((f) => (
            <div key={f.title} className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm space-y-2">
              <div className="text-2xl">{f.icon}</div>
              <div className="font-semibold text-slate-700">{f.title}</div>
              <div className="text-sm text-slate-500">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-800 text-white rounded-2xl p-8 text-center space-y-4">
        <p className="text-xl font-bold">Pronto para demonstrar para um cliente?</p>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          Use o roteiro de demo para guiar advogados, contadores ou ONGs por toda a jornada auditável da plataforma.
        </p>
        <a href="/demo" className="inline-block mt-2 px-6 py-2.5 bg-white text-slate-800 rounded-xl font-semibold text-sm hover:bg-slate-100 transition">
          🎬 Ver roteiro de demo
        </a>
      </div>
    </div>
  );
}

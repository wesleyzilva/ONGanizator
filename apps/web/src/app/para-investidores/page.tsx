import { api } from '@/lib/api';

export default async function ParaInvestidoresPage() {
  const [dashboard, impacto, consolidado] = await Promise.all([
    api.dashboard(),
    api.impactoResumo(),
    api.monitoramentoConsolidado(),
  ]);

  const fmt = (n: number) =>
    n >= 1_000_000 ? `R$ ${(n / 1_000_000).toFixed(1)}M` : `R$ ${(n / 1_000).toFixed(0)}K`;

  const odsTop = Object.entries(impacto.distribuicaoODS || {})
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Plataforma de Impacto Social
          </span>
          <h1 className="text-5xl font-extrabold leading-tight">
            Invista onde o impacto<br />é mensurável e auditável
          </h1>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto">
            A ONGanizator conecta investidores e patrocinadores a organizações validadas,
            com governança comprovada, projetos estruturados e monitoramento em tempo real.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href="/marketplace" className="bg-white text-brand-700 font-bold px-8 py-3 rounded-xl hover:bg-brand-50 transition-colors">
              Ver projetos disponíveis
            </a>
            <a href="/monitoramento" className="border border-white/50 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
              Painel de monitoramento
            </a>
          </div>
        </div>
      </section>

      {/* KPIs PROVA SOCIAL */}
      <section className="bg-brand-50 px-8 py-12 border-b border-brand-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { valor: dashboard.totalOrganizacoes, label: 'Organizações validadas', cor: 'text-brand-700' },
            { valor: dashboard.totalProjetos, label: 'Projetos estruturados', cor: 'text-blue-700' },
            { valor: fmt(dashboard.totalCaptadoBRL), label: 'Já captados', cor: 'text-amber-700' },
            { valor: impacto.totalBeneficiarios?.toLocaleString('pt-BR'), label: 'Beneficiários diretos', cor: 'text-violet-700' },
          ].map((k) => (
            <div key={k.label}>
              <p className={`text-4xl font-extrabold ${k.cor}`}>{k.valor}</p>
              <p className="text-sm text-gray-500 mt-1 font-medium">{k.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-8 space-y-20 py-16">

        {/* POR QUE INVESTIR */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Por que investir pela ONGanizator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔍',
                titulo: 'Organizações pré-validadas',
                texto: 'Cada organização passa por diagnóstico de maturidade com score em 5 dimensões: governança, financeiro, compliance, execução e impacto. Você investe só em quem está pronto.',
                cor: 'bg-green-50 border-green-100',
              },
              {
                icon: '📊',
                titulo: 'Monitoramento em tempo real',
                texto: 'Acompanhe indicadores, evidências fotográficas, relatórios periódicos e timeline de execução de cada projeto financiado. Prestação de contas automatizada e auditável.',
                cor: 'bg-blue-50 border-blue-100',
              },
              {
                icon: '🎯',
                titulo: 'Matching por ODS e ticket',
                texto: 'A plataforma sugere automaticamente os projetos mais alinhados ao seu portfólio de impacto, considerando ODS de interesse, região e faixa de aporte.',
                cor: 'bg-amber-50 border-amber-100',
              },
              {
                icon: '📄',
                titulo: 'Relatórios ESG prontos',
                texto: 'Gere relatórios de impacto ESG, alinhamento com ODS e SROI para sua equipe de sustentabilidade, RI ou compliance com um clique.',
                cor: 'bg-violet-50 border-violet-100',
              },
              {
                icon: '🔒',
                titulo: 'Trilha de auditoria',
                texto: 'Todos os aportes, evidências e marcos do projeto ficam registrados com timestamp. Rastreabilidade completa do recurso investido até o beneficiário final.',
                cor: 'bg-rose-50 border-rose-100',
              },
              {
                icon: '🤝',
                titulo: 'Gestor de captação dedicado',
                texto: 'Equipe especializada acompanha o relacionamento entre investidor e organização, estrutura propostas e facilita contratos e due diligence.',
                cor: 'bg-teal-50 border-teal-100',
              },
            ].map((item) => (
              <div key={item.titulo} className={`rounded-2xl border p-6 space-y-3 ${item.cor}`}>
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-bold text-gray-900">{item.titulo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COBERTURA ODS */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Alinhamento com a Agenda 2030</h2>
          <p className="text-center text-gray-500 mb-8">Projetos ativos cobrem {odsTop.length} Objetivos de Desenvolvimento Sustentável da ONU</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {odsTop.map(([ods, count]) => (
              <div key={ods} className="bg-brand-600 text-white rounded-xl p-4 text-center">
                <p className="text-lg font-bold">{ods}</p>
                <p className="text-xs text-brand-200 mt-1">{String(count)} projetos</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Como funciona para o investidor</h2>
          <div className="space-y-4">
            {[
              { n: '01', titulo: 'Acesse o marketplace', desc: 'Navegue pelos projetos validados, filtre por ODS, região e ticket mínimo. Veja score institucional, indicadores e evidências de cada organização.' },
              { n: '02', titulo: 'Receba matches automáticos', desc: 'A plataforma cruza seu perfil de investimento com os projetos disponíveis e sugere as melhores oportunidades de impacto para o seu portfólio.' },
              { n: '03', titulo: 'Realize o aporte', desc: 'Formalize o investimento com suporte do gestor de captação. Contrato, due diligence e transferência com trilha de auditoria completa.' },
              { n: '04', titulo: 'Acompanhe em tempo real', desc: 'Acesse o painel de monitoramento do seu projeto: indicadores, fotos, relatórios periódicos, depoimentos de beneficiários e alertas automáticos.' },
              { n: '05', titulo: 'Receba relatórios de impacto', desc: 'Relatórios ESG, ODS e SROI prontos para uso institucional, RI, prestação de contas a conselhos e publicações de sustentabilidade.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-5 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-sm shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{s.titulo}</h3>
                  <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DEPOIMENTO / PROVA */}
        <section className="bg-brand-50 rounded-3xl p-10 text-center">
          <p className="text-xl text-gray-700 italic max-w-2xl mx-auto leading-relaxed">
            "A nascente que estava seca há 5 anos voltou a brotar água. Agora temos água limpa para o gado e para a casa."
          </p>
          <p className="text-sm text-brand-600 font-semibold mt-4">Família participante · Projeto Adote uma Nascente · MT</p>
        </section>

        {/* MONITORAMENTO DESTAQUE */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Monitoramento auditável</h2>
          <p className="text-center text-gray-500 mb-8">Veja o que está sendo acompanhado agora na plataforma</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { valor: consolidado.totalRelatorios, label: 'Relatórios publicados', cor: 'text-brand-600' },
              { valor: consolidado.totalEvidencias, label: 'Evidências registradas', cor: 'text-blue-600' },
              { valor: consolidado.projetosMonitorados, label: 'Projetos monitorados', cor: 'text-amber-600' },
              { valor: consolidado.totalDepoimentos, label: 'Depoimentos de beneficiários', cor: 'text-violet-600' },
            ].map((k) => (
              <div key={k.label} className="card text-center">
                <p className={`text-4xl font-extrabold ${k.cor}`}>{k.valor}</p>
                <p className="text-sm text-gray-500 mt-2">{k.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/monitoramento" className="btn-primary inline-block">
              Acessar painel de monitoramento completo →
            </a>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-gradient-to-r from-brand-700 to-brand-500 text-white rounded-3xl p-12 text-center space-y-5">
          <h2 className="text-3xl font-bold">Pronto para investir com impacto mensurável?</h2>
          <p className="text-brand-100 max-w-xl mx-auto">
            Fale com nosso gestor de captação e descubra os projetos mais adequados ao seu perfil de investimento social.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/marketplace" className="bg-white text-brand-700 font-bold px-8 py-3 rounded-xl hover:bg-brand-50 transition-colors">
              Ver projetos agora
            </a>
            <a href="/investidores" className="border border-white/50 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
              Criar perfil de investidor
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
 

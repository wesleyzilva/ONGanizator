const MENTORES_DATA = [
  {
    iniciais: 'AC',
    nome: 'Ana Carvalho',
    area: 'Governança e Compliance',
    especialidade: 'Estatutos, OSCIP, MROSC',
    bio: '15 anos assessorando ONGs em formalização e reestruturação jurídica.',
    avatarBg: 'bg-indigo-600',
    badgeCls: 'bg-indigo-50 text-indigo-700',
  },
  {
    iniciais: 'CM',
    nome: 'Carlos Mendes',
    area: 'Captação e Incentivos Fiscais',
    especialidade: 'Rouanet, FIA, Lei do Esporte',
    bio: 'Ex-Gestor Cultural MinC com vasta experiência em editais federais e estaduais.',
    avatarBg: 'bg-green-600',
    badgeCls: 'bg-green-50 text-green-700',
  },
  {
    iniciais: 'FL',
    nome: 'Fernanda Lima',
    area: 'Impacto e ESG',
    especialidade: 'ODS, teoria da mudança, indicadores',
    bio: 'Doutora em desenvolvimento sustentável com publicações em revistas internacionais.',
    avatarBg: 'bg-emerald-600',
    badgeCls: 'bg-emerald-50 text-emerald-700',
  },
  {
    iniciais: 'RA',
    nome: 'Roberto Alves',
    area: 'Gestão Financeira',
    especialidade: 'DRE, fluxo de caixa, prestação de contas',
    bio: 'Contador CRC com foco exclusivo em organizações do terceiro setor.',
    avatarBg: 'bg-blue-600',
    badgeCls: 'bg-blue-50 text-blue-700',
  },
  {
    iniciais: 'JS',
    nome: 'Juliana Santos',
    area: 'Comunicação e Fundraising',
    especialidade: 'Crowdfunding, narrativa de impacto, redes sociais',
    bio: 'CMO de ONG com 3 campanhas que superaram R$500k em captação digital.',
    avatarBg: 'bg-pink-600',
    badgeCls: 'bg-pink-50 text-pink-700',
  },
  {
    iniciais: 'MO',
    nome: 'Marcos Oliveira',
    area: 'Projetos e Metas SMART',
    especialidade: 'OKR, KRs, planejamento estratégico',
    bio: 'Gestor de projetos sociais certificado PMI com atuação em 30+ organizações.',
    avatarBg: 'bg-orange-600',
    badgeCls: 'bg-orange-50 text-orange-700',
  },
  {
    iniciais: 'PN',
    nome: 'Patrícia Nunes',
    area: 'Relações Institucionais',
    especialidade: 'Parcerias corporativas, GIFE, fundações',
    bio: '12 anos em institutos empresariais estruturando programas de investimento social.',
    avatarBg: 'bg-purple-600',
    badgeCls: 'bg-purple-50 text-purple-700',
  },
  {
    iniciais: 'DC',
    nome: 'Diego Costa',
    area: 'Tecnologia para ONGs',
    especialidade: 'Sistemas de gestão, LGPD, dados',
    bio: 'CTO de plataforma de impacto social com foco em transformação digital de ONGs.',
    avatarBg: 'bg-cyan-600',
    badgeCls: 'bg-cyan-50 text-cyan-700',
  },
];

export default function MentoriaPage() {
  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      {/* header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Mentoria</h1>
        <p className="text-sm text-gray-500 mt-1">
          Conecte-se com especialistas para acelerar a maturidade institucional da sua organização.
        </p>
      </div>

      {/* filtro por área — exibição estática de todas as áreas */}
      <div className="flex flex-wrap gap-2">
        {[
          'Todos',
          'Governança e Compliance',
          'Captação e Incentivos Fiscais',
          'Impacto e ESG',
          'Gestão Financeira',
          'Comunicação e Fundraising',
          'Projetos e Metas SMART',
          'Relações Institucionais',
          'Tecnologia para ONGs',
        ].map((area, i) => (
          <span
            key={area}
            className={`px-3 py-1.5 text-xs rounded-full border ${
              i === 0
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'border-gray-200 text-gray-600 bg-white'
            }`}
          >
            {area}
          </span>
        ))}
      </div>

      {/* grid de mentores */}
      <div className="grid md:grid-cols-2 gap-6">
        {MENTORES_DATA.map((m) => (
          <div key={m.nome} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
            <div className="flex items-start gap-4">
              {/* avatar com iniciais */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${m.avatarBg}`}
              >
                {m.iniciais}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 text-base">{m.nome}</h3>
                <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mt-1 ${m.badgeCls}`}>
                  {m.area}
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Especialidade</p>
              <p className="text-sm text-gray-700">{m.especialidade}</p>
            </div>

            <p className="text-sm text-gray-500 flex-1">{m.bio}</p>

            <a
              href="#"
              className="bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-medium text-center hover:bg-indigo-700 transition-colors"
            >
              Agendar mentoria
            </a>
          </div>
        ))}
      </div>

      {/* rodapé */}
      <div className="text-center pt-4 border-t border-gray-100">
        <a href="#" className="text-sm text-indigo-600 hover:underline font-medium">
          Quer ser mentor? Cadastre-se como especialista →
        </a>
      </div>
    </div>
  );
}

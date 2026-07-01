type Severidade = 'Alta' | 'Média' | 'Baixa';
type StatusRisco = 'pendente' | 'em regularização' | 'em monitoramento' | 'resolvido';

interface ItemRisco {
  descricao: string;
  severidade: Severidade;
  status: StatusRisco;
  recomendacao: string;
}

interface Categoria {
  titulo: string;
  itens: ItemRisco[];
}

const CATEGORIAS: Categoria[] = [
  {
    titulo: 'Jurídico',
    itens: [
      {
        descricao: 'Estatuto desatualizado',
        severidade: 'Alta',
        status: 'pendente',
        recomendacao: 'Atualizar estatuto social com advogado especialista.',
      },
      {
        descricao: 'Certidões vencidas (FGTS, Receita, PGFN)',
        severidade: 'Alta',
        status: 'em regularização',
        recomendacao: 'Emitir certidões pela plataforma Receita Federal.',
      },
      {
        descricao: 'Ausência de Conselho Fiscal ativo',
        severidade: 'Média',
        status: 'pendente',
        recomendacao: 'Convocar assembleia para eleição do conselho.',
      },
    ],
  },
  {
    titulo: 'Financeiro',
    itens: [
      {
        descricao: 'DRE sem auditoria independente',
        severidade: 'Alta',
        status: 'pendente',
        recomendacao: 'Contratar auditoria para projetos acima de R$500k.',
      },
      {
        descricao: 'Pendências de prestação de contas de convênio anterior',
        severidade: 'Alta',
        status: 'resolvido',
        recomendacao: 'Arquivar documentação de resolução.',
      },
      {
        descricao: 'Fluxo de caixa sem reserva mínima (3 meses)',
        severidade: 'Média',
        status: 'em monitoramento',
        recomendacao: 'Constituir fundo de reserva operacional.',
      },
    ],
  },
  {
    titulo: 'Reputacional',
    itens: [
      {
        descricao: 'Ausência de política de comunicação de crise',
        severidade: 'Média',
        status: 'pendente',
        recomendacao: 'Elaborar manual de comunicação de crise.',
      },
      {
        descricao: 'Ausência de canal de denúncias (whistleblower)',
        severidade: 'Média',
        status: 'pendente',
        recomendacao: 'Implementar canal via plataformas como EthicsLine.',
      },
      {
        descricao: 'Baixo índice de transparência no portal (sem relatório anual público)',
        severidade: 'Alta',
        status: 'pendente',
        recomendacao: 'Publicar relatório anual no site institucional.',
      },
    ],
  },
];

const SEVERIDADE_ICON: Record<Severidade, string> = {
  Alta: '🔴',
  Média: '🟡',
  Baixa: '🟢',
};

const STATUS_CLS: Record<StatusRisco, string> = {
  pendente: 'bg-red-100 text-red-700',
  'em regularização': 'bg-yellow-100 text-yellow-700',
  'em monitoramento': 'bg-blue-100 text-blue-700',
  resolvido: 'bg-green-100 text-green-700',
};

// Indicador geral: vermelho se >2 itens com Alta + pendente
const altasPendentes = CATEGORIAS.flatMap((c) =>
  c.itens.filter((i) => i.severidade === 'Alta' && i.status === 'pendente'),
).length;

const semaforoCls =
  altasPendentes > 2
    ? 'bg-red-100 text-red-700 border-red-300'
    : altasPendentes > 0
    ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
    : 'bg-green-100 text-green-700 border-green-300';

const semaforoLabel =
  altasPendentes > 2 ? '🔴 Risco Elevado' : altasPendentes > 0 ? '🟡 Risco Moderado' : '🟢 Risco Baixo';

export default function RiscoPage() {
  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      {/* header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Risco Reputacional</h1>
          <p className="text-sm text-gray-500 mt-1">
            Análise de riscos jurídicos, financeiros e reputacionais da sua organização.
          </p>
        </div>
        {/* semáforo de risco geral */}
        <span className={`shrink-0 text-sm font-semibold px-4 py-2 rounded-lg border ${semaforoCls}`}>
          {semaforoLabel}
        </span>
      </div>

      {/* categorias */}
      <div className="space-y-8">
        {CATEGORIAS.map((cat) => (
          <section key={cat.titulo}>
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-indigo-600 rounded-full inline-block" />
              {cat.titulo}
            </h2>
            <div className="space-y-3">
              {cat.itens.map((item) => (
                <div
                  key={item.descricao}
                  className="bg-white rounded-xl shadow p-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4"
                >
                  <span className="text-xl shrink-0 mt-0.5">{SEVERIDADE_ICON[item.severidade]}</span>
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-gray-800">{item.descricao}</p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_CLS[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">
                      <span className="font-medium text-gray-600">Recomendação:</span> {item.recomendacao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* rodapé legal */}
      <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
        Este relatório é gerado com base nos dados declarados e não substitui assessoria jurídica profissional.
      </p>
    </div>
  );
}

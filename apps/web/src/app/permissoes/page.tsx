export const dynamic = 'force-static';

type Role = 'Administrador' | 'Advogado' | 'Contador' | 'ONG' | 'Investidor' | 'Fundação';

type Cell = '✅' | '👁' | '—';

interface MatrixRow {
  modulo: string;
  acao: string;
  adm: Cell;
  advogado: Cell;
  contador: Cell;
  ong: Cell;
  investidor: Cell;
  fundacao: Cell;
  nota?: string;
}

const MATRIX: MatrixRow[] = [
  // ─── Organização ───
  {
    modulo: 'Organizações', acao: 'Cadastrar / editar ONG',
    adm: '✅', advogado: '✅', contador: '—', ong: '✅', investidor: '—', fundacao: '—',
    nota: 'ONG edita apenas a própria organização',
  },
  {
    modulo: 'Organizações', acao: 'Visualizar ONGs',
    adm: '✅', advogado: '✅', contador: '—', ong: '✅', investidor: '—', fundacao: '—',
  },
  // ─── Projetos ───
  {
    modulo: 'Projetos', acao: 'Cadastrar projeto',
    adm: '✅', advogado: '—', contador: '—', ong: '✅', investidor: '—', fundacao: '—',
  },
  {
    modulo: 'Projetos', acao: 'Editar projeto',
    adm: '✅', advogado: '—', contador: '—', ong: '✅', investidor: '—', fundacao: '—',
  },
  {
    modulo: 'Projetos', acao: 'Visualizar projetos',
    adm: '✅', advogado: '✅', contador: '✅', ong: '✅', investidor: '✅', fundacao: '✅',
  },
  {
    modulo: 'Projetos', acao: 'Aprovar para prospecção',
    adm: '✅', advogado: '✅', contador: '—', ong: '—', investidor: '—', fundacao: '—',
    nota: 'Gera evento de auditoria com timestamp',
  },
  {
    modulo: 'Projetos', acao: 'Gerar proposta para patrocinador',
    adm: '✅', advogado: '✅', contador: '—', ong: '—', investidor: '—', fundacao: '—',
  },
  {
    modulo: 'Projetos', acao: 'Ver relatório anual',
    adm: '✅', advogado: '✅', contador: '✅', ong: '✅', investidor: '👁', fundacao: '👁',
    nota: 'Investidor/Fundação: somente leitura do PDF/view',
  },
  {
    modulo: 'Projetos', acao: 'Acessar pacote de auditoria',
    adm: '✅', advogado: '✅', contador: '✅', ong: '—', investidor: '👁', fundacao: '👁',
    nota: 'Investidor/Fundação: somente leitura',
  },
  // ─── Captação ───
  {
    modulo: 'Captação', acao: 'Gerenciar CRM / prospecção',
    adm: '✅', advogado: '✅', contador: '—', ong: '—', investidor: '—', fundacao: '—',
  },
  {
    modulo: 'Captação', acao: 'Selecionar mecanismo / simular incentivo',
    adm: '✅', advogado: '✅', contador: '✅', ong: '—', investidor: '—', fundacao: '—',
    nota: 'Contador pode simular para orientar cliente',
  },
  {
    modulo: 'Captação', acao: 'Acessar marketplace de editais',
    adm: '✅', advogado: '—', contador: '—', ong: '—', investidor: '✅', fundacao: '✅',
  },
  {
    modulo: 'Captação', acao: 'Crowdfunding',
    adm: '✅', advogado: '—', contador: '—', ong: '✅', investidor: '✅', fundacao: '—',
  },
  // ─── Financiadores ───
  {
    modulo: 'Financiadores', acao: 'Ver perfil de financiadores',
    adm: '✅', advogado: '✅', contador: '—', ong: '—', investidor: '✅', fundacao: '✅',
  },
  {
    modulo: 'Financiadores', acao: 'Editar perfil de financiador',
    adm: '✅', advogado: '—', contador: '—', ong: '—', investidor: '✅', fundacao: '✅',
    nota: 'Cada financiador edita apenas o próprio perfil',
  },
  // ─── Governança ───
  {
    modulo: 'Governança', acao: 'Diagnóstico de maturidade ONG',
    adm: '✅', advogado: '—', contador: '—', ong: '✅', investidor: '—', fundacao: '—',
  },
  {
    modulo: 'Governança', acao: 'Análise de risco',
    adm: '✅', advogado: '✅', contador: '—', ong: '—', investidor: '—', fundacao: '—',
  },
  {
    modulo: 'Governança', acao: 'Validar contabilidade / comprovantes',
    adm: '✅', advogado: '—', contador: '✅', ong: '—', investidor: '—', fundacao: '—',
  },
  // ─── Impacto ───
  {
    modulo: 'Impacto', acao: 'Monitoramento de KRs e metas',
    adm: '✅', advogado: '—', contador: '✅', ong: '✅', investidor: '—', fundacao: '✅',
  },
  {
    modulo: 'Impacto', acao: 'Impacto & ESG / ODS',
    adm: '✅', advogado: '—', contador: '—', ong: '✅', investidor: '—', fundacao: '✅',
  },
  {
    modulo: 'Impacto', acao: 'Mentoria (acesso a programa)',
    adm: '✅', advogado: '—', contador: '—', ong: '—', investidor: '—', fundacao: '—',
    nota: 'Recurso exclusivo do administrador da plataforma',
  },
  // ─── Configuração ───
  {
    modulo: 'Configuração', acao: 'White-label (nome, cor, logo)',
    adm: '✅', advogado: '—', contador: '—', ong: '—', investidor: '—', fundacao: '—',
  },
  {
    modulo: 'Configuração', acao: 'Roteiro de demo / webinar',
    adm: '✅', advogado: '—', contador: '—', ong: '—', investidor: '—', fundacao: '—',
  },
  {
    modulo: 'Configuração', acao: 'Visualizar esta matriz',
    adm: '✅', advogado: '—', contador: '—', ong: '—', investidor: '—', fundacao: '—',
  },
];

const ROLES: { key: keyof MatrixRow; label: Role; color: string }[] = [
  { key: 'adm',       label: 'Administrador', color: 'bg-slate-700 text-white' },
  { key: 'advogado',  label: 'Advogado',      color: 'bg-indigo-700 text-white' },
  { key: 'contador',  label: 'Contador',      color: 'bg-emerald-700 text-white' },
  { key: 'ong',       label: 'ONG',           color: 'bg-green-600 text-white' },
  { key: 'investidor',label: 'Investidor',    color: 'bg-amber-600 text-white' },
  { key: 'fundacao',  label: 'Fundação',      color: 'bg-purple-700 text-white' },
];

function cellStyle(v: Cell) {
  if (v === '✅') return 'text-emerald-600 font-semibold text-base';
  if (v === '👁') return 'text-amber-500 font-semibold text-base';
  return 'text-slate-300 text-base';
}

const modulos = Array.from(new Set(MATRIX.map((r) => r.modulo)));

export default function PermissoesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-slate-100 rounded-xl text-3xl">🔐</div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Matriz de Permissões</h1>
          <p className="text-slate-500 mt-1">
            Resumo de quem pode <strong>criar/editar</strong> (✅), apenas <strong>visualizar</strong> (👁) ou <strong>não acessa</strong> (—) cada módulo da plataforma.
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-200">
          <span className="text-emerald-600 font-bold">✅</span>
          <span className="text-emerald-700">Acesso completo (criar / editar / executar)</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg border border-amber-200">
          <span className="text-amber-500 font-bold">👁</span>
          <span className="text-amber-700">Somente leitura / visualização</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-400 font-bold">—</span>
          <span className="text-slate-500">Sem acesso</span>
        </div>
      </div>

      {/* Role chips */}
      <div className="flex flex-wrap gap-2">
        {ROLES.map((r) => (
          <span key={r.key} className={`px-3 py-1 rounded-full text-xs font-semibold ${r.color}`}>
            {r.label}
          </span>
        ))}
      </div>

      {/* Matrix table per modulo */}
      {modulos.map((modulo) => {
        const rows = MATRIX.filter((r) => r.modulo === modulo);
        return (
          <div key={modulo} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
              <h2 className="text-sm font-bold text-slate-600 uppercase tracking-wider">{modulo}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left px-5 py-2.5 font-medium text-slate-500 w-64">Ação</th>
                    {ROLES.map((r) => (
                      <th key={r.key} className="text-center px-3 py-2.5 font-medium text-slate-500 min-w-[90px]">
                        {r.label}
                      </th>
                    ))}
                    <th className="text-left px-4 py-2.5 font-medium text-slate-500">Nota</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b last:border-b-0 border-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                    >
                      <td className="px-5 py-3 text-slate-700 font-medium">{row.acao}</td>
                      {ROLES.map((r) => {
                        const v = row[r.key] as Cell;
                        return (
                          <td key={r.key} className="text-center px-3 py-3">
                            <span className={cellStyle(v)}>{v}</span>
                          </td>
                        );
                      })}
                      <td className="px-4 py-3 text-slate-400 text-xs italic">{row.nota ?? ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}

      {/* Footer disclaimer */}
      <div className="text-xs text-slate-400 border-t border-slate-100 pt-4">
        Esta matriz reflete as permissões do MVP de demonstração. Em produção, permissões serão gerenciadas por RBAC com controle granular por recurso.
      </div>
    </div>
  );
}

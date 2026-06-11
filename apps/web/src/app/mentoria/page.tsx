import { MENTORES } from '@/lib/mockData';
import Link from 'next/link';

function Stars({ n }: { n: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {'★'.repeat(Math.floor(n))}{'☆'.repeat(5 - Math.floor(n))}
      <span className="text-xs text-gray-500 ml-1">{n.toFixed(1)}</span>
    </span>
  );
}

export default function MentoriaPage() {
  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">🎓 Marketplace de Mentoria</h1>
          <p className="text-sm text-gray-500 mt-1">
            Conecte-se com especialistas em captação, governança, comunicação e impacto social.
          </p>
        </div>
        <button className="px-4 py-2 border border-brand-300 text-brand-700 text-sm font-medium rounded-lg hover:bg-brand-50">
          Quero ser mentor
        </button>
      </div>

      {/* como funciona */}
      <div className="card p-5 bg-gradient-to-r from-brand-50 to-purple-50 border-brand-200">
        <h2 className="text-sm font-bold text-brand-800 mb-3">Como funciona</h2>
        <div className="grid md:grid-cols-4 gap-4 text-xs text-center">
          {[
            { n: '1', t: 'Escolha o mentor', d: 'Filtre por especialidade e ODS de interesse.' },
            { n: '2', t: 'Agende a sessão', d: 'Escolha data/horário no calendário do mentor.' },
            { n: '3', t: 'Pague com segurança', d: 'Pagamento retido até após a sessão.' },
            { n: '4', t: 'Acesse a gravação', d: 'Sessão gravada disponível por 30 dias.' },
          ].map((s) => (
            <div key={s.n}>
              <div className="w-7 h-7 rounded-full bg-brand-600 text-white font-bold flex items-center justify-center mx-auto mb-1">{s.n}</div>
              <p className="font-semibold text-gray-800">{s.t}</p>
              <p className="text-gray-500 mt-0.5">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-brand-700 mt-3 text-center">
          ✅ Plataforma retém 15% · Mentor recebe 85% · Cancelamento grátis até 24h antes
        </p>
      </div>

      {/* filtros */}
      <div className="flex flex-wrap gap-2">
        {['Todos', 'Captação', 'Governança', 'Comunicação', 'ESG', 'Tecnologia'].map((f) => (
          <button key={f} className={`px-3 py-1.5 text-xs rounded-lg border transition-colors ${f === 'Todos' ? 'bg-brand-600 text-white border-brand-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            {f}
          </button>
        ))}
      </div>

      {/* grid de mentores */}
      <div className="grid md:grid-cols-2 gap-6">
        {MENTORES.map((m) => (
          <div key={m.id} className="card p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={m.imagem} alt={m.nome} className="w-14 h-14 rounded-2xl object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900">{m.nome}</h3>
                <p className="text-xs text-brand-600 font-medium">{m.especialidade}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Stars n={m.avaliacaoMedia} />
                  <span className="text-xs text-gray-400">({m.totalSessoes} sessões)</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-lg font-bold text-gray-900">R$ {m.precoSessao}</p>
                <p className="text-xs text-gray-400">por sessão</p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-3">{m.bio}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {m.ods.map((o: number) => (
                <span key={o} className="text-xs px-1.5 py-0.5 bg-green-50 text-green-700 rounded font-medium">ODS {o}</span>
              ))}
              <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">{m.formato}</span>
              <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">📅 {m.disponibilidade}</span>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
              <button className="flex-1 py-2 bg-brand-600 text-white text-xs font-semibold rounded-lg hover:bg-brand-700 transition-colors">
                Agendar sessão
              </button>
              <button className="px-3 py-2 border border-gray-200 text-xs text-gray-600 rounded-lg hover:bg-gray-50">
                Ver perfil
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA tornar-se mentor */}
      <div className="card p-8 text-center border-dashed border-2 border-brand-200">
        <div className="text-3xl mb-3">🤝</div>
        <h2 className="text-lg font-bold text-gray-900 mb-2">Você é especialista em impacto social?</h2>
        <p className="text-sm text-gray-500 mb-5 max-w-md mx-auto">
          Cadastre-se como mentor e ajude ONGs a evoluir. Você define seu valor, horários e especialidades.
          Recebe 85% do valor de cada sessão.
        </p>
        <button className="px-6 py-3 bg-brand-600 text-white font-semibold text-sm rounded-lg hover:bg-brand-700 transition-colors">
          Quero ser mentor →
        </button>
      </div>
    </div>
  );
}

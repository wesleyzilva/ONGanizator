import clsx from 'clsx';

const STATUS_MAP: Record<string, { label: string; cls: string }> = {
  ativo:         { label: 'Ativo',         cls: 'bg-green-100 text-green-700' },
  em_avaliacao:  { label: 'Em avaliação',  cls: 'bg-yellow-100 text-yellow-700' },
  rascunho:      { label: 'Rascunho',      cls: 'bg-gray-100 text-gray-500' },
  pausado:       { label: 'Pausado',       cls: 'bg-orange-100 text-orange-700' },
  encerrado:     { label: 'Encerrado',     cls: 'bg-red-100 text-red-600' },
  aprovado:      { label: 'Aprovado',      cls: 'bg-green-100 text-green-700' },
  pendente:      { label: 'Pendente',      cls: 'bg-yellow-100 text-yellow-700' },
  reprovado:     { label: 'Reprovado',     cls: 'bg-red-100 text-red-600' },
  referencia:    { label: 'Referência',    cls: 'bg-purple-100 text-purple-700' },
  consolidado:   { label: 'Consolidado',   cls: 'bg-blue-100 text-blue-700' },
  em_desenvolvimento: { label: 'Em desenvolvimento', cls: 'bg-indigo-100 text-indigo-700' },
  iniciante:     { label: 'Iniciante',     cls: 'bg-gray-100 text-gray-500' },
};

export function StatusBadge({ status }: { status: string }) {
  const s = STATUS_MAP[status] ?? { label: status, cls: 'bg-gray-100 text-gray-500' };
  return <span className={clsx('badge', s.cls)}>{s.label}</span>;
}

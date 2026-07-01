import { PROJECTS } from '@/lib/mockData';
import RelatorioForm from './RelatorioForm';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export default async function RelatorioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <RelatorioForm projetoId={id} />;
}
 

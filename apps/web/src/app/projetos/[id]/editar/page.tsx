import { PROJECTS } from '@/lib/mockData';
import EditarProjetoForm from './EditarProjetoForm';

export function generateStaticParams() {
  return [...PROJECTS.map((p) => ({ id: p.id })), { id: 'novo' }];
}

export default async function EditarProjetoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EditarProjetoForm id={id} />;
}
 

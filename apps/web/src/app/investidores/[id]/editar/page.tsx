import { INVESTORS } from '@/lib/mockData';
import EditarInvestidorForm from './EditarInvestidorForm';

export function generateStaticParams() {
  return [...INVESTORS.map((i) => ({ id: i.id })), { id: 'novo' }];
}

export default async function EditarInvestidorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EditarInvestidorForm id={id} />;
}

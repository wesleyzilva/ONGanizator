import { ORGS } from '@/lib/mockData';
import EditarOrgForm from './EditarOrgForm';

export function generateStaticParams() {
  return [...ORGS.map((o) => ({ id: o.id })), { id: 'nova' }];
}

export default async function EditarOrgPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <EditarOrgForm id={id} />;
}

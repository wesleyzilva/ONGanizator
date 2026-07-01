import clsx from 'clsx';

interface Props {
  title: string;
  value: string | number;
  sub?: string;
  color?: 'green' | 'blue' | 'amber' | 'violet';
  icon?: string;
}

const colorMap = {
  green: 'bg-green-50 text-green-700',
  blue: 'bg-blue-50 text-blue-700',
  amber: 'bg-amber-50 text-amber-700',
  violet: 'bg-violet-50 text-violet-700',
};

export function KpiCard({ title, value, sub, color = 'green', icon }: Props) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        {icon && (
          <span className={clsx('w-9 h-9 rounded-lg flex items-center justify-center text-lg', colorMap[color])}>
            {icon}
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      {sub && <p className="text-xs text-gray-400">{sub}</p>}
    </div>
  );
}

import { Badge } from '@/components/ui/badge';

export default function JobTagBadge({ children }: React.PropsWithChildren) {
  return (
    <li>
      <Badge variant="outline" className="bg-accent text-accent-foreground font-normal">
        {children}
      </Badge>
    </li>
  );
}

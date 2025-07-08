import { getBranches } from '@/lib/content';
import BranchesClient from '@/components/BranchesClient';

export default async function BranchesPage() {
  const branches = await getBranches('bg');

  return (
    <BranchesClient branches={branches} />
  );
}

import { getBranches } from '@/lib/content';
import BranchesClient from '@/components/BranchesClient';

export default async function BranchesPage() {
  const branchesBg = await getBranches('bg');
  const branchesEn = await getBranches('en');

  return (
    <BranchesClient branchesBg={branchesBg} branchesEn={branchesEn} />
  );
}

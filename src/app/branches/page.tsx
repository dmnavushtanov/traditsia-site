import { getBranches } from '@/lib/content';
import BranchesClient from '@/components/BranchesClient';
import { Language } from '@/lib/translations';

export default async function BranchesPage({ params: { lang } }: { params: { lang: Language } }) {
  const branches = await getBranches(lang);

  return (
    <BranchesClient branches={branches} />
  );
}

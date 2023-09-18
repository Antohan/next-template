import { useTranslations } from 'next-intl';

import Dialog from './features/components/Dialog';

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <div className="h-screen w-full">
      <Dialog>{t('title')}</Dialog>
    </div>
  );
}

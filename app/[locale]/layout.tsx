import { notFound } from 'next/navigation';
import { createTranslator, useLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
    params: {
        locale: string;
    };
}>;

export async function generateStaticParams() {
    return ['ru', 'en'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
    const messages = await getMessages(locale);
    const t = createTranslator({ locale, messages });

    return {
        title: t('LocaleLayout.title'),
    };
}

export default function LocaleLayout({ children, params }: Props) {
    const locale = useLocale();

    // Validate that the incoming `locale` parameter is a valid locale
    if (params.locale !== locale) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body className="flex min-h-screen flex-col bg-stone-900 text-slate-400 antialiased">{children}</body>
        </html>
    );
}

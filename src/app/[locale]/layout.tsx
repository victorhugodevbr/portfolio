import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

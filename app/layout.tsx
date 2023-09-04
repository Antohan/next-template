import { PropsWithChildren, StrictMode } from 'react';

import './globals.css';

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <>
      <StrictMode>{children}</StrictMode>
    </>
  );
}

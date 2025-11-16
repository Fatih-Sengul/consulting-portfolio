import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'Fatih Şengül - SAP ABAP Consultant, Full-Stack Engineer & AI Researcher',
  description: 'Portfolio of Fatih Şengül: SAP ABAP Consultant, Full-Stack Java Developer, and AI Researcher. Intel oneAPI Ambassador and IBM Z Ambassador.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

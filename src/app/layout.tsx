import '../style/tailwind.css';

export const metadata = {
  title: '@fiqryq - Next Starter',
  description: 'starter nextjs'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

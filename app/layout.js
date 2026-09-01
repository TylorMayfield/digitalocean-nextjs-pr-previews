export const metadata = {
  title: "Next.js pull request preview starter",
  description: "A minimal, safe App Platform preview-deployment starter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

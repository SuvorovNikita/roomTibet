import "./styles/index.scss";

export const metadata = {
  title: "РумТибет",
  description: "Прогулки в горах",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="shortcut icon" href="logo.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

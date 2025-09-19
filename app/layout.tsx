import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./components/provider";
import "./globals.css";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gustavo Bruno | devBruno",
  description: "bem vindo ao meu portfólio, sinta-se à vontade para explorar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

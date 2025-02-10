import "./globals.css";
import QueryProvider from "@/context/tanstak";
import NextTopLoader from "nextjs-toploader";
import { Geist, Geist_Mono } from "next/font/google";
import { IsSmallDeviceProvider } from "@/context/isSmallDevise";
import { SelectedOptionProvider } from "@/context/selectedOption";
import { SearchProvider } from "@/context/useSearch";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <NextTopLoader showSpinner={false} />
          <SearchProvider>
            <SelectedOptionProvider>
              <IsSmallDeviceProvider>{children}</IsSmallDeviceProvider>
            </SelectedOptionProvider>
          </SearchProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

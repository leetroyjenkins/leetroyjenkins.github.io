import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Troy Ascher - Data Engineer | Snowflake, dbt, Python",
  description: "Data engineer building reliable pipelines with Snowflake, dbt, and Python. Former HRIS analyst who spent five years in China, came back with a CIS degree, and now builds data infrastructure that doesn't break at 2am.",
  metadataBase: new URL("https://leetroyjenkins.github.io"),
  openGraph: {
    title: "Troy Ascher - Data Engineer | Snowflake, dbt, Python",
    description: "Data engineer building reliable pipelines with Snowflake, dbt, and Python. Former HRIS analyst who spent five years in China, came back with a CIS degree, and now builds data infrastructure that doesn't break at 2am.",
    url: "https://leetroyjenkins.github.io",
    siteName: "Troy Ascher",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-card.png",
        width: 1200,
        height: 630,
        alt: "Troy Ascher - Data Engineer",
      },
      {
        url: "/images/hotpot.jpg",
        width: 1200,
        height: 630,
        alt: "Troy Ascher - Data Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Troy Ascher - Data Engineer | Snowflake, dbt, Python",
    description: "Data engineer building reliable pipelines with Snowflake, dbt, and Python. Former HRIS analyst who spent five years in China, came back with a CS degree, and now builds data infrastructure that doesn't break at 2am.",
    images: ["/images/hotpot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

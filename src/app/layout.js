import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "POPCORN Movies Platform",
  description: "A dynamic movie platform built with Next.js for browsing and discovering movies.",
  author: "Youssef Hamed",
  date: "March 2024",
  technologies: ["Next.js", "React", "CSS", "tailwindcss"],
  repository: "https://github.com/yousiefhamed/popcorn-movies.get",
  liveDemo: "https://popcorn-hamed.vercel.app",
  screenshots: [""],
  features: ["Browse curated collection of movies", "Search movies by title", "View movie details"],
  learningHighlights: ["Proficiency in Next.js fundamentals", "Understanding client-side routing", "Implementing responsive design"],
  futureImprovements: ["Implement user authentication for personalized recommendations", "Add feature for saving favorite movies", "Enhance search functionality"],
  deployment: {
    platform: "Vercel",
    url: "https://popcorn-hamed.vercel.app"
  },
  accessibility: "Compliance with web accessibility standards",
  performanceOptimization: "Optimized performance through code splitting and lazy loading"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

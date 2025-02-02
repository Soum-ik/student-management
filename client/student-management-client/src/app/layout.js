import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { ActiveProvider } from "@/context/ActiveProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Student Management",
  description: "A Website for maintaining information about students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveProvider>
          <Header />
          <div className="lg:flex gap-10">
            <SideBar />
            <main className="flex-1 mt-5 md:px-8 px-4">{children}</main>
          </div>
        </ActiveProvider>
      </body>
    </html>
  );
}

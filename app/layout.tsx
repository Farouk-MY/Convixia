import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css'
import 'react-datepicker/dist/react-datepicker.css';

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Convixa",
  description: "Convixa its a nextjs web app like zoom to be able to make video/voice meetings ",
  icons:{
    icon:'/icons/Convixa.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        layout:{
          logoImageUrl:'/icons/Convixa.png',
          socialButtonsVariant:'iconButton'          
        },
        variables:{
          colorText:'#fff',
          colorPrimary:'#0E78F9',
          colorBackground:'#1c1f2e',
          colorInputBackground:"#252a41",
          colorInputText:"#fff"
        }
      }}>
        <body
          className={`${inter.className} bg-dark-2`}
        >
          {children}
          <Toaster  />
        </body>
      </ClerkProvider>
    </html>
  );
}

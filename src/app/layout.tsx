import { Poppins, Dancing_Script, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight:['400', '500', '700'] }); 
const roboto = Roboto ({ subsets:["latin"], weight:['400', '500', '700'] });
const dancing = Dancing_Script({ subsets:["latin"], weight:['400', '500','700']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const combinedClassName = `${poppins.className} ${roboto.className} ${dancing.className}`; 
  
  return (
    <html lang="pt-br">
      <body className={combinedClassName}>{children}</body>
    </html>
  );
}

import Navbar from "components/navbar"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head />
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  )
}


import WithSubnavigation from "./(component)/nav/nav";
import ChakraWrapper from "@/app/(component)/chakraWrapper";
import LargeWithLogoCentered from "./(component)/footer/footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraWrapper><WithSubnavigation/>{children}<LargeWithLogoCentered/></ChakraWrapper>
      </body>
    </html>
  );
}

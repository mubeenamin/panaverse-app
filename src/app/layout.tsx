
import WithSubnavigation from "./nav/nav";
import ChakraWrapper from "@/component/chakraWrapper";
import LargeWithLogoCentered from "./footer/footer";
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

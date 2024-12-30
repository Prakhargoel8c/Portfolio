export const metadata = {
  title: "Portfolio Home Page",
  description: "Portfolio Home Page",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SkipLink } from "./skip-link";

type AppShellProps = {
  children: React.ReactNode;
};

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <SkipLink />
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="app-layout flex grow flex-col pb-10 focus:outline-none"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

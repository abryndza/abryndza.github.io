import { TagList } from "../components";

interface ListingLayoutProps {
  children: React.ReactNode;
}

export function ListingLayout({ children }: ListingLayoutProps) {
  return (
    <div className="flex flex-col items-center pt-15 laptop:pt-20">
      <section className="grid w-full max-w-7xl grid-cols-1 gap-4 tablet:grid-cols-2 tablet:gap-6 monitor:grid-cols-3 laptop:gap-7 monitor:gap-9">
        <div className="col-span-full flex flex-col items-center mb-4 tablet:mb-7 gap-10 tablet:gap-20">
          <h1 className="text-2xl tablet:text-3xl laptop:text-5xl font-extrabold">
            Przeglądaj wpisy
          </h1>
          <TagList />
        </div>
        {children}
      </section>
    </div>
  );
}

import { TagList } from "../components";

interface ListingLayoutProps {
  children: React.ReactNode;
}

export function ListingLayout({ children }: ListingLayoutProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-350 grid grid-cols-[repeat(auto-fill,minmax(320px,400px))] justify-center gap-8 md:gap-6 lg:gap-7 xl:gap-9">
        <div className="col-span-full flex flex-col items-center mb-7">
          <h2 className="text-5xl font-extrabold">Przeglądaj wpisy</h2>
          <TagList />
        </div>
        {children}
      </div>
    </div>
  );
}

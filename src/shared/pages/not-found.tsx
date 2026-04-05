import { ButtonLink } from "@/shared/components/ui";

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center grow text-center">
      <h2 className="dark:text-zinc-500 text-zinc-600 text-8xl laptop:text-[10rem] font-bold mb-6 laptop:mb-10">
        404
      </h2>
      <h1 className="text-2xl laptop:text-4xl font-semibold mb-6 laptop:mb-8 text-foreground">
        Strona nie znaleziona
      </h1>
      <ButtonLink href="/">Wróć na stronę główną</ButtonLink>
    </div>
  );
}

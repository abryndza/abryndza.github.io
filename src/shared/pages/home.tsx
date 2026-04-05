import { urls } from "@/features/blog/urls";
import { ButtonLink } from "@/shared/components/ui";

export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center grow text-center">
      <h1 className="text-3xl tablet:text-4xl laptop:text-6xl font-bold mb-8 laptop:mb-15 text-foreground">
        Hello, world!
      </h1>
      <ButtonLink href={urls.main()} className="desktop:text-xl">
        Zobacz bloga
      </ButtonLink>
    </div>
  );
}

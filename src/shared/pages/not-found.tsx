import Link from "next/link";

export function NotFoundPage() {
	return (
		<div className="flex grow flex-col items-center justify-center py-20 text-center">
			<h1>
				<span className="block text-8xl font-bold text-accent">404</span>
				<span className="mt-4 block text-2xl font-semibold tablet:text-3xl">
					Strona nie znaleziona
				</span>
			</h1>

			<Link
				href="/"
				className="dashed-link mt-8 inline-block underline-offset-8 hover:text-accent"
			>
				Wróć na stronę główną
			</Link>
		</div>
	);
}

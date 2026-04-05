export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full h-full items-center justify-center py-10">
      <span className="text-center text-sm text-gray-500">
        © {year} Adam Bryndza
      </span>
    </footer>
  );
};

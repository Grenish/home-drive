export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      {children}
      <div className="absolute w-full bottom-5 grid place-items-center">
        <h2 className="text-xs text-muted-foreground w-xl text-center">
          Home Drive never stores user credentials or file data outside the
          operator’s chosen infrastructure, except when an external storage
          provider is explicitly configured.
        </h2>
      </div>
    </div>
  );
}

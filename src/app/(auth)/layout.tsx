export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex">
      <main className="flex justify-center w-full xl:w-[45%] border-r py-5">
        <div className="flex flex-col justify-between items-center h-full w-3/4">{children}</div>
      </main>

      <section className="flex-1 hidden xl:block"></section>
    </div>
  );
}

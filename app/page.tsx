import { APP_NAME } from "@/constants";

export default function PublicHomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <span>{APP_NAME}</span>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="grid justify-items-center">
          <h1>Welcome to the Flerken Stash!</h1>
          <p>Where cosmic chaos meets perfect organization.</p>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

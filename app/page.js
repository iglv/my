export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-Roboto-Mono font-bold text-center text-lg mb-8">MicroSaaS Creator</h1>

      <section className="flex flex-col gap-4 w-full max-w-md">
        <a
          href="/copy-markdown"
          className="rounded-lg border-2 border-cyan-500 hover:border-cyan-600 hover:bg-blue-100 p-3 text-center font-Roboto-Mono"
        >
          Copy To Markdown
        </a>
      </section>
    </main>
  );
}

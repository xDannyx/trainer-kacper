export default function AboutMe() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li><s>Strona główna.</s></li>
          <li><b>O mnie.</b></li>
          <li><s>Prowadzenie online.</s></li>
          <li><s>Plany treningowe i diety.</s></li>
          <li><s>Kontakt.</s></li>
        </ol>
      </main>
    </div>
  );
}

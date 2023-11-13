import fs from "fs/promises";

export default async function Home() {
  const foldersInExamples = await fs.readdir("./src/app/examples");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">RSC Examples</h1>
        <ul>
          {foldersInExamples
            .sort((a, b) =>
              a.localeCompare(b, "en-US", {
                numeric: true,
              }),
            )
            .map((folder) => (
              <li key={folder}>
                <a
                  href={`/examples/${folder}`}
                  target="_blank"
                  className="flex items-center justify-center hover:text-zinc-500"
                >
                  {folder}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}

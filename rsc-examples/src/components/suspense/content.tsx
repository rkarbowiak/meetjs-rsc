import { getContent } from "../../../db/db";

export default async function Content() {
  const content = await getContent();
  return (
    <main className="p-6 overflow-scroll-y">
      {content.map((c) => (
        <article
          key={c.id}
          className="max-w-4xl mx-auto mb-8 bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <img src={c.image} alt="image" className="w-full h-32 object-cover" />
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">{c.title}</h1>
            <p className="text-gray-700">{c.description}</p>
          </div>
        </article>
      ))}
    </main>
  );
}

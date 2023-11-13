import { getRecommendations } from "../../../db/db";

export default async function Recommended() {
  const content = await getRecommendations();
  return (
    <section className="py-4 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
      <div className="flex overflow-x-auto gap-4">
        {content.map((c) => (
          <article
            key={c.id}
            className="flex-none w-60 bg-white shadow-md rounded-lg p-4"
          >
            <img
              src={c.image}
              alt="image"
              className="w-full h-20 object-cover rounded"
            />
            <h1 className="text-base font-semibold mt-2 text-zinc-900">
              {c.title}
            </h1>
            <p className="text-gray-600 text-sm">{c.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

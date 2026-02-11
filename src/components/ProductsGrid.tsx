import heroImage from "../assets/hero.jpg";

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  name: `Sport Sneaker ${i + 1}`,
  price: (89 + i * 10).toFixed(2),
  image: heroImage,
}));

export default function ProductsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <article key={p.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
            <img src={p.image} alt={p.name} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-medium mb-1">{p.name}</h3>
              <div className="flex items-center justify-between">
                <span className="font-semibold">${p.price}</span>
                <button className="text-sm text-white bg-primary px-3 py-1 rounded">Add</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

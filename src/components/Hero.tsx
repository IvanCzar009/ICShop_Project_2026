import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <header className="relative w-full">
      {/* Promo band */}
      <div className="w-full bg-purple-700 text-white text-center text-sm py-2">
        Gifts For Mom, Just In Time. Order By 5/5 For Guaranteed Delivery By 5/14.
      </div>

      {/* Hero */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm uppercase tracking-wider text-muted mb-3">New Arrivals</p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
                Meet The Perfect
                <span className="block text-primary">Travel Shoes</span>
              </h1>

              <p className="mt-4 text-base text-gray-600 dark:text-gray-300 max-w-xl">
                Super packable. Versatile. And all-day (and night) adventure ready.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-white border border-gray-200 py-3 px-6 rounded shadow-sm font-semibold hover:bg-gray-50">
                  Shop Men
                </button>
                <button className="bg-white border border-gray-200 py-3 px-6 rounded shadow-sm font-semibold hover:bg-gray-50">
                  Shop Women
                </button>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-full max-w-md lg:max-w-xl rounded-xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Product preview" className="w-full h-80 object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </header>
  );
}

import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            ELEVATE
            <span className="block text-primary">YOUR STYLE</span>
          </h1>

          <p className="text-base md:text-lg text-muted dark:text-gray-300 mb-6">
            Performance meets streetwear — modern silhouettes built for movement.
          </p>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:opacity-95 transition">
              Shop Now
            </button>
            <button className="border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-800">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary opacity-10 rounded-xl" />
            <img
              src={heroImage}
              alt="Fashion Hero"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

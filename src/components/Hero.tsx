import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            ELEVATE <br /> YOUR STYLE
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Performance meets streetwear. Built for movement.
          </p>

          <button className="bg-primary text-white px-8 py-4 font-semibold hover:opacity-90 transition">
            Shop Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImage}
            alt="Fashion Hero"
            className="rounded-xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

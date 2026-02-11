import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 md:px-8 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Placeholder about text. This section describes the person, background,
        and interests. Replace with your own content.
      </p>
    </motion.main>
  );
}

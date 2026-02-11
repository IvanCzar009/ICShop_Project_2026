import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 md:px-8 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience</h2>
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <article>
          <h3 className="font-semibold">Software Engineer / AI Specialist</h3>
          <p className="text-sm text-muted">Current Role — Placeholder</p>
          <p className="mt-2">Brief summary of responsibilities and achievements.</p>
        </article>

        <article>
          <h3 className="font-semibold">Customer Service Representative</h3>
          <p className="text-sm text-muted">Previous Role — Placeholder</p>
          <p className="mt-2">Brief summary of responsibilities and achievements.</p>
        </article>
      </div>
    </motion.main>
  );
}

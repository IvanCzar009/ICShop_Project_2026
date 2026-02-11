import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Machine Learning",
];

export default function Skills() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 md:px-8 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills & Expertise</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((s) => (
          <div key={s} className="p-4 bg-white dark:bg-gray-900 rounded shadow-sm">
            {s}
          </div>
        ))}
      </div>
    </motion.main>
  );
}

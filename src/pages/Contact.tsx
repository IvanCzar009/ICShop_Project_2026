import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 md:px-8 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Placeholder contact information. Replace with email, links, or a contact form.
      </p>

      <a
        href="mailto:you@example.com"
        className="inline-block bg-primary text-white px-5 py-3 rounded-md"
      >
        Email Me
      </a>
    </motion.main>
  );
}

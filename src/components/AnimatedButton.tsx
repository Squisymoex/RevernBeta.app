import { motion } from "framer-motion";

export default function AnimatedButton({ onClick, children }: { onClick: () => void; children: React.ReactNode; }) {
  const variants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.button
      variants={variants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

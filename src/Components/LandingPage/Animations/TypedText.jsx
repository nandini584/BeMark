import { motion } from "framer-motion";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function TypedText({
  text,
  el: Wrapper = "p",
  className
}) {
  return (
    <Wrapper className={className}>
      <motion.span 
      initial={{color:"white"}}
      animate={{color:"white"}}
      className="sr-only">{text}</motion.span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, staggerChildren: 0.25 }}
        aria-hidden
      >
        {text.split("").map((char, i) => (
          <motion.span key={i} className="inline-block" variants={defaultAnimations}>{char}</motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

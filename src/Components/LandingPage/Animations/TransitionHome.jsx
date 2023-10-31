import { motion } from 'framer-motion';

const TransitionHome = (Component) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Component />
    </motion.div>
  );
};

export default TransitionHome;

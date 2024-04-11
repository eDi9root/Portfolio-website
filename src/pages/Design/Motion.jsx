import React from 'react'
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 3 } };

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible
};

function Motion(props) {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: "-50%" },
          visible
        }}
      >
        {props.name}
      </motion.div>
      <motion.div variants={itemVariants}>
        {props.item}
      </motion.div>
    </motion.article>
  )
}

export default Motion

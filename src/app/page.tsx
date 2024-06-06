"use client";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
      initial={{ y: "100vh" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2.5 }}
      className="m-auto flex min-h-screen max-w-screen-2xl flex-col items-center p-6"
    >
      <h1 className="text-8xl font-bold">Hey, my name is Pedro</h1>
    </motion.main>
  );
};

export default Home;

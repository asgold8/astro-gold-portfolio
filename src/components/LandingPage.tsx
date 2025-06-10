import * as motion from "motion/react-client";
import { useState } from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const rightToLeftVariant = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
};

const downToUpVariant = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
};

const imgHideVariant = {
  visible: { opacity: 1 },
  spring: { opacity: 1, transition: { type: "spring", stiffness: 60 } },
  hidden: {
    opacity: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const LandingPage = () => {
  const [hideClosed, setHideClosed] = useState(false);
  const [hideOpen, setHideOpen] = useState(false);
  const [downToUpComplete, setDownToUpComplete] = useState(false);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <motion.div variants={rightToLeftVariant} style={{ display: "flex" }}>
        <h1 className="pr-4">🧑‍🚀 Hello!</h1>
        <motion.div
          variants={imgHideVariant}
          initial="visible"
          animate={hideClosed ? "hidden" : "spring"}
          onAnimationComplete={() => setHideClosed(true)}
          className="flex items-center justify-center"
        >
          <img
            src={"/closed-point.svg"}
            alt="Closed Point"
            className="w-16 h-16"
          />
        </motion.div>
      </motion.div>
      <motion.div
        variants={downToUpVariant}
        onAnimationComplete={() => setDownToUpComplete(true)}
      >
        <p>
          Welcome to my website! This was built using{" "}
          <a href="https://astro.build/">Astro</a>.
        </p>
        <p>
          I am a software engineer that's always looking to learn new things and
          build cool projects. You can find my projects on the{" "}
          <a href="/projects">projects page</a>.
        </p>
        <motion.img
          src={"/open-point.svg"}
          alt="Open Point"
          className="w-10 h-10 absolute z-20"
          variants={imgHideVariant}
          initial="visible"
          animate={hideOpen && downToUpComplete ? "hidden" : "spring"}
          onAnimationComplete={() => setHideOpen(true)}
        />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;

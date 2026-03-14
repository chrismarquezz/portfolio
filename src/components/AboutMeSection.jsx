import { motion } from "framer-motion";
import { FaChessKnight } from "react-icons/fa";
import { IoBarbellSharp } from "react-icons/io5";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 bg-gray-50 dark:bg-slate-800"
    >
      <div className="flex items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto">
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <IoBarbellSharp
            size="100"
            className="text-gray-300 dark:text-gray-600"
          />
        </motion.div>

        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <p>
              I'm a senior at Villanova University studying Computer Science
              with a minor in Cybersecurity, graduating in May 2026. My journey
              in tech started with building Redstone circuits in Minecraft and
              evolved into designing full-stack applications that blend logic,
              creativity, and clean design.
            </p>
            <p>
              This past summer, I worked as a Software Engineering Intern at
              ClassLink, where I helped build a full-stack application from the
              ground up. I worked across the stack; creating React-based
              interfaces, developing backend services with Node.js, and
              leveraging AWS to deliver scalable, cloud-native solutions used by
              millions of users.
            </p>
            <p>
              In my own time, I've built personal projects like Stardewdle, a
              full-stack Wordle-style game played tens of thousands of times,
              and VoiceChess, an iOS app that lets users play chess entirely
              through voice commands. These projects reflect my passion for
              combining creativity, accessibility, and technical precision.
            </p>
            <p>
              Outside of coding, I'm passionate about fitness and chess, two
              pursuits that constantly challenge me to think strategically and
              push for continuous improvement.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <FaChessKnight
            size="100"
            className="text-gray-300 dark:text-gray-600"
          />
        </motion.div>
      </div>
    </section>
  );
}

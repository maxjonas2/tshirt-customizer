import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import CustomButton from "../components/CustomButton";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src='./threejs.png'
              alt='Logo'
              className='w-8 h-8 object-contain'
            />
          </motion.header>

          <motion.div {...headContainerAnimation}>
            <motion.h1
              className='uppercase head-text'
              {...slideAnimation("left")}
            >
              Let's <br className='xl:block hidden' /> do it!
            </motion.h1>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'
            >
              <p className='max-w-md font-normal text-gray-600 text-base'>
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool.
                <strong>Unleash your imagination </strong> and define your own
                style.
              </p>
              <CustomButton
                type='filled'
                title='Get Started'
                customClass='px-4 py-2.5 font-bold text-sm'
                onClick={() => (state.intro = false)}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;

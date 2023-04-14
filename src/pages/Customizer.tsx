import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import config from "../config/config";
import state from "../store";
import { download } from "../assets";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";

import { fadeAnimation, slideAnimation } from "../config/motion";

import {
  AIPicker,
  ColorPicker,
  FilePicker,
  CustomButton,
  Tab,
} from "../components";

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.section
            key='custom'
            className='absolute top-0 left-0 w-screen '
            {...slideAnimation("right")}
          >
            <div className='flex items-center min-h-screen z-10 '>
              <motion.div
                className='editortabs-container tabs'
                {...fadeAnimation}
              >
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} onClick={() => {}} />
                ))}
              </motion.div>
            </div>
            <motion.div className='absolute top-5 right-5 z-10'>
              <CustomButton
                title='Go Back'
                onClick={() => (state.intro = true)}
              />
            </motion.div>
            <motion.div
              className='filtertabs-container'
              {...slideAnimation("up")}
            >
              {FilterTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  isFilterTab={true}
                  isActiveTab={false}
                  onClick={() => {}}
                />
              ))}
            </motion.div>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;

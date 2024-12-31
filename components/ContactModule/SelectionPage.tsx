import React from 'react';
import CafeFaq from './CafeFaq';
import ContactDetails from './ContactDetails';
import { AnimatePresence,motion } from 'framer-motion';

type SelectionPageProps = {
  showMenu: boolean;
};

const SelectionPage: React.FC<SelectionPageProps> = ({ showMenu }) => {
  return (
    <div>
     <AnimatePresence>
        {showMenu && (
          <motion.div
            key="map-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CafeFaq/>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!showMenu && (
          <motion.div
            key="map-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContactDetails/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectionPage;

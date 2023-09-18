'use client';

import { PropsWithChildren } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

import Modal from '@/shared/components/Modal';

const Dialog = ({ children }: PropsWithChildren) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Modal
      trigger={
        <Modal.Button asChild>
          <button>{children}</button>
        </Modal.Button>
      }
    >
      <Modal.Content>
        <div className="px-10 py-6 rounded-[40px] bg-white shadow ">
          <Modal.Header>Test</Modal.Header>
          <button onClick={() => toggleOpen()}>show notification</button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute pt-10 pb-4 px-10 inset-x-0 bg-red-400 text-white y rounded-b-[40px] -mt-2 -z-10"
                initial={{ y: '-50%' }}
                animate={{ y: 0 }}
                exit={{ y: '-50%' }}
                transition={{ duration: 0.25 }}
              >
                notification
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default Dialog;

import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';

type Props = PropsWithChildren<{
  isOpen?: boolean;
  onOpenChange?(isOpen?: boolean): void;
  trigger?: ReactNode;
}>;

const Modal = ({ children, isOpen, onOpenChange, trigger }: Props) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      {trigger}
      {children}
    </Dialog.Root>
  );
};

const ModalContent = ({ children, ...props }: ComponentPropsWithoutRef<typeof Dialog.Content>) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-white/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
      <Dialog.Content
        className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 focus:outline-none data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms] z-10"
        {...props}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
};

const ModalHeader = ({ children }: PropsWithChildren) => {
  return (
    <header className="flex items-center justify-between">
      <Dialog.Title className="text-xl">{children}</Dialog.Title>
      <Dialog.Close className="text-gray-400 hover:text-gray-500">
        <Cross1Icon />
      </Dialog.Close>
    </header>
  );
};

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;

export default Modal;

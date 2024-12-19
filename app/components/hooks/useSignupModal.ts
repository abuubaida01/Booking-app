import {create} from 'zustand';

interface SignupModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useSignupModal = create<SignupModalState>((set) => ({
  isOpen: false,
  open: () => set({isOpen: true}),
  close: () => set({isOpen: false}),
}));


export default useSignupModal;
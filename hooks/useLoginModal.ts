import { create } from "zustand";

interface LoginModalSotre {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useLoginModal = create<LoginModalSotre>((set) => ({
    isOpen: false,
    onOpen : () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useLoginModal;
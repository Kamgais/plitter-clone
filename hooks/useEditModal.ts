import { create } from "zustand";

interface EditModalSotre {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


const useEditModal = create<EditModalSotre>((set) => ({
    isOpen: false,
    onOpen : () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useEditModal;
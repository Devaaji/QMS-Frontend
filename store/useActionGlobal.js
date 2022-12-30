import create from "zustand";

const useActionGlobal = create(
  (set) => {
    return {
      infoStatus: '',
      updateInfoStatus: (infoStatus) => set(() => ({ infoStatus: infoStatus })),
    };
  },
  { name: "accept" }
);

export default useActionGlobal;

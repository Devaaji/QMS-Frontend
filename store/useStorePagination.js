import create from 'zustand';

const useStorePagination = create(
  (set) => {
    return {
      pagePoint01: 1,
      setPagePoint01: (pagePoint01) =>
        set(() => ({ pagePoint01: pagePoint01 })),

      pagePoint02: 1,
      setPagePoint02: (pagePoint02) =>
        set(() => ({ pagePoint02: pagePoint02 })),

      pagePoint03: 1,
      setPagePoint03: (pagePoint03) =>
        set(() => ({ pagePoint03: pagePoint03 })),
    };
  },
  { name: 'pagination' }
);

export default useStorePagination;

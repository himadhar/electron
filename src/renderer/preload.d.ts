declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: {
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        delete: (key: string) => void;
        // any other methods you've defined...
      };
    };
  }
}

export {};

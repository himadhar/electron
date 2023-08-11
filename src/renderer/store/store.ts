// import Window  from './../preload';

// const window: Window = window

export const getFromStore = (key: string, defaultValue: any = null): any => {
  return window?.electron?.store?.get(key) ?? defaultValue;
};

export const deleteFromStore = (key: string) => {
  window?.electron?.store?.delete(key);
};

export const setToStore = async (key: string, value: any = null) => {
  window?.electron?.store?.set(key, value);
};

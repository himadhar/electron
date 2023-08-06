import { IListOfCodeSnippets } from "./store-interfaces";
import { ipcRenderer } from "electron";

export const setToStore = async (key: string, value: any = null) => {
  const res = await ipcRenderer.send("set", key, value);
  return res;
};

export const getFromStore = (key: string, defaultValue?: any): any => {
  return ipcRenderer.send("get", key ?? defaultValue);
};

export const deleteFromStore = (key: string) => {
  ipcRenderer.send("delete", key);
};

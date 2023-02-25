import { Links } from "./Links";
import { Routes } from "./Routes";

const encodeParameters = (parameters: any[]) =>
  parameters
    .map(p => JSON.stringify(p))
    .map(p => encodeURIComponent(p))
    .join("/");

export const createLinks = <T extends Routes>(routes: T, path = ""): Links<T> => {
  const result: any = {};
  for (let e of Object.entries(routes)) {
    const pathName = e[0] == "index" ? "" : e[0];
    const fullPath = path + "/" + pathName;
    if (e[1] instanceof Function) {
      result[e[0]] = (...r: any) => `#${fullPath}${r.length > 0 ? "/" + encodeParameters(r) : ""}`;
    } else if (e[1] instanceof Object) {
      result[e[0]] = createLinks(e[1] as any, fullPath);
    }
  }
  return result;
};

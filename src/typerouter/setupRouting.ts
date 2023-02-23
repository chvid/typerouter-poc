import { Links } from "./Links";
import { Mounted } from "./Mounted";
import { RouteFunction } from "./RouteFunction";
import { Routes } from "./Routes";

const linkTo = <T extends Mounted<RouteFunction>>(t: T): ((...r: Parameters<T>) => string) => {
  return (...r: Parameters<T>) =>
    "#" +
    t.path +
    (r.length > 0
      ? "/" +
        r
          .map((p: T) => JSON.stringify(p))
          .map((p: string) => encodeURIComponent(p))
          .join("/")
      : "");
};

export const setupRouting = <T extends Routes>(t: T): [Mounted<T>, Links<T>] => {
  const mountRoutes = (routes: T, path = ""): Mounted<T> => {
    const result: any = {};
    for (let e of Object.entries(routes)) {
      const pathName = e[0] == "index" ? "" : e[0];
      if (e[1] instanceof Function) {
        (e[1] as any).path = path + "/" + pathName;
        result[e[0]] = e[1];
      } else if (e[1] instanceof Object) {
        result[e[0]] = mountRoutes(e[1] as any, path + "/" + pathName);
      }
    }
    return result;
  };

  const mountedRoutes = mountRoutes(t);

  const createLinks = (routes: Mounted<T>): Links<T> => {
    const result: any = {};
    for (let e of Object.entries(routes)) {
      if (e[1] instanceof Function) {
        result[e[0]] = linkTo(e[1]);
      } else if (e[1] instanceof Object) {
        result[e[0]] = createLinks(e[1] as any);
      }
    }
    return result;
  };

  const links = createLinks(mountedRoutes);

  return [mountedRoutes, links];
};

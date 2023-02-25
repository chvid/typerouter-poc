import React, { useEffect, useState } from "react";

import { Location } from "./Location";

import { DefaultLoadingIndicator } from "./components/DefaultLoadingIndicator";
import { DefaultErrorPage } from "./components/DefaultErrorPage";
import { DefaultNotFoundPage } from "./components/DefaultNotFoundPage";
import { Routes } from "./Routes";
import { RouteFunction } from "./RouteFunction";

const filterPath = (path: string): string => (path.startsWith("/") ? path.substring(1) : path);

const findMatch = (routes: Routes, path: string[]): { route?: RouteFunction; parameters: string[] } => {
  if (path.length == 1 && path[0] == "" && routes["index"] instanceof Function) {
    return { route: routes["index"], parameters: [] };
  }
  const entry = routes[path[0]];
  if (entry instanceof Function) {
    return {
      route: entry,
      parameters: path
        .slice(1)
        .map(decodeURIComponent)
        .map(s => JSON.parse(s))
    };
  }
  if (entry instanceof Object) {
    return findMatch(entry, path.slice(1));
  }
  return { parameters: path.slice(1) };
};

export const TypeRouter: React.FC<{
  routes: Routes;
  errorPage?: React.FC<{ error: any }>;
  notFoundPage?: React.ComponentType;
  loadingIndicator?: React.ComponentType;
}> = ({ routes, errorPage = DefaultErrorPage, notFoundPage = DefaultNotFoundPage, loadingIndicator = DefaultLoadingIndicator }) => {
  const [hash, setHash] = useState(() => location.hash.substring(1));
  const [element, setElement] = useState<any>(undefined);
  const [overlay, setOverlay] = useState<any>(undefined);
  const invokeRoute = async (path: string) => {
    setOverlay(loadingIndicator);
    try {
      const { route, parameters } = findMatch(routes, filterPath(path).split("/"));
      if (route) {
        setElement(await (route as any)(...parameters));
      } else {
        setElement(notFoundPage);
      }
    } catch (error) {
      setElement(errorPage({ error }));
    } finally {
      setOverlay(undefined);
    }
  };
  useEffect(() => {
    invokeRoute(hash);
  }, []);
  useEffect(() => {
    const updateHash = async () => {
      setHash(location.hash.substring(1));
      await invokeRoute(location.hash.substring(1));
    };
    window.addEventListener("hashchange", updateHash);
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return (
    <Location.Provider value={hash}>
      {element}
      {overlay}
    </Location.Provider>
  );
};

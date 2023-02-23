import { RouteFunction } from "./RouteFunction";

export type Mounted<T> = T extends RouteFunction ? { path: string; (...args: Parameters<T>): ReturnType<T> } : { [P in keyof T]: Mounted<T[P]> };

import { RouteFunction } from "./RouteFunction";

export type Links<T> = T extends RouteFunction ? (...args: Parameters<T>) => string : { [P in keyof T]: Links<T[P]> };

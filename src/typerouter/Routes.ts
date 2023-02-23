import { RouteFunction } from "./RouteFunction";

export interface Routes {
  [name: string]: RouteFunction | Routes;
}

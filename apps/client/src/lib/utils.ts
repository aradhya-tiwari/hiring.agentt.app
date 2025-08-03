import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { AppType } from "@hire/workers"
import { hc } from "hono/client";
import { PUBLIC_BACKEND_URL } from "$env/static/public";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const hwc = hc<AppType>(PUBLIC_BACKEND_URL, {
	init: { credentials: "include" }
}).v1
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

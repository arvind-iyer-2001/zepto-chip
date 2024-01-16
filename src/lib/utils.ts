import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProfileDataType } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isProfileDataType(obj: any): obj is ProfileDataType {
  return 'avatarUrl' in obj && 'name' in obj;
}
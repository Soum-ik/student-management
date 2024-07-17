import { PrismaClient } from "@prisma/client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const prisma = new PrismaClient();


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



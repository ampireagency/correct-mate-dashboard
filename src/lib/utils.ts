import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {
  ChartBarIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import { AirVent, TestTubeIcon } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const features = [
  {
    name: "AI-Powered Assessments:",
    description:
      " Utilize cutting-edge AI to analyze student responses and provide actionable insights.",
    icon: AirVent,
  },
  {
    name: "Real-Time Performance Analytics:",
    description:
      " Monitor and evaluate student performance with real-time data and visual reports.",
    icon: ChartBarIcon,
  },
  {
    name: "Customizable Tests:",
    description:
      "Create tailored tests to suit your curriculum and address specific student needs.",
    icon: ExclamationCircleIcon,
  },
];
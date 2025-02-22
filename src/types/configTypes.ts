import { Routes } from "@/constants/routes";

export interface IOption {
  id: string;
  label: string;
  nextPage: string;
}

export interface IQuestion {
  pageTheme?: "dark" | "light";
  slug: Routes;
  title: (answerData?: Record<Routes, IOption>) => string;
  subtitle?: string;
  description?: string;
  options?: IOption[];
  backPath?: string;
  button?: {
    path: (answerData?: Record<Routes, IOption>) => string;
    text: string;
  };
}

export interface IConfig {
  questions: Record<Routes, IQuestion>;
}

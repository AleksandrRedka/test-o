import { Routes } from "@/constants/routes";

export interface IOption {
  id: string;
  label: string;
  nextPage: string;
}

export interface ITypographyData {
  style: string;
  className?: string;
  text: (answerData?: Record<Routes, IOption>) => string;
}

export interface ISelectData {
  options: IOption[];
}

export interface IButtonData {
  path: (answerData?: Record<Routes, IOption>) => string;
  text: string;
}

export interface IElements {
  Typography: ITypographyData;
  Select: ISelectData;
  Button: IButtonData;
}

export interface ITypographyElement {
  id: string;
  componentName: "Typography";
  data: ITypographyData;
}

export interface ISelectElement {
  id: string;
  componentName: "Select";
  data: ISelectData;
}

export interface IButtonElement {
  id: string;
  componentName: "Button";
  data: IButtonData;
}

export type ElementKey = keyof IElements; // "Typography" | "Select" | "Button"

export type IStructureElement = ITypographyElement | ISelectElement | IButtonElement;

export type Structure = IStructureElement[];

export interface IQuestion {
  pageTheme?: "dark" | "light";
  slug: Routes;
  structure: Structure;
  backPath?: string;
}

export interface IConfig {
  questions: Record<Routes, IQuestion>;
}

export const ROUTE = {
  GENDER: "gender",
  RELATION: "relation",

  SINGLE_PARENT: "single-parent",
  SINGLE_STATEMENT: "single-statement",
  SINGLE_OVERTHINK: "single-overthink",
  SINGLE_PRIORITIES: "priorities",
  SINGLE_CONTROL: "control",

  RELATION_PARENT: "relation-parent",
  RELATION_STATEMENT: "relation-statement",
  RELATION_PERSONALITY: "relation-personality",
  PARTNER_GENDER: "partner-gender",
  STATEMENT: "statement",
  RELATION_GOALS: "relation-goals",

  HOW_IT_WORK: "how-it-work",

  SEO: "seo",
} as const;

type ValueOf<T> = T[keyof T];

export type Routes = ValueOf<typeof ROUTE>;

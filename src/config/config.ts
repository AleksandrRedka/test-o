import { IConfig } from "@/types/configTypes";
import { ROUTE } from "@/constants/routes";

const config: IConfig = {
  questions: {
    [ROUTE.GENDER]: {
      slug: ROUTE.GENDER,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "Select your gender: ",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              {
                id: "1",
                label: "Female",
                nextPage: ROUTE.RELATION,
              },
              {
                id: "2",
                label: "Male",
                nextPage: ROUTE.RELATION,
              },
            ],
          },
        },
      ],
    },
    [ROUTE.RELATION]: {
      slug: ROUTE.RELATION,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "So we can get to know you better, tell us about your relationship status.",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              {
                id: "1",
                label: "Single",
                nextPage: ROUTE.SINGLE_PARENT,
              },
              {
                id: "2",
                label: "In a relationship",
                nextPage: ROUTE.RELATION_PARENT,
              },
            ],
          },
        },
      ],
      backPath: ROUTE.GENDER,
    },

    [ROUTE.SINGLE_PARENT]: {
      slug: ROUTE.SINGLE_PARENT,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "Are you a single parent?",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              {
                id: "1",
                label: "Yes",
                nextPage: ROUTE.SINGLE_STATEMENT,
              },
              {
                id: "2",
                label: "No",
                nextPage: ROUTE.SINGLE_STATEMENT,
              },
            ],
          },
        },
      ],
      backPath: ROUTE.RELATION,
    },

    [ROUTE.SINGLE_STATEMENT]: {
      slug: ROUTE.SINGLE_STATEMENT,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: (answerData) =>
              `Single ${answerData?.gender?.label || "Gender"} ${answerData?.["single-parent"].id === "1" ? "who have children" : ""} need a slightly different approach to improve their relationship. Which statement best describes you?`,
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              {
                id: "1",
                label: "I’m very unhappy with how things are going in my relationship",
                nextPage: ROUTE.SINGLE_OVERTHINK,
              },
              {
                id: "2",
                label:
                  "I’m unhappy with parts of my relationship, but some things are working well",
                nextPage: ROUTE.SINGLE_OVERTHINK,
              },
              {
                id: "3",
                label: "I’m generally happy in my relationship",
                nextPage: ROUTE.SINGLE_OVERTHINK,
              },
            ],
          },
        },
      ],
      backPath: ROUTE.SINGLE_PARENT,
    },

    [ROUTE.SINGLE_OVERTHINK]: {
      slug: ROUTE.SINGLE_OVERTHINK,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "Do you tend to overthink?",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              {
                id: "1",
                label: "Yes",
                nextPage: ROUTE.HOW_IT_WORK,
              },
              {
                id: "2",
                label: "No",
                nextPage: ROUTE.HOW_IT_WORK,
              },
            ],
          },
        },
      ],
      backPath: ROUTE.SINGLE_STATEMENT,
    },

    [ROUTE.HOW_IT_WORK]: {
      pageTheme: "dark",
      slug: ROUTE.HOW_IT_WORK,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "How it works",
          },
        },
        {
          id: "2",
          componentName: "Typography",
          data: {
            style: "description",
            text: () =>
              "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
          },
        },
        {
          id: "3",
          componentName: "Button",
          data: {
            text: "Next",
            path: (answerData) =>
              answerData?.["single-overthink"].id === "1"
                ? ROUTE.SINGLE_PRIORITIES
                : ROUTE.SINGLE_CONTROL,
          },
        },
      ],
      backPath: ROUTE.SINGLE_OVERTHINK,
    },

    [ROUTE.SINGLE_PRIORITIES]: {
      slug: ROUTE.SINGLE_PRIORITIES,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "What is most important to you?",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              { id: "1", label: "Success", nextPage: ROUTE.SEO },
              { id: "2", label: "Romance", nextPage: ROUTE.SEO },
              { id: "3", label: "Stability", nextPage: ROUTE.SEO },
              { id: "4", label: "Freedom", nextPage: ROUTE.SEO },
            ],
          },
        },
      ],
      backPath: ROUTE.HOW_IT_WORK,
    },

    [ROUTE.SINGLE_CONTROL]: {
      slug: ROUTE.SINGLE_CONTROL,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "Is emotional control tricky for you?",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              { id: "1", label: "Yes", nextPage: ROUTE.SEO },
              { id: "2", label: "Sometime", nextPage: ROUTE.SEO },
              { id: "3", label: "Rarely", nextPage: ROUTE.SEO },
              { id: "4", label: "Not at all", nextPage: ROUTE.SEO },
            ],
          },
        },
      ],
      backPath: ROUTE.HOW_IT_WORK,
    },

    // IN RELATION

    [ROUTE.RELATION_PARENT]: {
      slug: ROUTE.RELATION_PARENT,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "Are you a parent?",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              {
                id: "1",
                label: "Yes",
                nextPage: ROUTE.RELATION_STATEMENT,
              },
              {
                id: "2",
                label: "No",
                nextPage: ROUTE.RELATION_STATEMENT,
              },
            ],
          },
        },
      ],
      backPath: ROUTE.RELATION,
    },

    [ROUTE.RELATION_STATEMENT]: {
      slug: ROUTE.RELATION_STATEMENT,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: (answerData) =>
              `${answerData?.gender?.label || "Gender"} ${answerData?.["relation-parent"].id === "1" ? "who have children" : ""} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`,
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              {
                id: "1",
                label: "I was unhappy with how things were going in my relationship",
                nextPage: ROUTE.RELATION_PERSONALITY,
              },
              {
                id: "2",
                label: "I was unhappy with parts of my relationship, but some things were working",
                nextPage: ROUTE.RELATION_PERSONALITY,
              },
              {
                id: "3",
                label: "I was generally happy with my relationship",
                nextPage: ROUTE.RELATION_PERSONALITY,
              },
              {
                id: "4",
                label: "I’ve never been in a relationship",
                nextPage: ROUTE.RELATION_PERSONALITY,
              },
            ],
          },
        },
      ],
      backPath: ROUTE.RELATION_PARENT,
    },

    [ROUTE.RELATION_PERSONALITY]: {
      slug: ROUTE.RELATION_PERSONALITY,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "Are any of these factors currently affecting your relationship?",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              {
                id: "1",
                label: "Infidelity",
                nextPage: ROUTE.PARTNER_GENDER,
              },
              {
                id: "2",
                label: "Extrovert",
                nextPage: ROUTE.PARTNER_GENDER,
              },
              {
                id: "3",
                label: "A bit of both",
                nextPage: ROUTE.PARTNER_GENDER,
              },
            ],
          },
        },
      ],
      backPath: ROUTE.RELATION_STATEMENT,
    },

    [ROUTE.PARTNER_GENDER]: {
      slug: ROUTE.PARTNER_GENDER,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "What gender do you prefer for a partner?",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              {
                id: "1",
                label: "Male",
                nextPage: ROUTE.RELATION_GOALS,
              },
              {
                id: "2",
                label: "Female",
                nextPage: ROUTE.RELATION_GOALS,
              },
              {
                id: "3",
                label: "No preference",
                nextPage: ROUTE.RELATION_GOALS,
              },
            ],
          },
        },
      ],
      backPath: ROUTE.RELATION_PERSONALITY,
    },
    [ROUTE.STATEMENT]: {
      slug: ROUTE.STATEMENT,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "Do you agree with the statement below?",
          },
        },
        {
          id: "2",
          componentName: "Typography",
          data: {
            style: "subtitle",
            text: () => "This highlights the duality of your masculine and feminine energies.",
          },
        },
        {
          id: "3",
          componentName: "Select",
          data: {
            options: [
              { id: "1", label: "Strongly agree", nextPage: ROUTE.RELATION_GOALS },
              { id: "2", label: "Agree", nextPage: ROUTE.RELATION_GOALS },
              { id: "3", label: "Neutral", nextPage: ROUTE.RELATION_GOALS },
              { id: "4", label: "Disagree", nextPage: ROUTE.RELATION_GOALS },
              { id: "5", label: "Strongly disagree", nextPage: ROUTE.RELATION_GOALS },
            ],
          },
        },
      ],
      backPath: ROUTE.PARTNER_GENDER,
    },

    [ROUTE.RELATION_GOALS]: {
      slug: ROUTE.RELATION_GOALS,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "What are your long-term relationship goals?",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: [
              {
                id: "1",
                label: "Marriage",
                nextPage: ROUTE.SEO,
              },
              {
                id: "2",
                label: "Long-term commitment",
                nextPage: ROUTE.SEO,
              },
              {
                id: "3",
                label: "Short-term relationship",
                nextPage: ROUTE.SEO,
              },
            ],
          },
        },
      ],
      backPath: ROUTE.PARTNER_GENDER,
    },

    // SEO

    [ROUTE.SEO]: {
      slug: ROUTE.SEO,
      structure: [
        {
          id: "1",
          componentName: "Typography",
          data: {
            style: "title",
            text: () => "Where did you hear about us?",
          },
        },
        {
          id: "2",
          componentName: "Select",
          data: {
            options: Array.from({ length: 16 }, (_, i) => ({
              id: `${i + 1}`,
              label: [
                "Poster or Billboard",
                "Friend or Family",
                "Instagram",
                "Direct Mail or Package Insert",
                "Online TV or Streaming TV",
                "TV",
                "Radio",
                "Search Engine (Google, Bing, etc.)",
                "Newspaper or Magazine",
                "Facebook",
                "Blog Post or Website Review",
                "Podcast",
                "Influencer",
                "YouTube",
                "Pinterest",
                "Other",
              ][i],
              nextPage: "result",
            })),
          },
        },
      ],
      backPath: "back",
    },
  },
};

export default config;

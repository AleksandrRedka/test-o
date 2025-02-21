import { IConfig } from "@/types/configTypes";
import { ROUTE } from "@/constants/routes";

const config: IConfig = {
  questions: {
    [ROUTE.GENDER]: {
      slug: ROUTE.GENDER,
      title: () => "Select your gender: ",
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
    [ROUTE.RELATION]: {
      slug: ROUTE.RELATION,
      title: () => "So we can get to know you better, tell us about your relationship status.",
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
      backPath: ROUTE.GENDER,
    },

    // PARENT SINGLE
    [ROUTE.SINGLE_PARENT]: {
      slug: ROUTE.SINGLE_PARENT,
      title: () => "Are you a single parent?",
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
      backPath: ROUTE.RELATION,
    },

    [ROUTE.SINGLE_STATEMENT]: {
      slug: ROUTE.SINGLE_STATEMENT,
      title: (answerData) =>
        `Single ${answerData?.gender?.label || "Gender"} ${answerData?.["single-parent"].id === "1" ? "who have children" : ""} need a slightly different approach to improve their relationship. Which statement best describes you?`,
      options: [
        {
          id: "1",
          label: "I’m very unhappy with how things are going in my relationship",
          nextPage: ROUTE.SINGLE_OVERTHINK,
        },
        {
          id: "2",
          label: "I’m unhappy with parts of my relationship, but some things are working well",
          nextPage: ROUTE.SINGLE_OVERTHINK,
        },
        {
          id: "3",
          label: "I’m generally happy in my relationship",
          nextPage: ROUTE.SINGLE_OVERTHINK,
        },
      ],
      backPath: ROUTE.SINGLE_PARENT,
    },

    [ROUTE.SINGLE_OVERTHINK]: {
      slug: ROUTE.SINGLE_OVERTHINK,
      title: () => "Do you tend to overthink?",
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
      backPath: ROUTE.SINGLE_STATEMENT,
    },
    [ROUTE.HOW_IT_WORK]: {
      pageTheme: "dark",
      slug: ROUTE.HOW_IT_WORK,
      title: () => "Do you tend to overthink?",
      description: () =>
        "We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.",
      backPath: ROUTE.SINGLE_OVERTHINK,
      button: {
        path: (answerData) =>
          answerData?.["single-overthink"]?.id === "1"
            ? ROUTE.SINGLE_PRIORITIES
            : ROUTE.SINGLE_CONTROL,
        text: "Next",
      },
    },

    [ROUTE.SINGLE_PRIORITIES]: {
      slug: ROUTE.SINGLE_PRIORITIES,
      title: () => "What is most important to you?",
      options: [
        {
          id: "1",
          label: "Success",
          nextPage: ROUTE.SEO,
        },
        {
          id: "2",
          label: "Romance",
          nextPage: ROUTE.SEO,
        },
        {
          id: "3",
          label: "Stability",
          nextPage: ROUTE.SEO,
        },
        {
          id: "4",
          label: "Freedom",
          nextPage: ROUTE.SEO,
        },
      ],
      backPath: ROUTE.HOW_IT_WORK,
    },

    [ROUTE.SINGLE_CONTROL]: {
      slug: ROUTE.SINGLE_CONTROL,
      title: () => "Is emotional control tricky for you?",
      options: [
        {
          id: "1",
          label: "Yes",
          nextPage: ROUTE.SEO,
        },
        {
          id: "2",
          label: "Sometime",
          nextPage: ROUTE.SEO,
        },
        {
          id: "3",
          label: "Rarely",
          nextPage: ROUTE.SEO,
        },
        {
          id: "4",
          label: "Not at all",
          nextPage: ROUTE.SEO,
        },
      ],
      backPath: ROUTE.HOW_IT_WORK,
    },

    // IN RELATION

    [ROUTE.RELATION_PARENT]: {
      slug: ROUTE.RELATION_PARENT,
      title: () => "Are you a parent?",
      options: [
        {
          id: "1",
          label: "yes",
          nextPage: ROUTE.RELATION_STATEMENT,
        },
        {
          id: "2",
          label: "No",

          nextPage: ROUTE.RELATION_STATEMENT,
        },
      ],
      backPath: ROUTE.RELATION,
    },
    [ROUTE.RELATION_STATEMENT]: {
      slug: ROUTE.RELATION_STATEMENT,
      title: (answerData) =>
        `${answerData?.gender?.label || "Gender"} ${answerData?.["relation-parent"].id === "1" ? "who have children" : ""} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?`,
      options: [
        {
          id: "1",
          label: "I was unhappy with low things were going in my relationship",
          nextPage: ROUTE.RELATION_PERSONALITY,
        },
        {
          id: "2",
          label: "I was unhappy with parts of my relationship, but some thing were working",
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
      backPath: ROUTE.RELATION_PARENT,
    },
    [ROUTE.RELATION_PERSONALITY]: {
      slug: ROUTE.RELATION_PERSONALITY,
      title: () => "Are any of these factors currently affecting your relationship?",
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
      backPath: ROUTE.RELATION_STATEMENT,
    },

    [ROUTE.PARTNER_GENDER]: {
      slug: ROUTE.PARTNER_GENDER,
      title: () => "Are any of these factors currently affecting your relationship?",
      options: [
        {
          id: "1",
          label: "Male",
          nextPage: ROUTE.STATEMENT,
        },
        {
          id: "2",
          label: "Female",
          nextPage: ROUTE.STATEMENT,
        },
      ],
      backPath: ROUTE.RELATION_PERSONALITY,
    },
    [ROUTE.STATEMENT]: {
      slug: ROUTE.STATEMENT,
      title: () => "Do you agree with the statement below?",
      subtitle: () => "This highlights the duality of your masculine and feminine energies.",
      options: [
        {
          id: "1",
          label: "Strongly agree",
          nextPage: ROUTE.RELATION_GOALS,
        },
        {
          id: "2",
          label: "Agree",
          nextPage: ROUTE.RELATION_GOALS,
        },
        {
          id: "3",
          label: "Neutral",
          nextPage: ROUTE.RELATION_GOALS,
        },
        {
          id: "4",
          label: "Disagee",
          nextPage: ROUTE.RELATION_GOALS,
        },
        {
          id: "5",
          label: "Strongly disagree",
          nextPage: ROUTE.RELATION_GOALS,
        },
      ],
      backPath: ROUTE.PARTNER_GENDER,
    },
    [ROUTE.RELATION_GOALS]: {
      slug: ROUTE.RELATION_GOALS,
      title: () => "When you think about your relationship goals, you feel...?",
      options: [
        {
          id: "1",
          label: "Optimistic! They are totally doable, with some guidance.",
          nextPage: ROUTE.SEO,
        },
        {
          id: "2",
          label: "Cautious. I’ve struggled before, but I’m hopeful.",
          nextPage: ROUTE.SEO,
        },
        {
          id: "3",
          label: "I’m feeling a little anxious, honestly.",
          nextPage: ROUTE.SEO,
        },
      ],
      backPath: ROUTE.STATEMENT,
    },

    // SEO

    [ROUTE.SEO]: {
      slug: ROUTE.SEO,
      title: () => "Where did you hear about us?",
      options: [
        {
          id: "1",
          label: "Poster or Billboard",
          nextPage: "result",
        },
        {
          id: "2",
          label: "Friend or Family",
          nextPage: "result",
        },
        {
          id: "3",
          label: "Instagram",
          nextPage: "result",
        },
        {
          id: "4",
          label: "Direct Mail or Package Insert",
          nextPage: "result",
        },
        {
          id: "5",
          label: "Online TV or Streaming TV",
          nextPage: "result",
        },
        {
          id: "6",
          label: "TV",
          nextPage: "result",
        },
        {
          id: "7",
          label: "Radio",
          nextPage: "result",
        },
        {
          id: "8",
          label: "Search Engine (Google, Bing, etc.)",
          nextPage: "result",
        },
        {
          id: "9",
          label: "Newspaper or Magazine",
          nextPage: "result",
        },
        {
          id: "10",
          label: "Facebook",
          nextPage: "result",
        },
        {
          id: "11",
          label: "Blog Post or Website Review",
          nextPage: "result",
        },
        {
          id: "12",
          label: "Podcast",
          nextPage: "result",
        },
        {
          id: "13",
          label: "Influencer",
          nextPage: "result",
        },
        {
          id: "14",
          label: "Youtube",
          nextPage: "result",
        },
        {
          id: "15",
          label: "Pinterest",
          nextPage: "result",
        },
        {
          id: "16",
          label: "Other",
          nextPage: "result",
        },
      ],
      backPath: "back",
    },
  },
};

export default config;

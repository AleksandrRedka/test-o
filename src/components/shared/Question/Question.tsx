"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import config from "@/config/config";
import {
  ElementDataType,
  ElementKey,
  IButton,
  IButtonData,
  IElements,
  IOption,
  IQuestion,
  ISelectData,
  IStructureElement,
  ITypographyData,
} from "@/types/configTypes";
import {
  selectAnswer,
  selectAnswerField,
  updateAnswer,
} from "@/lib/store/features/answers/ansvers-slice";

import Typography from "@/components/shared/Typography/Typography";
import Select from "@/components/shared/Select/Select";
import Button from "@/components/shared/Button/Button";
import { ROUTE } from "@/constants/routes";

const typographyStyles: Record<string, string> = {
  title: "font-bold text-2xl",
  subtitle: "font-bold text-lg",
  description: "font-bold text-lg",
};

function Question({ slug }: { slug: IQuestion["slug"] }) {
  const { setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const { pageTheme, structure = [] } = config.questions?.[slug] ?? {};

  const dispatch = useDispatch();
  const answerData = useSelector(selectAnswer);
  const answerToQuestion = useSelector(selectAnswerField(slug));

  useEffect(() => {
    setTheme(pageTheme || "light");

    const isEmptyAnswer = !answerData || Object.keys(answerData).length === 0;
    const isEntryPage = ["/", `/${ROUTE.GENDER}`].includes(pathname);

    if (isEmptyAnswer && !isEntryPage) {
      router.push(`/${ROUTE.GENDER}`); // Редірект на головну, якщо даних немає
    }
  }, []);

  const handlerClickButton = (data: IButtonData) => {
    const nextPage = data?.path(answerData);
    if (nextPage) router.push(nextPage);
  };

  const handlerChange = (option: IOption) => {
    dispatch(updateAnswer({ fieldName: slug, value: option }));
    if (option?.nextPage) router.push(`/${option.nextPage}`);
  };

  const components = {
    Typography: (props: ITypographyData) => (
      <Typography
        text={props?.text(answerData)}
        className={`${typographyStyles[props?.style]} ${props.className}`}
        {...(props as Omit<ITypographyData, "text">)}
      />
    ),
    Select: (props: ISelectData) => (
      <Select {...props} name={slug} currentValue={answerToQuestion} onChange={handlerChange} />
    ),
    Button: (props: IButtonData) => <Button {...props} onClick={() => handlerClickButton(props)} />,
  };

  return structure.map(({ id, componentName, data }) => {
    const Component = components[componentName];
    return Component ? <Component key={id} {...(data as any)} /> : null;
  });
}

export default Question;

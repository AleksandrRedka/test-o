"use client";

import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import config from "@/config/config";
import { IOption, IQuestion } from "@/types/configTypes";
import {
  selectAnswer,
  selectAnswerField,
  updateAnswer,
} from "@/lib/store/features/answers/ansvers-slice";

import Typography from "@/components/shared/Typography/Typography";
import Select from "@/components/shared/Select/Select";
import Button from "@/components/shared/Button/Button";
import { ROUTE } from "@/constants/routes";

function Question({ slug }: { slug: IQuestion["slug"] }) {
  const { setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const questionData = config.questions?.[slug] ?? {};
  const dispatch = useDispatch();
  const answerData = useSelector(selectAnswer);
  const answerDataBySlug = useSelector(selectAnswerField(slug));

  useEffect(() => {
    setTheme(questionData?.pageTheme || "light");
  });

  useEffect(() => {
    const hasData = !answerData || Object.keys(answerData).length === 0;
    const isEntryPage = ["/", `/${ROUTE.GENDER}`].includes(pathname);

    if (hasData && !isEntryPage) {
      router.push(`/${ROUTE.GENDER}`); // Редірект на головну, якщо даних немає
    }
  }, [answerData, router]);

  const questionTitle = questionData?.title && questionData?.title(answerData);
  const questionSubtitle = questionData?.subtitle && questionData?.subtitle(answerData);
  const questionDescription = questionData?.description && questionData?.description(answerData);
  const questionOptions = questionData?.options ?? [];
  const questionButton = questionData?.button;

  const handlerClickButton = () => {
    const nextPage = questionButton?.path(answerData);
    if (nextPage) router.push(nextPage);
  };

  const handlerChange = (option: IOption) => {
    dispatch(updateAnswer({ fieldName: slug, value: option }));
    if (option?.nextPage) router.push(`/${option.nextPage}`);
  };

  return (
    <>
      {questionTitle && <Typography text={questionTitle} className="font-bold text-2xl" />}
      {questionSubtitle && <Typography text={questionSubtitle} className="font-bold text-lg" />}
      {questionDescription && (
        <Typography text={questionDescription} className="font-bold text-lg" />
      )}
      <Select
        name={slug}
        options={questionOptions}
        currentValue={answerDataBySlug}
        onChange={handlerChange}
      />
      {questionButton && <Button onClick={handlerClickButton}> {questionButton.text} </Button>}
    </>
  );
}

export default Question;

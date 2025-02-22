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
  const { title, subtitle, description, options, button, pageTheme } =
    config.questions?.[slug] ?? {};
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

  const handlerClickButton = () => {
    const nextPage = button?.path(answerData);
    if (nextPage) router.push(nextPage);
  };

  const handlerChange = (option: IOption) => {
    dispatch(updateAnswer({ fieldName: slug, value: option }));
    if (option?.nextPage) router.push(`/${option.nextPage}`);
  };

  return (
    <>
      {title && <Typography text={title(answerData)} className="font-bold text-2xl" />}
      {subtitle && <Typography text={subtitle} className="font-bold text-lg" />}
      {description && <Typography text={description} className="font-bold text-lg" />}
      <Select
        name={slug}
        options={options}
        currentValue={answerToQuestion}
        onChange={handlerChange}
      />
      {button && <Button onClick={handlerClickButton}> {button?.text} </Button>}
    </>
  );
}

export default Question;

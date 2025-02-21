"use client";

import MainLayout from "@/components/layout/MainLayout";
import { useSelector } from "react-redux";
import { selectAnswer } from "@/lib/store/features/answers/ansvers-slice";
import { IOption } from "@/types/configTypes";
import { ReactNode } from "react";

export default function Home() {
  const answerData = useSelector(selectAnswer);
  const resultArr = Object.entries(answerData);
  const renderItem = ([field, answer]: [string, IOption]) => {
    return (
      <div key={field + answer.id} className=" p-4 border-gray-600 border-2 rounded-xl min-w-80">
        <div className="uppercase">{field} :</div>
        <div>{answer?.label}</div>
      </div>
    );
  };

  const renderList = (
    arr: [string, IOption][],
    callback: ([field, answer]: [string, IOption]) => ReactNode
  ) => arr.map(callback);
  return (
    <MainLayout>
      <h1 className="text-2xl"> Your Results </h1>
      {renderList(resultArr, renderItem)}
    </MainLayout>
  );
}

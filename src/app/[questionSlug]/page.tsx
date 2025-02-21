import config from "@/config/config";
import { IQuestion } from "@/types/configTypes";
import Question from "@/components/shared/Question/Question";
import MainLayout from "@/components/layout/MainLayout";

export async function generateStaticParams() {
  const questions = Object.values(config.questions);

  return questions.map((question: IQuestion) => ({
    questionSlug: question.slug,
  }));
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ questionSlug: IQuestion["slug"] }>;
}) {
  const { questionSlug } = await params;

  return (
    <MainLayout>
      <Question slug={questionSlug} />
    </MainLayout>
  );
}

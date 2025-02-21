import Question from "@/components/shared/Question/Question";
import MainLayout from "@/components/layout/MainLayout";
import { ROUTE } from "@/constants/routes";

export default function Home() {
  return (
    <MainLayout>
      <Question slug={ROUTE.GENDER} />
    </MainLayout>
  );
}

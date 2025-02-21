"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import config from "@/config/config";
import { IQuestion } from "@/types/configTypes";
import { ROUTE, Routes } from "@/constants/routes";
import { useTheme } from "next-themes";

function Header(): React.ReactElement {
  const router = useRouter();
  const params = useParams();
  const { theme } = useTheme();

  const slug: Routes = (params?.questionSlug as Routes) || ROUTE.GENDER;

  const currentTheme = theme || "light";
  const questionData: IQuestion | null = config.questions?.[slug] || null;
  const backPath: string | undefined = questionData?.backPath;

  const logoByTheme = currentTheme === "light" ? "logo.svg" : "logo_light.svg";
  const backByTheme = currentTheme === "light" ? "arrow_left.svg" : "arrow_left_light.svg";

  const handlerHandler = () => {
    if (backPath === "back") router.back();
    else if (backPath) router.push(`/${backPath}`);
  };

  return (
    <header>
      <nav className="mx-auto flex sm:max-w-7xl max-w-xs items-center justify-center py-4 relative">
        {backPath && (
          <button
            className="absolute flex items-center justify-center w-6 h-6 top-50 left-5"
            onClick={handlerHandler}
          >
            <Image src={backByTheme} alt="Back" width={10} height={16} />
          </button>
        )}

        <div className="flex">
          <Image src={logoByTheme} alt="Logo" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
}

export default Header;

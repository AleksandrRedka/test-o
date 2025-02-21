import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid justify-items-center pt-5 mb-10">
      <div className="grid justify-items-center w-80">
        <div className="flex flex-col gap-8 items-center justify-center min-w-full">{children}</div>
      </div>
    </main>
  );
}

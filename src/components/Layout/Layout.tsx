import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="pb-10">
      <main className="container mx-auto max-w-3xl">{children}</main>
    </div>
  );
}

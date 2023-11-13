import { Suspense } from "react";
import Content from "../../../components/suspense/content";
import Navigation from "../../../components/suspense/navigation";
import Recommended from "../../../components/suspense/recommended";

export default function Page() {
  return (
    <main>
      <Navigation />
      <Suspense fallback={<div>Loading content...</div>}>
        <Content />
      </Suspense>
      <Suspense fallback={<div>Loading recommended...</div>}>
        <Recommended />
      </Suspense>
    </main>
  );
}

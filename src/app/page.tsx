import FixedNavigation from "./components/fixed-navigation";
import Content from "./components/content";

export default function Home() {
  return (
    <main className="flex flex-row">
      <FixedNavigation />
      <div className="flex-1 hidden md:block" />
      <Content />
    </main>
  );
}

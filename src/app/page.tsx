import { Header } from "@/app/home/header";
import { OurPromise } from "@/app/home/our-promise";
import { ReadyToStart } from "@/app/home/ready-to-start";
import { RecentWorks } from "@/app/home/recent-works";
import { Services } from "@/app/home/services";

export default function Home() {
  return (
    <main>
      <Header />
      <OurPromise />
      <Services />
      <RecentWorks />
      <ReadyToStart />
    </main>
  );
}

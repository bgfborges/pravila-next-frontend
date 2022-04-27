import Head from "next/head";
import Banner from "../../components/Banner";
import Faq from "../../components/Faq";
import GroupsStudy from "../../components/GroupsStudy";
import Header from "../../components/Header";
import HowWorks from "../../components/HowWorks";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Pravila Idiomas | Mais que uma escola, um clube</title>
      </Head>
      <Header />
      <main className="relative">
        <Banner />
        <section className="pl-4 pb-24 lg:space-y-24 lg:pl-16">
          <GroupsStudy />
        </section>

        <HowWorks />
        <Faq />
        <div className="w-100 h-[100vh]"></div>
      </main>
    </div>
  )
}

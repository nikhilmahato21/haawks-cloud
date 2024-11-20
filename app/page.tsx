import Header from "./components/Header";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <main className="underline">
      <div>
        {" "}
        <Header />
        <Hero />
      </div>
    </main>
  );
}

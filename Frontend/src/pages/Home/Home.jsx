import {
  Hero,
  LatestCollections,
  BestSeller,
  Policies,
  NewsLetter,
} from "../../components";

function Home() {
  return (
    <>
      <div>
        <Hero />
        <LatestCollections />
        <BestSeller />
        <Policies />
        <NewsLetter />
      </div>
    </>
  );
}

export default Home;

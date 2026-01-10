import React from "react";
import { listings } from "../data/listings";
import AdvertTile from "../components/AdvertTile";

const Home: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-14">
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((l) => (
          <AdvertTile key={l.id} listing={l} />
        ))}
      </section>
    </main>
  );
};

export default Home;

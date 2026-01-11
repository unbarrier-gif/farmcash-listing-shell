import React from "react";
import { listings } from "../data/listings";
import AdvertTile from "../components/AdvertTile";

const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <header className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          Current adverts
        </h1>
        <p className="mt-2 text-sm text-gray-600 max-w-2xl">
          Browse machines for sale, or switch to Wanted to request sourcing.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings
          .filter((l) => l.status === "for-sale")
          .map((l) => (
            <AdvertTile key={l.id} listing={l} />
          ))}
      </section>
    </div>
  );
};

export default Home;

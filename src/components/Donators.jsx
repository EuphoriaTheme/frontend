import React, { useEffect, useState } from "react";

export default function Donators() {
  const [donators, setDonators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.euphoriatheme.uk/data/donators")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch donators");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Check the structure of the response
        setDonators(Array.isArray(data) ? data : data.donators || []); // Adjust based on structure
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="donators" className="py-16 bg-gray-900 text-white text-center">
        <h3 className="text-3xl font-bold mb-8">Donators & Sponsors</h3>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section id="donators" className="py-16 bg-gray-900 text-white text-center">
        <h3 className="text-3xl font-bold mb-8">Donators & Sponsors</h3>
        <p className="text-red-500">Error: {error}</p>
      </section>
    );
  }

  return (
<section id="donators" className="py-16 bg-gray-900 text-white text-center">
  <h3 className="text-3xl font-bold mb-8">Donators & Sponsors</h3>
  <div className="flex flex-wrap justify-center gap-6">
    {donators.map((donator, i) => (
      <div
        key={i}
        className="glass text-white p-6 rounded-lg shadow-lg flex items-center justify-between w-120 min-w-120 max-w-120"
      >
        {/* User's Image on the Left */}
        <img
          src={`https://api.euphoriatheme.uk${donator.avatar}`}
          alt={donator.name}
          className="w-24 h-24 rounded-full"
        />

        {/* Name and Tier in the Center */}
        <div className="flex flex-col items-center flex-1 px-4">
          <h4 className="text-xl font-bold">{donator.name}</h4>
          <p className="text-sm text-gray-400">{donator.tier}</p>
        </div>

        {/* Button on the Right */}
        <a
          href={donator.site}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Visit Website
        </a>
      </div>
    ))}
  </div>
</section>
  );
}
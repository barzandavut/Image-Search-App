import { useState } from "react";

interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    full: string;
    regular: string;
  };
  links: {
    html: string;
  };
}

interface UnsplashSearchResponse {
  results: UnsplashImage[];
}

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<UnsplashImage[]>([]);

  const accessKey = "8szG16RtYh-r9ruf5wvkK6RtBmb2FFvLl6pjYV1HS18";

  const searchImages = async (newSearch = false) => {
    const currentPage = newSearch ? 1 : page;

     const url = `https://api.unsplash.com/search/photos?page=${currentPage}&query=${query}&client_id=${accessKey}`;
    const response = await fetch(url);
    console.log(response)
    const data: UnsplashSearchResponse = await response.json();

    setResults((prev) => [...(newSearch ? [] : prev), ...data.results]);
    setPage(currentPage + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchImages(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center my-10">Image Search App</h1>

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
      >
        <input
          type="text"
          className="w-72 sm:w-96 p-3 rounded shadow border-gray-300"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-700"
        >
          Search
        </button>
      </form>

      {/* Results Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {results.map((result) => (
    <div
      key={result.id}
      className="flex flex-col rounded overflow-hidden shadow group bg-white"
    >
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={result.urls.small}
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Text Area */}
      <div className="p-3 flex-grid flex items-start">
        <a
          href={result.links.html}
          target="_blank"
          className="text-gra hover:text-black transition line-clamp-2"
        >
          {result.alt_description || "No description"}
        </a>
      </div>
    </div>
  ))}
</div>


      {/* Show more button */}
      {results.length > 0 && (
        <button
          onClick={() => searchImages(false)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded mt-10 mx-auto block"
        >
          Show More
        </button>
      )}
    </div>
  );
}


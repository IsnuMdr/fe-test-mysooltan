import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchInput() {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      router.push(`?username=${query}`);
    } else {
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="col-12 col-lg-4 d-sm-block"
      role="search"
    >
      <div className="input-group">
        <input
          type="search"
          name="search"
          className="form-control d-block"
          placeholder="Search username"
          aria-label="Search username"
          aria-describedby="button-addon2"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </form>
  );
}

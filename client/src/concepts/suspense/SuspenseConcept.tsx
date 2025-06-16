import { lazy, Suspense, useState } from "react";

const SlowList = lazy(() => import('./SlowList'));

const SuspenseConcept = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SlowList />
      </Suspense>
    </>
  );
}

export default SuspenseConcept
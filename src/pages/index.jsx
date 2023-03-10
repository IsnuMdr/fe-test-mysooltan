import Head from 'next/head';
import CardAbout from '@/components/CardAbout';
import RepositoryList from '@/components/RepositoryList';
import { useGetReposQuery } from '@/state/apiSlice';
import { useRouter } from 'next/router';
import SearchInput from '@/components/SearchInput';
import Link from 'next/link';

export default function Home() {
  const { query } = useRouter();

  const { data, isLoading, isSuccess, isError } = useGetReposQuery(query.username || 'IsnuMdr');

  return (
    <>
      <Head>
        <title>Github Repositories</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="navbar bg-dark">
          <div className="container">
            <Link href="/" className="navbar-brand mb-0 h1 fw-bold text-white">
              Repo List
            </Link>
            <SearchInput />
          </div>
        </nav>
      </header>
      <main className="container my-3">
        <section className="mb-2">
          <h3>About User</h3>
          <CardAbout
            data={data?.user}
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
          />
        </section>
        <section className="mb-2">
          <h3>Repository List</h3>
          <RepositoryList
            data={data?.repoList}
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
          />
        </section>
      </main>
    </>
  );
}

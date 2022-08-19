import type { NextPage } from 'next';
import Head from 'next/head';
import Todos from '../components/Todos';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 antialiased font-poppins">
      <Head>
        <title>TODOS</title>
      </Head>
      <Todos />
    </div>
  );
};

export default Home;

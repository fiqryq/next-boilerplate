import { Meta } from '@/components/meta';
import ThemeSelector from '@/components/theme-selector';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Meta
        title="next-boilerplate"
        description="simple nextjs boilerplate with tailwindcss + typescript ⚡️ for fast development."
      />
      <div className="bg-[#fafafa]">
        <div className="relative mx-auto h-screen w-full max-w-7xl bg-white dark:bg-gray-900">
          <ul className="absolute top-0 flex w-full flex-row-reverse items-center bg-gray-100/50 p-5 dark:bg-gray-800">
            <li>
              <ThemeSelector />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

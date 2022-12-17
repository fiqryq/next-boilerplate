import ThemeToggle from '@/src/components/themeToggle';

const SamplePage = () => (
  <div className="bg-[#fafafa]">
    <div className="relative mx-auto h-screen w-full max-w-7xl bg-white dark:bg-gray-900">
      <ul className="absolute top-0 flex w-full flex-row-reverse items-center bg-gray-100/50 p-5 dark:bg-gray-800">
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </div>
  </div>
);

export default SamplePage;

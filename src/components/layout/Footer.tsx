import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
              かいせのまとめサイト
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              作成資料をまとめる．&自分についてもまとめる．
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-2 md:mb-0">
              作成資料
            </Link>
            <Link href="/profile" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              プロフィール
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {currentYear} 高橋快成</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

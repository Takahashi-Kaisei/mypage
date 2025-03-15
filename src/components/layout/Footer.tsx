import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-white">
              ポートフォリオ
            </Link>
            <p className="mt-2 text-gray-400 text-sm">
              記事と経歴をまとめたポートフォリオサイト
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white mb-2 md:mb-0">
              記事一覧
            </Link>
            <Link href="/profile" className="text-gray-300 hover:text-white">
              プロフィール
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} ポートフォリオサイト. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

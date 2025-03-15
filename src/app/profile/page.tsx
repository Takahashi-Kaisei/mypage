import RootLayout from "@/components/layout/RootLayout";

export default function ProfilePage() {
  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">プロフィール</h1>
          <p className="text-gray-600">
            経歴やスキルセットについての情報です。
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">基本情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">名前</h3>
                <p className="text-gray-700">山田 太郎</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">職業</h3>
                <p className="text-gray-700">データサイエンティスト / Webエンジニア</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">所在地</h3>
                <p className="text-gray-700">東京都</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">連絡先</h3>
                <p className="text-gray-700">email@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">スキルセット</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">プログラミング言語</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Python</li>
                  <li>JavaScript / TypeScript</li>
                  <li>R</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">フレームワーク・ライブラリ</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>React / Next.js</li>
                  <li>TensorFlow / PyTorch</li>
                  <li>pandas / NumPy</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">データサイエンス</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>機械学習モデル開発</li>
                  <li>統計分析</li>
                  <li>データ可視化</li>
                  <li>自然言語処理</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">その他</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Git / GitHub</li>
                  <li>Docker</li>
                  <li>AWS / GCP</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">職歴</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">シニアデータサイエンティスト</h3>
                  <span className="text-sm text-gray-500">2023年4月 - 現在</span>
                </div>
                <p className="text-gray-600 mb-1">株式会社テックイノベーション</p>
                <p className="text-gray-700">
                  機械学習モデルの開発と実装、データ分析基盤の構築、ビジネス課題解決のためのデータ活用推進を担当。
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">Webエンジニア</h3>
                  <span className="text-sm text-gray-500">2020年4月 - 2023年3月</span>
                </div>
                <p className="text-gray-600 mb-1">株式会社デジタルソリューションズ</p>
                <p className="text-gray-700">
                  React/Next.jsを用いたWebアプリケーション開発、APIの設計と実装、パフォーマンス最適化を担当。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">学歴</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">修士（情報科学）</h3>
                  <span className="text-sm text-gray-500">2018年4月 - 2020年3月</span>
                </div>
                <p className="text-gray-600 mb-1">○○大学大学院 情報科学研究科</p>
                <p className="text-gray-700">
                  機械学習アルゴリズムの研究に従事。修士論文「深層学習を用いた自然言語処理の効率化に関する研究」
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">学士（工学）</h3>
                  <span className="text-sm text-gray-500">2014年4月 - 2018年3月</span>
                </div>
                <p className="text-gray-600 mb-1">○○大学 工学部 情報工学科</p>
                <p className="text-gray-700">
                  プログラミングとデータ構造、アルゴリズム、人工知能の基礎を学習。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

import RootLayout from "@/components/layout/RootLayout";
import SpeakerDeckThumbnail from "@/components/speakerdeck/SpeakerDeckThumbnail";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">作成資料</h1>
          <p className="text-gray-700 dark:text-gray-300">
            自分が作成した資料をまとめていく.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col h-full">
              <SpeakerDeckThumbnail
                url={article.speakerdeckUrl}
                title={article.title}
                thumbnail_image={article.thumbnail_image}
              />
              <div className="mt-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RootLayout>
  );
}

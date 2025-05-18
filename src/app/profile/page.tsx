"use client";

import RootLayout from "@/components/layout/RootLayout";
import { useState } from "react";

export default function ProfilePage() {
  const [openSections, setOpenSections] = useState({
    intro: true,
    skills: true,
    career: true,
    education: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <RootLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">プロフィール</h1>
          <p className="text-gray-700 dark:text-gray-300">
            経歴，学歴，スキルセットなど ~最終更新：2025年5月11日~
          </p>
        </div>
        <div className="p-6">
            <h2 className="text-2xl font-bold">自己紹介</h2>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">名前</h3>
          <p className="text-gray-700 dark:text-gray-300">高橋 快成</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">志望</h3>
          <p className="text-gray-700 dark:text-gray-300">データサイエンティスト / スポーツデータサイエンティスト / MLエンジニア</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">所属</h3>
          <p className="text-gray-700 dark:text-gray-300">武蔵野大学 データサイエンス学部 B3</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">連絡</h3>
          <p className="text-gray-700 dark:text-gray-300">就活用email : kaisei22037@gmail.com</p>
          <p className="text-gray-700 dark:text-gray-300">X : <a href="https://x.com/kai_ds04" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">kai_ds04</a></p>
          <p className="text-gray-700 dark:text-gray-300">Github : <a href="https://github.com/Takahashi-Kaisei" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kaise</a></p>
        </div>


      <div className="p-6">
        <h2 className="text-2xl font-bold">スキル</h2>
        <div>
          <h3 className="text-lg font-semibold mb-2">プログラミング言語</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">フレームワーク・ライブラリ</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>PyTorch</li>
            <li>scikit-learn</li>
            <li>pandas / NumPy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">データサイエンス</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>機械学習</li>
            <li>ビジュアライゼーション</li>
            <li>LLM</li>
            <li>生成モデル</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">その他</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Git / GitHub</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">経歴</h2>
            <button
              onClick={() => toggleSection('career')}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              {openSections.career ? '閉じる' : '開く'}
            </button>
          </div>
          {openSections.career && (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">某スポーツデータ分析会社</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2024年4月 - 現在</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  データ抽出，加工，分析，機械学習モデルの開発を行う．
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">scikit-learnを0から作ろうProject</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2023年12月 - 現在</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                武蔵野大学 Boh PJより発足した，機械学習の理論を学ぶ為のプロジェクト．scikit-learnに実装されている機械学習モデルを1から実装し，資料を作成することで機械学習モデルへの理解を深める．
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                担当モデル
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Linear Regression</li>
                  <li>Logistic Regression</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://citrine-nemophila-f1d.notion.site/scikit-learn-0-Project-e250fa4e2206458682ce9015e9a29e79" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">scikit-learnを0から作ろうProject詳細</a>
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">深層生成モデル Deep Learning 応用講座 2025|Spring 修了</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2025年2月 - 2025年4月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  東京大学の松尾，岩澤研究室が開講する生成モデル講座にて，生成モデルの理論と実装を広く学習している．
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://weblab.t.u-tokyo.ac.jp/lecture/course-list/deep-generative-model/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">松尾研生成モデル講座HP</a>
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">2024年度 スポーツデータサイエンスコンペティション</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2024年1月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-1">「野球における,試合状況を考慮した守備指標 Defensive Value per Play の提案」</p>
                <p className="text-gray-700 dark:text-gray-300">これまで野球における守備指標は，UZRなどの守備技術のみを定量的に測る指標が多く使われていた．しかし，これらの指標は，大差な状況と僅差な状況を同じように扱っている．そこで，試合状況を考慮し，定量的に守備を評価する指標を提案した．</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://drive.google.com/file/d/10UC_ujvf77Og2g7u3oClofsOEkan-a4S/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">2024年度 スポーツデータサイエンスコンペティション報告書(私の資料はP87ページにございます．)</a>
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">大規模言語モデル Deep Learning 応用講座 2024|Fall 修了</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2024年9月 - 2024年12月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  東京大学の松尾，岩澤研究室が開講するLLM講座にて，大規模言語モデルの理論と実装を広く学習した．
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://weblab.t.u-tokyo.ac.jp/lecture/course-list/large-language-model/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">松尾研LLM講座HP</a>
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">5期生向けLT会 主催</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2024年3月29~31日</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">発表者11人16テーマで，自分の好きなテーマについて発表するLT会を主催した．</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">第9回大学生向けハッカソン『aihack（アイハック）』 優秀賞</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2024年3月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                【アイフルグループ】第9回大学生向けハッカソン『aihack（アイハック）』にて優秀賞(2位)を受賞した．</p>
                <p className="text-gray-700 dark:text-gray-300">実施テーマ : 「アイフルの予測モデルの精度を最大化せよ．顧客データを用いたスコアリングモデルの構築」</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://www.aiful.co.jp/group/ir/pdf/nr20240410.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">第9回大学生向けハッカソン『aihack（アイハック）』詳細</a>
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">未来創造PJ成果発表会 学科賞</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2024年2月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                「MLBレギュラーシーズンのデータから見る今後の戦術トレンドや重要指標」</p>
                <p className="text-gray-700 dark:text-gray-300">武蔵野大学データサイエンス学部が実施する実践型授業の成果発表会にて，自分が所属するゼミの先生から学科賞をいただいた．</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://www.musashino-u.ac.jp/academics/faculty/data_science/data_science/features.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">未来創造PJ詳細</a>
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">学歴</h2>
            <button
              onClick={() => toggleSection('education')}
              className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
              {openSections.education ? '閉じる' : '開く'}
            </button>
          </div>
          {openSections.education && (
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">武蔵野大学</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2023年4月 - 現在</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-1">データサイエンス学部 データサイエンス学科</p>
                <p className="text-gray-700 dark:text-gray-300">
                  データサイエンスの基礎から実践まで幅広く学習．機械学習，統計，データベース，ビジュアライゼーションなど．
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">千葉県立成東高等学校</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2020年4月 - 2023年3月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-1">普通科</p>
                <p className="text-gray-700 dark:text-gray-300">
                  野球部に所属．
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </RootLayout>
  );
}

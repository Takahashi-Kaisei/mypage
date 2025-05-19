"use client";

import RootLayout from "@/components/layout/RootLayout";
import { useState } from "react";

export default function ProfilePage() {
  const [openSections, setOpenSections] = useState({
    career_11: false,
    career_10: false,
    career_9: false,
    career_8: false,
    career_7: false,
    career_6: false,
    career_5: false,
    career_4: false,
    career_3: false,
    career_2: false,
    career_1: false
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
            経歴，学歴，スキルセットなど ~最終更新：2025年5月20日~
          </p>
        </div>

        <div className="p-6">
            <h2 className="text-2xl font-bold">自己紹介</h2>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>

        <div className="p-6">
            <h2 className="text-2xl font-bold">スキル</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <h2 className="text-2xl font-bold">経歴</h2>
            <div className="space-y-6">

              <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">某スポーツデータ分析会社</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-300">2024年4月 - 現在</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  データ抽出，加工，分析，機械学習モデルの開発を行う．
                </p>
                <button
                    onClick={() => toggleSection('career_11')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_11 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_11 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>SQLを用いて，データベースからのデータ抽出を行う．</li>
                    <li>pythonを用いて，データ加工，分析，機械学習モデルの開発を行う．</li>
                      <li className="ml-3">大規模なデータベースからの効率的なデータの抽出と，整合性チェックの経験を得た．</li>
                      <li className="ml-3">自分の頭の中で考えたことをコードに落とし込み，思い通りにデータを加工する難しさ・経験を得た．</li>
                      <li className="ml-3">ドメイン知識を駆使し，機械学習モデルにより多くの知識を与えるようなデータ分析・特徴量設計の経験を得た．</li>
                  </ul>
                )}
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">scikit-learnを0から作ろうProject</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2023年12月 - 現在</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                武蔵野大学 Boh PJより発足した，機械学習の理論を学ぶ為のプロジェクト．scikit-learnに実装されている機械学習モデルを1から実装し，資料を作成することで機械学習モデルへの理解を深める．
                </p>
                <p className="text-gray-700 dark:text-gray-300">担当モデル</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Linear Regression</li>
                  <li>Logistic Regression</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://citrine-nemophila-f1d.notion.site/scikit-learn-0-Project-e250fa4e2206458682ce9015e9a29e79" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">scikit-learnを0から作ろうProject詳細</a>
                </p>
                <button
                    onClick={() => toggleSection('career_10')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_10 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_10 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>sklearnに実装されるモデルについて，書籍・ネット記事を参考にしながら学習・実装を行う．</li>
                    <li>Githubでissueを立て，リポジトリにプルリクストを送る．(管理者がそれを承認する形で実装完了とする．)</li>
                    <li>自分が実装したモデルに関して資料を作成し，世界に公開する．→この一連のフローをモデル一つにつき行う．</li>
                      <li className="ml-3">数式をコードで表現する経験．</li>
                      <li className="ml-6">特に，数式上では問題のない実装が，コードにしたときに，オーバーフロー・計算量が多すぎる．などの問題に見舞われることが多かった．そのような問題に対して，数式上の等価を保ち，実装では計算量を抑えるような実装に工夫をする点に醍醐味を感じた．</li>
                      <li className="ml-6">生成AIツールを直接的に用いずに，なるべく自分の力で実装をすることで，数式をコードで表現する思考力を得た．</li>
                      <li className="ml-3">sklearnを開発することによる，チーム開発の経験．</li>
                      <li className="ml-6">Githubでissueを立て，ブランチを生やして実装をし，プルリクエストを行うまでのチーム開発の一連の流れを経験した．実装したモデルの問題点については，身内のコミュニケーションツールではなく，実際にGithub上で行われるようなレビューを通して議論することで，よりリアルな開発を経験した．</li>
                      <li className="ml-6">実装では，型ヒント・ドックストリングを忘れず書き，より綺麗なコードを書く経験を得た．</li>
                      <li className="ml-3">初学者でもわかるような資料を作成し，発表する経験．</li>
                      <li className="ml-6">実装したモデルについて，完璧に理解できていなければ他人に説明することができないので，聴講者が初学者であることを想定し資料を作成することで，より深い理解ができた．</li>
                      <li className="ml-6">モデルを実装するだけであれば，最終的な式(損失関数・最適化関数)さえコードで表現できれば良いが，資料を作成することで，数式の意味や，実装の意図，気持ちを理解することができた．</li>
                  </ul>
                )}
              </div>


              <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">勉強会2025春 主催・参加</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-300">2025年3月22日 - 2025年4月14日</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  学内で，春休みを利用して勉強会を開催し発表を行った．
                </p>
                <button
                    onClick={() => toggleSection('career_9')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_9 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_9 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>自分の発表テーマ：「ロジスティック回帰の理論」</li>
                      <li className="ml-3">発表者：11人12テーマ</li>
                      <li className="ml-3">聴講者：平均15人ほど(後になるにつれて増加した．)</li>
                      <li className="ml-3">形式：時間無制限でLT会と同じように発表</li>
                      <li className="ml-6">主催・参加したことによるリターンやできたこと．</li>
                      <li className="ml-9">これまでのLT会の主催・参加の経験を活かしてより多くの人が参加しやすく，なおかつ活発な議論になるように工夫をした．</li>
                      <li className="ml-12">発表日程を幅広く取り，一日に1, 2テーマの発表を行った．</li>
                      <li className="ml-15">発表後の質問・議論に多くの時間を割くことができ，より深い勉強会を実現した．</li>
                      <li className="ml-15">発表の日程を細かく分けることで，聴講者の負担軽減，日程調整がしやすいようにした．</li>
                      <li className="ml-12">[発表に関して, 勉強会に関して, アンケート自体に関して]のアンケートを毎回実施した．</li>
                      <li className="ml-15">発表者に聴講者の生の声を届けることで，モチベーションと発表することの価値を感じてもらうことができた．</li>
                      <li className="ml-15">より良い勉強会にするため，より参加者を集めるために，聴講者の意見を取り入れることができた．</li>
                      <li className="ml-9">これらの工夫による影響</li>
                      <li className="ml-12">当初，勉強会のslackチャンネルの参加者は50人ほどであったが，最終的には84人まで増加した</li>
                      <li className="ml-12">当初，聴講者は平均10人ほどであったが，宣伝や工夫の結果，平均15人ほど，最後の発表では20人ほどに増加した．</li>

                  </ul>
                )}
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">深層生成モデル Deep Learning 応用講座 2025|Spring 修了</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2025年2月 - 2025年4月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  東京大学の松尾，岩澤研究室が開講する生成モデル講座にて，生成モデルの理論と実装を広く学習した．</p>
                <p className="text-gray-700 dark:text-gray-300">
                  深層生成モデルについて，混合ガウスモデルから始まり，VAE・GAN・Flowベース・energyベース・scoreベース・Diffusionモデルの理論と実装を学んだ．</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://weblab.t.u-tokyo.ac.jp/lecture/course-list/deep-generative-model/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">松尾研生成モデル講座HP</a>
                </p>
                <button
                    onClick={() => toggleSection('career_8')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_8 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_8 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>生成モデルという一つのトピックがあり，従来の手法でカバーできなかった点をカバーしていく生成モデルの歴史の流れを学ぶことができた．この流れは，自分の研究を進める上で，先行研究の課題が前提としてあって，それを解決するのが研究であるという，「自分の研究の位置付け」を理解するのに非常に役に立った．</li>
                      <li className="ml-3">そのような具体的な例→VAEにおける最尤法の学習では，データ分布で低い確率の部分が押し上げられるようにモデル分布で学習されてしまい，生成画像がぼやけてしまうという課題があった．それを解決するために，評価を密度比で行いデータ分布とモデル分布を近づける．というGANの考え方が提案された．</li>
                  </ul>
                )}
              </div>


              <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">2024年度 スポーツデータサイエンスコンペティション 参加</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-300">2024年1月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  2024年度のスポーツデータサイエンスコンペティションにおいて，野球における新たな守備指標を提案する研究を行った．
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://drive.google.com/file/d/10UC_ujvf77Og2g7u3oClofsOEkan-a4S/view" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">2024年度 スポーツデータサイエンスコンペティション報告書(私の資料はP87ページにございます．)</a>
                </p>
                <button
                    onClick={() => toggleSection('career_7')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_7 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_7 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>研究内容</li>
                      <li className="ml-3">先行研究：野球における守備指標は，一般的に打球処理の難しさベースの評価が行われている，</li>
                      <li className="ml-3">課題：このような従来の守備指標では，精神的に負荷がかかる場面での守備と，そうでない場面での守備を同等に評価してしまうという課題が存在する．これでは，真に重要な場面での守備を軽視してしまう可能性がある．</li>
                      <li className="ml-3">目的：精神的に負荷がかかる場面での守備に対し，高く評価を行う．</li>
                      <li className="ml-3">提案手法：打球処理の難しさという従来の尺度に加え．「接戦率」というどのくらい接戦の場面であるかという尺度で重みをつけることで，精神的に負荷がかかる場面での守備を高く評価する．</li>
                      <li className="ml-3">結果：既存の指標と比較して，接戦な場面で多く守備を行った選手を高評価することができた．</li>
                      <li className="ml-3">評価：従来の指標と比較して，評価される選手がどの程度変化するのか．</li>
                    <li>反省点→改善・学び</li>
                      <li className="ml-3">評価の仕方が定量的ではなく主観に近い評価となってしまった．評価指標に対する評価という部分で詰めが甘くなってしまった．→評価指標を提案している論文から評価指標の評価を提案する論文を参考にするべきだった．</li>
                      <li className="ml-3">パラメータの決定が手動になってしまった．→従来の指標でパラメータの決定は得点期待値ベースで行われていて，それが広く使われているのでその方法を踏襲するべきであった．</li>
                  </ul>
                )}
              </div>


              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold">大規模言語モデル Deep Learning 応用講座 2024|Fall 修了</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300">2024年9月 - 2024年12月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  東京大学の松尾，岩澤研究室が開講するLLM講座にて，大規模言語モデルの理論と実装を広く学習した．</p>
                <p className="text-gray-700 dark:text-gray-300">
                  大規模言語モデルについて，事前学習の知識から事後学習までの各手法の概要を知る程度に広く浅く学んだ．</p>
                <p className="text-gray-700 dark:text-gray-300">
                  ここでLLMについて学んだことで，自分のAIについての知識を加速度的に成長させ，昨今のAI技術をキャッチアップできるようになった．</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://weblab.t.u-tokyo.ac.jp/lecture/course-list/large-language-model/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">松尾研LLM講座HP</a>
                </p>
              </div>


              <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">夏休みLT会 主催・参加</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-300">2024年9月5日</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  学内サークルで，後輩中心にLT会を開催し発表を行った．
                </p>
                <button
                    onClick={() => toggleSection('career_6')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_6 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_6 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>自分の発表テーマ：「確率論を学ぶ意義」</li>
                      <li className="ml-3">発表者：8人</li>
                      <li className="ml-3">聴講者：平均10人</li>
                      <li className="ml-6">後輩が8人中5人と，積極的に後輩を巻き込むことができた．</li>
                      <li className="ml-6">主催・参加したことによるリターンやできたこと．</li>
                      <li className="ml-9">縦の繋がりを深める機会を提供する事ができた．</li>
                      <li className="ml-9">後輩の割合が多かったので，できるだけ初学者向けの資料を作成する事ができた．</li>
                      <li className="ml-9">後輩に質問する際に，基礎知識がない前提でもわかるように質問をする事ができた．</li>
                  </ul>
                )}
              </div>

              <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">第三回LT会 主催・参加</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-300">2024年7月6日</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  学内サークルでLT会を開催し発表を行った．
                </p>
                <button
                    onClick={() => toggleSection('career_5')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_5 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_5 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>自分の発表テーマ：「多重共線性って結局どうすればいいの？」</li>
                      <li className="ml-3">発表者：9人</li>
                      <li className="ml-3">聴講者：平均11人</li>
                      <li className="ml-6">前回のLT会により，第三回LT会では発表者の半数が同期(当時の二年生)であった．</li>
                      <li className="ml-6">主催・参加したことによるリターンやできたこと．</li>
                      <li className="ml-9">今までのLT会の経験から，人に発表するための資料を作成する事ができた．</li>
                      <li className="ml-9">聴講者の目線に立って自分の資料を作成する事ができた．</li>
                      <li className="ml-9">質問に対し，自分の知識でのできる限りの応答をする事ができた．</li>
                  </ul>
                )}
              </div>


              <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">5期生向けLT会 主催・参加</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-300">2024年3月29日 - 2024年3月31日</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  発表者を同期(当時の一年生)に絞り，活発なコミュニケーションを促進するために開催し発表を行った．
                </p>
                <button
                    onClick={() => toggleSection('career_4')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_4 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_4 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>自分の発表テーマ：「機械学習の精度を高めよう」</li>
                      <li className="ml-3">発表者：11人16テーマ</li>
                      <li className="ml-3">聴講者：平均10人</li>
                      <li className="ml-3">主催・参加したことによるリターンやできたこと．</li>
                      <li className="ml-6">興味分野を通して横の繋がりを深めることができた．</li>
                      <li className="ml-6">今後開催する勉強会，LT会の敷居を下げることができた．</li>
                  </ul>
                )}
              </div>

              <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">第9回大学生向けハッカソン『aihack（アイハック）』 優秀賞</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-300">2024年3月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  【アイフルグループ】第9回大学生向けハッカソン『aihack（アイハック）』にて優秀賞(2位)を受賞した．
                </p>
                <p className="text-gray-700 dark:text-gray-300">実施テーマ : 「アイフルの予測モデルの精度を最大化せよ．顧客データを用いたスコアリングモデルの構築」</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://www.aiful.co.jp/group/ir/pdf/nr20240410.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">第9回大学生向けハッカソン『aihack（アイハック）』詳細</a>
                </p>
                <button
                    onClick={() => toggleSection('career_3')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_3 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_3 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>具体的な内容</li>
                      <li className="ml-3">タスク：クレジットカードの貸し倒れ予測モデルの構築</li>
                      <li className="ml-3">評価指標：AUC</li>
                      <li className="ml-3">期間：2日(実質24時間)</li>
                      <li className="ml-3">結果：準優勝</li>
                    <li>行ったこと</li>
                      <li className="ml-3">チームとして</li>
                        <li className="ml-6">LightGBMとCNNのバギングモデル(加重平均)を構築した．</li>
                        <li className="ml-6">public leaderboardでは低いスコアだったものの，汎化性能を高めたことにより，private leaderboardでは2位までup shakeした．</li>
                      <li className="ml-3">個人として</li>
                        <li className="ml-6">AutoML(pycaret)を用いて，モデル構築の試行錯誤を高速で行った．</li>
                        <li className="ml-6">特徴量エンジニアリングの試行錯誤を行った，</li>
                      <li className="ml-3">反省点→改善・学び</li>
                        <li className="ml-6">評価指標の理解が不十分であった．そのため，評価指標からのフィードバックウを受けた効率的な試行錯誤ができなかった．→この失敗から，実験において評価が最重要であることを体感した．</li>
                  </ul>
                )}
              </div>


              <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">未来創造PJ成果発表会 学科賞</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-300">2024年2月</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                「MLBレギュラーシーズンのデータから見る今後の戦術トレンドや重要指標」</p>
                <p className="text-gray-700 dark:text-gray-300">武蔵野大学データサイエンス学部が実施する実践型授業の成果発表会にて，自分が所属するゼミの先生から学科賞をいただいた．</p>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="https://www.musashino-u.ac.jp/academics/faculty/data_science/data_science/features.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">未来創造PJ詳細</a>
                </p>
                <button
                    onClick={() => toggleSection('career_2')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_2 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_2 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>研究内容</li>
                      <li className="ml-3">背景：野球は相手より多く得点を取るスポーツであり，そのために戦略を練り，試行する．戦略を練るのにあたり，近年ではセイバーメトリクスが台頭し，「犠打をするよりもホームランを狙った方が良い．」というような結論が導かれている．しかしWBC優勝国である日本では，まだまだ犠打を試行することが多い．果たして犠打は本当にナンセンスな戦略であるのだろうか．</li>
                      <li className="ml-3">目的：各戦略・指標において，得点の寄与度合いを算出することで，真に得点に繋がる戦略を導く．</li>
                      <li className="ml-3">提案手法：</li>
                        <li className="ml-6">データ：MLB120年間の各指標[打席, 安打, 二塁打, 三塁打, 本塁打, 打点, 犠打, 四球, 死球, 三振, 盗塁, 残塁]の数を説明変数，得点数を目的変数とする．</li>
                        <li className="ml-6">モデル：時系列モデル(VAR)を構築する．</li>
                        <li className="ml-6">解釈手法：その時系列モデルの得点に対するインパルス応答を確認することで得点に寄与する指標を導く．</li>
                      <li className="ml-3">結果：得点への正の影響が多かった順から，[犠打＞盗塁＞残塁＞本塁打＞死球＞三振＞二塁打＞三塁打＞四球＞...]という結果が得られた．</li>
                      <li className="ml-3">考察：年ごとに集計すると，犠打が多くなると得点も多くなるという従来の考え方とは逆の結果が得られた</li>
                        <li className="ml-6">→無駄な犠打が減ったことにより，得点が得られる確率が高い状況での犠打に絞られたことで，得点への影響は高く見積もられたのではないか．</li>
                    <li>反省点→改善・学び</li>
                      <li className="ml-3">研究手順があやふやなまま始めてしまい．先行研究の調査もままならないまま研究を進めてしまった．</li>
                        <li className="ml-6">→期限直前に，ちゃんと結果が出ないという問題が起きてしまった．しかし手元にある技術でなんとか実験を解釈しようともがいた事が非常に学びになった．</li>
                  </ul>
                )}
              </div>

              <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">第二回LT会 参加</h3>
                    <span className="text-sm text-gray-700 dark:text-gray-300">2023年12月21日</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  学内サークルにて行われたLT会に参加した．
                </p>
                <button
                    onClick={() => toggleSection('career_1')}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      {openSections.career_1 ? 'しまう' : '詳細'}
                  </button>
                {openSections.career_1 && (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>自分の発表テーマ：「欠損値処理をなんとなくでやりたくない」</li>
                    <li>発表者：5人</li>
                    <li>参加したことによるリターンやできたこと．</li>
                      <li className="ml-3">人に発表するために資料を作成することで，自分の知識の定着・整理をすることができた．</li>
                      <li className="ml-3">自分で勉強をするだけでは得られない気づきや，知識の隙を発見する事ができた．</li>
                      <li className="ml-3">まともに回答できなかったが，質問に対応するという初の経験を得た．</li>
                  </ul>
                )}
              </div>





            </div>
        </div>

        <div className="p-6">
            <h2 className="text-2xl font-bold">学歴</h2>
          </div>
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
        </div>
    </RootLayout>
  );
}

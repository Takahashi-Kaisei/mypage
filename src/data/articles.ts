import { Article } from "@/types/article";

// サンプル記事データ
export const articles: Article[] = [
  {
    id: "1",
    title: "線形回帰の実装",
    description: "線形回帰の理論と実装についてまとめた．",
    speakerdeckUrl: "https://speakerdeck.com/kai_ds04/implementing-linear-regression",
    thumbnail_image: "/Thumbnail_image/id1_thumbnail.jpg",
    tags: ["機械学習", "データサイエンス", "統計", "線形回帰"],
    date: "2024-05-27",
  },
  {
    id: "2",
    title: "ロジスティック回帰の実装",
    description: "ロジスティック回帰の理論と実装についてまとめた．",
    speakerdeckUrl: "https://speakerdeck.com/kai_ds04/rozisuteitukuhui-gui-noshi-zhuang",
    thumbnail_image: "/Thumbnail_image/id2_thumbnail.jpg",
    tags: ["機械学習", "データサイエンス", "統計", "線形回帰", "ロジスティック回帰"],
    date: "2025-03-30",
  }
];

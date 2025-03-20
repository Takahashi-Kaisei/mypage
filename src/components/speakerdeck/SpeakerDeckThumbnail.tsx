"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

interface SpeakerDeckThumbnailProps {
  url: string;
  title?: string;
}

const SpeakerDeckThumbnail: React.FC<SpeakerDeckThumbnailProps> = ({ url, title }) => {
  const [thumbnailData, setThumbnailData] = useState<{
    thumbnail_url?: string;
    title?: string;
    author_name?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOEmbed = async () => {
      try {
        setLoading(true);
        // クライアントサイドでの直接APIコールはCORSの問題があるため、
        // 実際の実装ではサーバーサイドAPIルートを使用することを推奨
        // ここではモックデータを使用

        // 実際の実装例:
        // const response = await fetch(`/api/speakerdeck-oembed?url=${encodeURIComponent(url)}`);
        // const data = await response.json();

        // モックデータ（デモ用）
        setTimeout(() => {
          const mockData = {
            thumbnail_url: "https://speakerd.s3.amazonaws.com/presentations/sample/slide_0.jpg",
            title: title || "Implementing Linear Regression",
          };
          setThumbnailData(mockData);
          setLoading(false);
        }, 500);
      } catch {
        setError("サムネイルの読み込みに失敗しました");
        setLoading(false);
      }
    };

    fetchOEmbed();
  }, [url, title]);

  if (loading) {
    return (
      <div className="border rounded-lg p-4 bg-gray-50 animate-pulse h-64 flex items-center justify-center">
        <p className="text-gray-400">読み込み中...</p>
      </div>
    );
  }

  if (error || !thumbnailData) {
    return (
      <div className="border rounded-lg p-4 bg-gray-50 h-64 flex items-center justify-center">
        <p className="text-red-500">{error || "サムネイルを読み込めませんでした"}</p>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-video bg-gray-100">
        {thumbnailData.thumbnail_url ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailData.thumbnail_url})` }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <p className="text-gray-500">サムネイルなし</p>
          </div>
        )}
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-medium text-lg mb-1 line-clamp-2">
          {thumbnailData.title}
        </h3>
        {thumbnailData.author_name && (
          <p className="text-gray-600 text-sm">{thumbnailData.author_name}</p>
        )}
        <div className="mt-2 flex items-center text-blue-600 text-sm">
          <ExternalLink size={14} className="mr-1" />
          <span>SpeakerDeckで見る</span>
        </div>
      </div>
    </a>
  );
};

export default SpeakerDeckThumbnail;

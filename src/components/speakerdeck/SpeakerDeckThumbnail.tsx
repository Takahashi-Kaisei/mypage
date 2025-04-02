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
        const response = await fetch(`/api/speakerdeck-oembed?url=${encodeURIComponent(url)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch thumbnail data');
        }
        const data = await response.json();
        setThumbnailData({
          thumbnail_url: data.thumbnail_url,
          title: title || data.title,
          author_name: data.author_name
        });
        setLoading(false);
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

"use client";

import React, { useState, useEffect } from "react";

interface SpeakerDeckEmbedProps {
  url: string;
}

const SpeakerDeckEmbed: React.FC<SpeakerDeckEmbedProps> = ({ url }) => {
  const [embedHtml, setEmbedHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOEmbed = async () => {
      try {
        setLoading(true);
        // 実際の実装では、サーバーサイドAPIルートを使用することを推奨
        // const response = await fetch(`/api/speakerdeck-oembed?url=${encodeURIComponent(url)}`);
        // const data = await response.json();
        // setEmbedHtml(data.html);

        // モックデータ（デモ用）
        setTimeout(() => {
          const mockHtml = `<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/sample" allowfullscreen="true" style="border:0; padding:0; margin:0; background:transparent;" mozallowfullscreen="true" webkitallowfullscreen="true" width="100%" height="400"></iframe>`;
          setEmbedHtml(mockHtml);
          setLoading(false);
        }, 500);
      } catch {
        setError("埋め込みコンテンツの読み込みに失敗しました");
        setLoading(false);
      }
    };

    fetchOEmbed();
  }, [url]);

  if (loading) {
    return (
      <div className="border rounded-lg p-4 bg-gray-50 animate-pulse h-64 flex items-center justify-center">
        <p className="text-gray-400">読み込み中...</p>
      </div>
    );
  }

  if (error || !embedHtml) {
    return (
      <div className="border rounded-lg p-4 bg-gray-50 h-64 flex items-center justify-center">
        <p className="text-red-500">{error || "埋め込みコンテンツを読み込めませんでした"}</p>
      </div>
    );
  }

  return (
    <div className="speakerdeck-embed-container aspect-video w-full">
      <div dangerouslySetInnerHTML={{ __html: embedHtml }} />
    </div>
  );
};

export default SpeakerDeckEmbed;

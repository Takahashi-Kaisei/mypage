"use client";

import type { FC } from "react";
import { ExternalLink } from "lucide-react";

interface SpeakerDeckThumbnailProps {
  url: string;
  title: string;
  thumbnail_image: string;
}

const SpeakerDeckThumbnail: FC<SpeakerDeckThumbnailProps> = ({
  url,
  title,
  thumbnail_image
}) => {

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-gray-800 transition-shadow duration-300"
    >
      <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail_image})` }}
        />
      </div>
      <div className="p-4 bg-white dark:bg-gray-900">
        <h3 className="font-medium text-lg mb-1 line-clamp-2 text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <div className="mt-2 flex items-center text-blue-600 dark:text-blue-400 text-sm">
          <ExternalLink size={14} className="mr-1" />
          <span>SpeakerDeckで見る</span>
        </div>
      </div>
    </a>
  );
};

export default SpeakerDeckThumbnail;

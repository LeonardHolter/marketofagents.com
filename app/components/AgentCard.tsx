"use static";

import Image from "next/image";

export interface AgentCardProps {
  displayName: string;
  description: string;
  image: string;
  creator: string;
  views?: string;
}

export default function AgentCard({
  displayName,
  description,
  image,
  creator,
  views,
}: AgentCardProps) {
  return (
    <div className="w-[340px] h-[140px] bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
      <div className="flex items-start gap-4 h-full">
        <div className="relative w-[110px] h-[110px] rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={displayName}
            fill
            className="object-cover"
            sizes="100px"
          />
        </div>
        <div className="flex-grow min-w-0 flex flex-col justify-between">
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm line-clamp-1">
              {displayName}
            </h3>
            <p className="text-gray-500 text-sm mb-1">By {creator}</p>
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          </div>
          {views && (
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <span className="text-gray-400 text-sm">{views}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use static";

import Image from "next/image";
import Link from "next/link";

export interface AgentCardProps {
  displayName: string;
  description: string;
  image: string;
  creator: string;
  views?: string;
  id: string;
}

export default function AgentCard({
  displayName,
  description,
  image,
  creator,
  views,
  id,
}: AgentCardProps) {
  return (
    <Link href={`/agent/${id}`}>
      <div className="w-[340px] h-[140px] bg-[#27272A] rounded-[16px] p-4 hover:bg-[#333333] transition-colors border border-[#333333]">
        <div className="flex items-start gap-4 h-full">
          <div className="relative w-[110px] h-[110px] rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={displayName}
              fill
              className="object-cover"
              sizes="110px"
            />
          </div>
          <div className="flex-grow min-w-0 flex flex-col justify-between">
            <div className="flex flex-col">
              <h3 className="font-semibold text-sm line-clamp-1 text-white">
                {displayName}
              </h3>
              <p className="text-gray-400 text-sm mb-1">By {creator}</p>
              <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
            </div>
            {views && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span className="text-gray-400 text-sm">{views}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

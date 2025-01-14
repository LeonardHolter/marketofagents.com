"use static";
import { ReactNode } from "react";

interface AgentCardProps {
  children: ReactNode;
  imagepath?: string; // Add the imagepath property as optional
}

export default function AgentCard({ children, imagepath }: AgentCardProps) {
  return (
    <div className="card bg-base-100 w-64 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
      <figure>
        <img
          src={
            imagepath
              ? imagepath
              : "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          }
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {children}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Makes your life 100% easier</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">CRM</div>
          <div className="badge badge-outline">Marketing</div>
        </div>
      </div>
    </div>
  );
}

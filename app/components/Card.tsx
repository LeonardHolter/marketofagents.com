import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return <div className={`rounded-xl ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className = "" }: CardProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

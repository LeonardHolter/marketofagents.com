"use client";
import { useTheme } from "../context/ThemeContext";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";

export default function ThemeWrapper({
  children,
  geistSans,
}: {
  children: React.ReactNode;
  geistSans: NextFontWithVariable;
}) {
  const { isDarkMode } = useTheme();

  return (
    <body
      className={`${geistSans.variable} antialiased ${
        isDarkMode ? "bg-[#0F0F0F]" : "bg-white"
      }`}
    >
      {children}
    </body>
  );
}

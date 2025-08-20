"use client";
import EntryLayer from "./components/EntryLayer";
import MainLayer from "./components/MainLayer";
export default function Home() {
  return (
    <main className="flex justify-center items-center relative">
      <MainLayer />
      <EntryLayer />
    </main>
  );
}

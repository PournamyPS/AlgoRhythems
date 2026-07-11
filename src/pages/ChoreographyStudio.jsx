import { useState } from "react";
import { motion } from "framer-motion";
import TopNav from "../components/TopNav.jsx";
import RhythmLane from "../components/RhythmLane.jsx";
import StepList from "../components/StepList.jsx";
import ChoreographyToolbar from "../components/ChoreographyToolbar.jsx";
import { sampleSteps } from "../data/sampleData.js";

export default function ChoreographyStudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [beatIndex, setBeatIndex] = useState(0);
  const [steps, setSteps] = useState(sampleSteps);

  const handleBeat = () => setBeatIndex((n) => n + 1);

  const handleAddStep = () => {
    setSteps((prev) => [
      ...prev,
      { id: Date.now(), beat: beatIndex, label: "New step" },
    ]);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setBeatIndex(0);
    setResetKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen pb-10">
      <TopNav />
      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Choreography Studio
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Upload a beat, follow the lane, and mark new steps as they land.
            </p>
          </div>
          <ChoreographyToolbar
            isPlaying={isPlaying}
            onStart={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onReset={handleReset}
            onAddStep={handleAddStep}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass relative flex h-[420px] overflow-hidden rounded-xl3 shadow-card"
        >
          <div className="relative h-full flex-1">
            <RhythmLane isPlaying={isPlaying} speed={1} onBeat={handleBeat} resetKey={resetKey} />
          </div>
          <div className="h-full w-[300px] shrink-0">
            <StepList steps={steps} onRemove={(id) => setSteps((s) => s.filter((x) => x.id !== id))} />
          </div>
        </motion.div>
      </main>
    </div>
  );
}

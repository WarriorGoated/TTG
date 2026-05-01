import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Upload, X, Film } from "lucide-react";
import { base44 } from "@/api/base44Client";

const VIDEO_STORAGE_KEY = "topaz_hero_video_url";

export default function HeroSection() {
  const [videoUrl, setVideoUrl] = useState(() => localStorage.getItem(VIDEO_STORAGE_KEY) || "");
  const [isAdmin, setIsAdmin] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showUploader, setShowUploader] = useState(false);

  useEffect(() => {
    base44.auth.me().then((user) => {
      if (user?.role === "admin") setIsAdmin(true);
    }).catch(() => {});
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setVideoUrl(file_url);
    localStorage.setItem(VIDEO_STORAGE_KEY, file_url);
    setUploading(false);
    setShowUploader(false);
  };

  const removeVideo = () => {
    setVideoUrl("");
    localStorage.removeItem(VIDEO_STORAGE_KEY);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {videoUrl ? (
          <video
            key={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src="/Videos/TopazMainVideo.mp4"
            alt="Modern AV conference room"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      {/* Admin Video Upload Controls */}
      {isAdmin && (
        <div className="absolute top-24 right-6 z-20 flex flex-col items-end gap-2">
          {!showUploader ? (
            <button
              onClick={() => setShowUploader(true)}
              className="flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-xs rounded-full border border-white/20 hover:bg-black/80 transition-all"
            >
              <Film className="w-3.5 h-3.5" />
              {videoUrl ? "Change Video" : "Upload Hero Video"}
            </button>
          ) : (
            <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 w-72">
              <div className="flex items-center justify-between mb-3">
                <p className="text-white text-sm font-semibold">Upload Hero Video</p>
                <button onClick={() => setShowUploader(false)} className="text-white/60 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-white/60 text-xs mb-3">Select an .mp4 file from your device. It will be used as the hero background.</p>
              <label className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 border-dashed rounded-xl cursor-pointer transition-all">
                {uploading ? (
                  <span className="text-white text-xs">Uploading...</span>
                ) : (
                  <>
                    <Upload className="w-4 h-4 text-white/70" />
                    <span className="text-white text-xs">Choose MP4 file</span>
                  </>
                )}
                <input type="file" accept="video/mp4,video/*" className="hidden" onChange={handleUpload} disabled={uploading} />
              </label>
              {videoUrl && (
                <button onClick={removeVideo} className="mt-2 w-full text-xs text-red-400 hover:text-red-300 text-center">
                  Remove current video
                </button>
              )}
            </div>
          )}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/20 backdrop-blur-sm text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-8 font-body border border-primary/30">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Innovation · Integration · Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Enterprise-Grade{" "}
            <span className="text-primary">Audio Visual</span>{" "}
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-white/60 font-body leading-relaxed mb-10 max-w-2xl"
          >
            We design, install, and manage cutting-edge AV and UC solutions that drive
            business transformation and create exceptional digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium font-body hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 group"
            >
              Speak to a Specialist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-medium font-body hover:bg-white/20 transition-all"
            >
              Explore Our Work
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const layers = [
  {
    id: 1,
    name: "Ultra Matte Finish",
    description:
      "The outermost protective layer that resists daily wear, stains, and scratches. Our advanced formulation maintains its clarity while providing superior protection against high traffic.",
    features: ["Scuff resistance", "Stain protection", "Clear finish"],
    thickness: "20 mil",
    color: "#f0f9ff",
    borderColor: "#3b82f6",
    textColor: "#1d4ed8",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Scratch Resistance",
    description:
      "Our specialized UV protective coating prevents color fading from sunlight exposure and artificial lighting, preserving the floor's appearance for years to come.",
    features: ["UV protection", "Color preservation", "Anti-yellowing"],
    thickness: "2 mil",
    color: "#f5f3ff",
    borderColor: "#8b5cf6",
    textColor: "#6d28d9",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 00-4.472 10A5.982 5.982 0 0010 16a5.982 5.982 0 004.472-2A6 6 0 0010 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "One High Resolution Color",
    description:
      "High-definition printing technology creates realistic wood, stone, or custom patterns. This layer provides the rich visual aesthetics that define the character of your floor.",
    features: ["HD printing", "Realistic textures", "Designer patterns"],
    thickness: "6 mil",
    color: "#fef2f2",
    borderColor: "#ef4444",
    textColor: "#b91c1c",
    pattern: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
        <path
          fillRule="evenodd"
          d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Shock Absorbent LVT",
    description:
      "A specially engineered core that provides dimensional stability, comfort underfoot, and sound absorption qualities for a quieter, more comfortable environment.",
    features: ["Stability", "Comfort", "Noise reduction"],
    thickness: "14 mil",
    color: "#ecfdf5",
    borderColor: "#10b981",
    textColor: "#047857",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Acoustic Foam in the Middle",
    description:
      "Enhances structural integrity and prevents warping even in challenging environments with temperature or humidity fluctuations.",
    features: ["Warp resistance", "Temperature stable", "Humidity resistant"],
    thickness: "13 mil",
    color: "#fffbeb",
    borderColor: "#f59e0b",
    textColor: "#b45309",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 01-2.929 6.54c-.06 0-.12-.001-.18-.003a4.001 4.001 0 01-7.668-1.097 3.001 3.001 0 01.11-5.644l3.69-3.69A1 1 0 019 8.172z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Strengthening SPC Core",
    description:
      "A rigid support layer that adds structural strength while allowing for easy installation over various subfloor types, including those with minor imperfections.",
    features: [
      "Structural support",
      "Installation ease",
      "Subfloor compatibility",
    ],
    thickness: "35 mil",
    color: "#f0fdf4",
    borderColor: "#22c55e",
    textColor: "#15803d",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Click Underlay or Glue",
    description:
      "The foundation layer that reduces impact noise, enhances comfort, and provides additional moisture protection, making the floor suitable for all areas of your home.",
    features: ["Sound insulation", "Comfort enhancement", "Moisture barrier"],
    thickness: "40 mil",
    color: "#f8fafc",
    borderColor: "#64748b",
    textColor: "#334155",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
      </svg>
    ),
  },
];

export default function VinylFloorLayers() {
  const [activeLayer, setActiveLayer] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [autoPlayIndex, setAutoPlayIndex] = useState(null);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  // Initial animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-play demonstration
  useEffect(() => {
    if (autoPlayIndex !== null) {
      const nextLayer = layers[autoPlayIndex];
      setActiveLayer(nextLayer);

      timerRef.current = setTimeout(() => {
        const nextIndex = (autoPlayIndex + 1) % layers.length;
        setAutoPlayIndex(nextIndex);
      }, 4000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [autoPlayIndex]);

  const handleLayerHover = (layer) => {
    // Stop auto-play when user interacts
    setAutoPlayIndex(null);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setActiveLayer(layer);
  };

  const handleLayerLeave = () => {
    if (!isExpanded) {
      setActiveLayer(null);
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && activeLayer === null) {
      setActiveLayer(layers[0]);
    }
  };

  const toggleExplode = () => {
    setIsExploding(!isExploding);
  };

  const startAutoPlay = () => {
    setAutoPlayIndex(0);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-70 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden relative flex items-center"
    >
      {/* Dynamic background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>

        {/* Animated gradient overlay */}
        <div
          className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-blue-900/5 to-purple-900/5 opacity-50"
          style={{
            animation: "pulse 8s infinite alternate",
          }}
        ></div>

        {/* Particle effect when active */}
        {activeLayer && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-40"
                style={{
                  backgroundColor: activeLayer.borderColor,
                  width: Math.random() * 6 + 2 + "px",
                  height: Math.random() * 6 + 2 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                  animation: `float ${Math.random() * 10 + 5}s infinite linear`,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            7-Layer Vinyl Flooring System
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover the technology that makes our floors extraordinary
          </motion.p>

          {/* Interactive controls */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <button
              onClick={toggleExpanded}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isExpanded
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {isExpanded ? "Lock View" : "Pin Layers"}
            </button>
            <button
              onClick={toggleExplode}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isExploding
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {isExploding ? "Collapse" : "Explode View"}
            </button>
            {autoPlayIndex === null ? (
              <button
                onClick={startAutoPlay}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 transition-all"
              >
                Auto Demo
              </button>
            ) : (
              <button
                onClick={() => setAutoPlayIndex(null)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-green-600 text-white transition-all"
              >
                Stop Demo
              </button>
            )}
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Layer visualization */}
          <div className="w-full lg:w-1/2 relative" style={{ height: "600px" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {layers.map((layer, index) => {
                const isActive = activeLayer?.id === layer.id;
                const baseOffset = (index - 3) * 70;

                // Calculate dynamic offsets based on various states
                let offset = isAnimated ? baseOffset : 0;

                // Apply "explode" effect if enabled
                if (isExploding && isAnimated) {
                  offset = (index - 3) * 120;
                }

                // Apply hover effect for active layer
                if (isActive && isAnimated) {
                  offset += isExploding ? 0 : 15;
                }

                const delay = index * 0.3;
                const zIndex = layers.length - index;

                return (
                  <motion.div
                    key={layer.id}
                    className={`absolute w-full max-w-md flex items-center px-2 py-3 rounded-lg cursor-pointer transition-all duration-500 backdrop-blur-sm ${
                      isActive ? "z-50" : ""
                    }`}
                    style={{
                      backgroundColor: `${layer.borderColor}${
                        isActive ? "30" : "20"
                      }`,
                      border: `1px solid ${layer.borderColor}${
                        isActive ? "" : "80"
                      }`,
                      boxShadow: isActive
                        ? `0 0 20px ${layer.borderColor}40`
                        : "none",
                      transform: `translateY(${offset}px)`,
                      opacity: isAnimated ? 1 : 0,
                      transitionDelay: `${delay}s`,
                      zIndex,
                    }}
                    onMouseEnter={() => handleLayerHover(layer)}
                    onMouseLeave={handleLayerLeave}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: isAnimated ? 1 : 0,
                      y: isAnimated ? offset : 100,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: delay,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    whileHover={{
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                          style={{
                            backgroundColor: layer.borderColor,
                            boxShadow: isActive
                              ? `0 0 15px ${layer.borderColor}`
                              : "none",
                          }}
                        >
                          <span className="text-white font-bold">
                            {layer.id}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-lg text-white">
                            {layer.name}
                          </span>
                          {isActive && (
                            <div
                              className="text-xs mt-1 opacity-80"
                              style={{ color: layer.borderColor }}
                            >
                              {layer.features.join(" • ")}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm bg-black/30 px-2 py-1 rounded-full"
                          style={{ color: layer.borderColor }}
                        >
                          {layer.thickness}
                        </span>
                        <div
                          className="hidden md:flex h-8 w-8 rounded-full items-center justify-center"
                          style={{ backgroundColor: `${layer.borderColor}30` }}
                        >
                          {layer.icon}
                        </div>
                      </div>
                    </div>

                    {/* Creative connection path to detail panel */}
                    {isActive && (
                      <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                        style={{
                          width: "150px",
                          height: "40px", // Increased height for curve
                          transform: "translateX(100%)",
                          zIndex: 100,
                          overflow: "visible",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Curved path with gradient */}
                        <svg
                          width="150"
                          height="40"
                          viewBox="0 0 150 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ position: "absolute", left: 0, top: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id={`gradient-${layer.id}`}
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stopColor={layer.borderColor}
                                stopOpacity="0.7"
                              />
                              <stop
                                offset="100%"
                                stopColor={layer.borderColor}
                                stopOpacity="1"
                              />
                            </linearGradient>
                          </defs>

                          <motion.path
                            d="M0,20 C40,20 60,35 110,20 L140,20"
                            stroke={`url(#gradient-${layer.id})`}
                            strokeWidth="2"
                            strokeDasharray="1 0"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />

                          {/* Animated dots along the path */}
                          <motion.circle
                            cx="0"
                            cy="0"
                            r="3"
                            fill={layer.borderColor}
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: [0, 1, 0],
                              pathOffset: [0, 1],
                              pathLength: 0,
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <animateMotion
                              dur="1.5s"
                              repeatCount="indefinite"
                              path="M0,20 C40,20 60,35 110,20 L140,20"
                            />
                          </motion.circle>
                        </svg>

                        {/* Animated arrow at the end */}
                        <motion.div
                          className="absolute"
                          style={{ right: "0px", top: "10px" }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: 0.7,
                            type: "spring",
                            stiffness: 200,
                            damping: 10,
                          }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                              stroke={layer.borderColor}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          {/* Pulse effect behind arrow */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: layer.borderColor }}
                            initial={{ opacity: 0.3, scale: 0.8 }}
                            animate={{
                              opacity: [0.3, 0.1, 0.3],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "loop",
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Layer pattern indicator */}
                    {layer.pattern && (
                      <div
                        className="absolute -right-2 -top-2 w-5 h-5 rounded-full border-2 border-white"
                        style={{ backgroundColor: layer.borderColor }}
                      >
                        <span className="absolute inset-0 flex items-center justify-center text-white text-xs">
                          P
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Layer details panel */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-2xl p-0 overflow-hidden h-[500px] relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {!activeLayer && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                  <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 relative">
                    <svg
                      className="w-10 h-10 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      ></path>
                    </svg>

                    {/* Animated rings */}
                    <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-ping-slow"></div>
                    <div
                      className="absolute inset-0 rounded-full border-2 border-blue-400/20"
                      style={{
                        animation:
                          "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
                        animationDelay: "0.5s",
                      }}
                    ></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-200 mb-3">
                    Explore Our Premium Layers
                  </h3>
                  <p className="text-gray-400 max-w-md">
                    Hover over each layer in the visualization to discover the
                    advanced technology behind our premium vinyl flooring
                    system.
                  </p>

                  {/* Tutorial hint */}
                  <div className="mt-8 flex items-center gap-2 text-blue-400/70 text-sm">
                    <svg
                      className="w-5 h-5 animate-bounce"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Try hovering over the layers</span>
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {activeLayer && (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    key={activeLayer.id}
                  >
                    <div
                      className="px-8 py-6 border-b border-gray-700 relative overflow-hidden"
                      style={{
                        backgroundColor: `${activeLayer.borderColor}15`,
                      }}
                    >
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-5">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                              backgroundColor: activeLayer.borderColor,
                              width: `${Math.random() * 100 + 50}px`,
                              height: `${Math.random() * 100 + 50}px`,
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              opacity: Math.random() * 0.3,
                            }}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className="w-14 h-14 rounded-lg flex items-center justify-center relative"
                            style={{ backgroundColor: activeLayer.borderColor }}
                            initial={{ scale: 0.8, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 10,
                            }}
                          >
                            <span className="text-white font-bold text-xl">
                              {activeLayer.id}
                            </span>

                            {/* Ripple effect */}
                            <motion.div
                              className="absolute inset-0 rounded-lg"
                              initial={{ opacity: 0.8, scale: 1 }}
                              animate={{ opacity: 0, scale: 1.3 }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                              }}
                              style={{
                                borderWidth: "2px",
                                borderStyle: "solid",
                                borderColor: activeLayer.borderColor,
                              }}
                            />
                          </motion.div>
                          <div>
                            <div className="text-sm text-gray-400 flex items-center gap-2">
                              <span>{activeLayer.thickness} thickness</span>
                              <span className="inline-block w-1 h-1 rounded-full bg-gray-500"></span>
                              <span>Layer {activeLayer.id} of 7</span>
                            </div>
                            <motion.h3
                              className="text-2xl font-bold"
                              style={{ color: activeLayer.borderColor }}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.4 }}
                            >
                              {activeLayer.name}
                            </motion.h3>
                          </div>
                        </div>

                        <div className="hidden md:block">
                          <div
                            className="h-12 w-12 rounded-full flex items-center justify-center"
                            style={{
                              backgroundColor: `${activeLayer.borderColor}30`,
                            }}
                          >
                            {activeLayer.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 h-[calc(100%-88px)] overflow-auto">
                      <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <div className="relative">
                          <div
                            className="absolute top-0 left-0 bottom-0 w-1 rounded-full"
                            style={{ backgroundColor: activeLayer.borderColor }}
                          ></div>
                          <div className="pl-6">
                            <p className="text-gray-300 leading-relaxed text-lg">
                              {activeLayer.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-4 flex items-center">
                          <span
                            className="inline-block w-2 h-2 mr-2 rounded-full"
                            style={{ backgroundColor: activeLayer.borderColor }}
                          ></span>
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {activeLayer.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              className="px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center space-x-3 group hover:border-opacity-100 transition-all"
                              style={{
                                borderColor: `${activeLayer.borderColor}40`,
                              }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.3 + index * 0.1,
                              }}
                              whileHover={{
                                backgroundColor: `rgba(${parseInt(
                                  activeLayer.borderColor.slice(1, 3),
                                  16
                                )}, ${parseInt(
                                  activeLayer.borderColor.slice(3, 5),
                                  16
                                )}, ${parseInt(
                                  activeLayer.borderColor.slice(5, 7),
                                  16
                                )}, 0.15)`,
                                y: -2,
                                transition: { duration: 0.2 },
                              }}
                            >
                              <div
                                className="w-6 h-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                                style={{
                                  backgroundColor: activeLayer.borderColor,
                                }}
                              >
                                <span className="text-white text-xs font-bold">
                                  {index + 1}
                                </span>
                              </div>
                              <span className="text-gray-300 font-medium">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Layer-specific visualization */}
                        <div className="mt-6 pt-6 border-t border-gray-700/50">
                          <div className="bg-gray-800/30 rounded-lg p-4 flex items-center">
                            <div
                              className="w-16 h-16 rounded-lg mr-4 flex items-center justify-center"
                              style={{
                                backgroundColor: `${activeLayer.borderColor}20`,
                                borderLeft: `3px solid ${activeLayer.borderColor}`,
                              }}
                            >
                              {activeLayer.icon}
                            </div>
                            <div>
                              <h5
                                className="text-sm font-semibold mb-1"
                                style={{ color: activeLayer.borderColor }}
                              >
                                Layer Highlight
                              </h5>
                              <p className="text-gray-400 text-sm">
                                This {activeLayer.thickness} layer contributes
                                to the overall
                                {activeLayer.id <= 3
                                  ? " aesthetic appeal and protection"
                                  : activeLayer.id <= 5
                                  ? " comfort and stability"
                                  : " structural integrity and installation ease"}{" "}
                                of our premium vinyl flooring.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Our 7-layer vinyl flooring technology combines durability, comfort,
            and aesthetics to create a premium flooring solution for any space.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-900/20">
            Request a Sample
          </button>
        </motion.div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.4;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}

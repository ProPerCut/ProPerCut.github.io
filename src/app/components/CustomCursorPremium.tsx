import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scissors } from "lucide-react";

export function CustomCursorPremium() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [clickEffect, setClickEffect] = useState<{ x: number; y: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Don't show custom cursor on mobile
    if (isMobile) {
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }

    // Hide default cursor
    const style = document.createElement('style');
    style.textContent = '* { cursor: none !important; }';
    document.head.appendChild(style);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.hasAttribute("data-interactive") ||
        target.classList.contains("interactive");
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      setClickEffect({ x: e.clientX, y: e.clientY });
      
      // Create premium "snip" sound
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Premium snip sound - sharper, cleaner
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.08);
        
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.08);
      } catch (error) {
        // Silently fail if audio context is not available
      }

      setTimeout(() => setClickEffect(null), 600);
    };

    const handleMouseUp = () => {
      setTimeout(() => setIsClicking(false), 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      style.remove();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main scissors cursor - FIXED ORIENTATION */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.3,
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.6 : 1.2,
            rotate: isClicking ? 45 : isHovering ? 15 : 0,
          }}
          transition={{
            type: "spring",
            damping: isClicking ? 8 : 15,
            stiffness: isClicking ? 1000 : 400,
          }}
        >
          {/* Scissors with proper orientation and cutting animation */}
          <div className="relative">
            {/* Top blade */}
            <motion.div
              animate={{
                rotate: isClicking ? -25 : 0,
              }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 500,
              }}
              className="absolute origin-bottom-right"
            >
              <Scissors
                size={48}
                className={`${
                  isHovering ? "text-cyan-400" : "text-white"
                } drop-shadow-[0_0_12px_currentColor] transition-colors duration-200`}
                strokeWidth={2}
                style={{ transform: "rotate(90deg)" }}
              />
            </motion.div>
            
            {/* Bottom blade */}
            <motion.div
              animate={{
                rotate: isClicking ? 25 : 0,
              }}
              transition={{
                type: "spring",
                damping: 10,
                stiffness: 500,
              }}
              className="absolute origin-bottom-right"
            >
              <Scissors
                size={48}
                className={`${
                  isHovering ? "text-red-500" : "text-white"
                } drop-shadow-[0_0_12px_currentColor] opacity-70 transition-colors duration-200`}
                strokeWidth={2}
                style={{ transform: "rotate(90deg)" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Cursor glow trail */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 300,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 2 : isHovering ? 1.5 : 1,
          }}
          className={`w-8 h-8 rounded-full ${
            isHovering ? "bg-cyan-500" : "bg-red-500"
          } opacity-20 blur-xl`}
        />
      </motion.div>

      {/* Click effect - ripple */}
      <AnimatePresence>
        {clickEffect && (
          <>
            <motion.div
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="fixed top-0 left-0 z-[9997] pointer-events-none"
              style={{
                x: clickEffect.x - 30,
                y: clickEffect.y - 30,
              }}
            >
              <div className="w-16 h-16 border-2 border-cyan-400 rounded-full" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.3, opacity: 0.8 }}
              animate={{ scale: 2.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed top-0 left-0 z-[9997] pointer-events-none"
              style={{
                x: clickEffect.x - 30,
                y: clickEffect.y - 30,
              }}
            >
              <div className="w-16 h-16 border-2 border-red-500 rounded-full" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hover indicator for interactive elements */}
      {isHovering && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="fixed top-0 left-0 z-[9996] pointer-events-none"
          style={{
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
          }}
        >
          <div className="w-20 h-20 border border-cyan-400/30 rounded-full animate-pulse" />
        </motion.div>
      )}
    </>
  );
}

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ImageSlotProps {
  src?: string
  alt?: string
  caption?: string
  subcaption?: string
  className?: string
  aspectRatio?: string // e.g. "aspect-[4/3]", "aspect-[16/9]", "aspect-[3/2]"
}

export function ImageSlot({
  src,
  alt = 'Image placeholder',
  caption,
  subcaption,
  className,
  aspectRatio = 'aspect-[4/3]',
}: ImageSlotProps) {
  return (
    <div className={cn('w-full group', className)}>
      <div
        className={cn(
          'relative w-full overflow-hidden bg-zinc-950 border border-zinc-800/80 transition-colors duration-500 group-hover:border-zinc-700',
          aspectRatio
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          /* Blank editorial placeholder ready for future image */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-b from-zinc-900/40 to-black/80">
            {/* Subtle framing corners */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-zinc-700/60" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-zinc-700/60" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-zinc-700/60" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-zinc-700/60" />

            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 group-hover:text-zinc-400 transition-colors">
                [ Image Slot ]
              </span>
              <span className="text-xs text-zinc-600 font-light max-w-[200px] truncate">
                {alt}
              </span>
            </div>
          </div>
        )}
      </div>

      {(caption || subcaption) && (
        <div className="mt-4">
          {caption && (
            <p className="text-xs text-gray-500 tracking-widest uppercase font-mono">
              {caption}
            </p>
          )}
          {subcaption && (
            <p className="text-[11px] text-gray-600 tracking-wider uppercase mt-0.5">
              {subcaption}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

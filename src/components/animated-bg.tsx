'use client'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base dark */}
      <div className="absolute inset-0 bg-black" />

      {/* Orb 1 - Indigo top-left */}
      <div
        className="absolute -top-[10%] left-[5%] w-[500px] h-[500px] rounded-full animate-orb1"
        style={{
          background:
            'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(99,102,241,0) 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Orb 2 - Cyan center-right */}
      <div
        className="absolute top-[30%] right-[5%] w-[450px] h-[450px] rounded-full animate-orb2"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(6,182,212,0) 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Orb 3 - Purple bottom-left */}
      <div
        className="absolute bottom-[0%] left-[30%] w-[600px] h-[600px] rounded-full animate-orb3"
        style={{
          background:
            'radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(168,85,247,0) 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Orb 4 - Blue accent top-right */}
      <div
        className="absolute top-[10%] right-[20%] w-[300px] h-[300px] rounded-full animate-orb1"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)',
          filter: 'blur(60px)',
          animationDelay: '-5s',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}

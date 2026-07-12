import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2, isActive: false };
    
    // Trail configuration
    const trailLength = 40;
    const trail = Array.from({ length: trailLength }, () => ({ x: width / 2, y: height / 2 }));

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseOut = () => {
      mouse.isActive = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      if (mouse.isActive) {
        // Smoothly move the head of the snake to the mouse
        trail[0].x += (mouse.x - trail[0].x) * 0.5;
        trail[0].y += (mouse.y - trail[0].y) * 0.5;
      }

      // Move the rest of the snake body
      for (let i = 1; i < trailLength; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.45;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.45;
      }

      // Draw the sci-fi snake trail
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      // Start path for the trail
      for (let i = 1; i < trailLength; i++) {
        const progress = i / trailLength;
        const thickness = 3 * (1 - progress); // Made it much thinner
        const opacity = 1 - progress;
        
        ctx.beginPath();
        ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
        ctx.lineTo(trail[i].x, trail[i].y);
        
        // Vibrant neon cyan color for the core line
        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
        ctx.lineWidth = thickness;
        
        // Sci-fi Glow effect
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(0, 212, 255, ${opacity})`;
        
        ctx.stroke();
      }

      // Add a sci-fi glowing ring that trails slightly behind
      if (trail[5]) {
        ctx.beginPath();
        ctx.arc(trail[5].x, trail[5].y, 12, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 212, 255, 0.6)`;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(0, 212, 255, 0.6)`;
        ctx.stroke();
      }

      // Add a bright core dot at the cursor head
      if (mouse.isActive) {
        ctx.beginPath();
        ctx.arc(trail[0].x, trail[0].y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(0, 212, 255, 1)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  );
};

export default CursorEffect;

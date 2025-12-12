// import React, { useEffect, useState } from 'react';
// import './FloatingEmojis.css';

// const emojis = ['🚀', '💻', '⚡', '🎯', '✨', '🔥', '👨‍💻', '🔧', '📱', '💾'];

// const FloatingEmojis = () => {
//   const [floatingEmojis, setFloatingEmojis] = useState([]);

//   useEffect(() => {
//     const createEmoji = () => {
//       const emoji = emojis[Math.floor(Math.random() * emojis.length)];
//       const x = Math.random() * 100;
//       const duration = 10 + Math.random() * 20;
//       const size = 20 + Math.random() * 30;

//       setFloatingEmojis(prev => [
//         ...prev,
//         { id: Date.now(), emoji, x, duration, size }
//       ]);

//       setTimeout(() => {
//         setFloatingEmojis(prev => prev.filter(e => e.id !== Date.now()));
//       }, duration * 1000);
//     };

//     const interval = setInterval(createEmoji, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="floating-emojis">
//       {floatingEmojis.map(({ id, emoji, x, duration, size }) => (
//         <div
//           key={id}
//           className="floating-emoji"
//           style={{
//             left: `${x}vw`,
//             animationDuration: `${duration}s`,
//             fontSize: `${size}px`
//           }}
//         >
//           {emoji}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FloatingEmojis;
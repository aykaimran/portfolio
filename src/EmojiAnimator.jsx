import React from 'react';

const emojis = [
    { emoji: '💻', className: 'emoji-1' },
    { emoji: '🔥', className: 'emoji-2' },
    { emoji: '💡', className: 'emoji-3' },
    { emoji: '🚀', className: 'emoji-4' },
    { emoji: '⚙️', className: 'emoji-5' },
    // Add more emojis and classes if you want more floating elements
];

const EmojiAnimator = () => {
    return (
        <div className="emoji-container">
            {emojis.map((item, index) => (
                <span 
                    key={index} 
                    className={`floating-emoji ${item.className}`}
                    // Add style to ensure random starting positions for variety
                    style={{
                        left: `${Math.random() * 90 + 5}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                >
                    {item.emoji}
                </span>
            ))}
        </div>
    );
};

export default EmojiAnimator;
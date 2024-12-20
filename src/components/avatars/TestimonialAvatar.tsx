import React from 'react';

type AvatarProps = {
  variant: 'glasses-girl' | 'cap-guy' | 'short-hair-girl' | 'glasses-guy' | 'anonymous' | 'long-hair-girl';
  className?: string;
};

export const TestimonialAvatar: React.FC<AvatarProps> = ({ variant, className = "" }) => {
  return (
    <div className={`w-20 h-20 bg-white rounded-full border-4 border-black ${className}`}>
      <img 
        src={`/lovable-uploads/4c7daa15-c20b-4208-a88c-46c75ba0bc9a.png`} 
        alt="Avatar illustration"
        className="w-full h-full object-cover"
        style={{
          clipPath: 'circle(50%)',
          objectPosition: getAvatarPosition(variant)
        }}
      />
    </div>
  );
};

const getAvatarPosition = (variant: string): string => {
  const positions = {
    'glasses-girl': '0% 0%',      // Top-left avatar
    'cap-guy': '33.33% 0%',      // Top row, second avatar
    'short-hair-girl': '66.66% 0%', // Top row, third avatar
    'glasses-guy': '100% 0%',     // Top-right avatar
    'anonymous': '33.33% 33.33%', // Middle row, second avatar
    'long-hair-girl': '66.66% 66.66%' // Middle row, third avatar
  };
  return positions[variant as keyof typeof positions] || '0% 0%';
};
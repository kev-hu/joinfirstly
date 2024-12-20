import React from 'react';

type AvatarVariant = 'glasses-girl' | 'cap-guy' | 'short-hair-girl' | 'glasses-guy' | 'anonymous' | 'long-hair-girl';

type AvatarProps = {
  variant: AvatarVariant;
  className?: string;
};

type AvatarStyle = {
  [key: string]: string;
};

type AvatarStyles = {
  [K in AvatarVariant]: AvatarStyle;
};

export const TestimonialAvatar: React.FC<AvatarProps> = ({ variant, className = "" }) => {
  // Map of avatar styles for each variant
  const avatarStyles: AvatarStyles = {
    'glasses-girl': {
      hair: "M10 15C10 12 12 10 15 10C18 10 20 12 20 15",
      face: "M15 20C18.866 20 22 16.866 22 13C22 9.13401 18.866 6 15 6C11.134 6 8 9.13401 8 13C8 16.866 11.134 20 15 20Z",
      glasses: "M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z M18 14C18.5523 14 19 13.5523 19 13C19 12.4477 18.5523 12 18 12C17.4477 12 17 12.4477 17 13C17 13.5523 17.4477 14 18 14Z"
    },
    'cap-guy': {
      cap: "M8 12C8 8.68629 10.6863 6 14 6H16C19.3137 6 22 8.68629 22 12V14H8V12Z",
      face: "M12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20Z"
    },
    'short-hair-girl': {
      hair: "M12 6C8.68629 6 6 8.68629 6 12V16H18V12C18 8.68629 15.3137 6 12 6Z",
      face: "M12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20Z"
    },
    'anonymous': {
      mask: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
      eyes: "M8.5 12H8.51 M15.5 12H15.51"
    },
    'long-hair-girl': {
      hair: "M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12V20H6V12Z",
      face: "M12 18C15.866 18 19 14.866 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 14.866 8.13401 18 12 18Z"
    },
    'glasses-guy': {
      face: "M12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20Z",
      glasses: "M10 14C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14Z M16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14Z"
    }
  };

  const getAvatarContent = () => {
    const style = avatarStyles[variant];
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full"
      >
        {Object.entries(style).map(([part, path], index) => (
          <path key={`${variant}-${part}-${index}`} d={path} />
        ))}
      </svg>
    );
  };

  return (
    <div className={`w-20 h-20 bg-white rounded-full border-4 border-black ${className}`}>
      {getAvatarContent()}
    </div>
  );
};
'use client';
import { getImageUrlV2 } from '@/utils/utils';

function MyAvatar({ person, size }:any) {
    const imgSize = size < 90 ? 's':'b';
  return (
    <img
      className="avatar"
      src={getImageUrlV2(person, imgSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function MyProfile() {
  return (
    <MyAvatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
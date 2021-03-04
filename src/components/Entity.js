import React from 'react';
import './Entity.css';

export default function Entity({entity}) {
  const positionX = entity.x * entity.width;
  const positionY = entity.y * entity.height;
  return (
    <div className="Entity"
      style={{
        width: entity.width,
        height: entity.height,
        left: positionX,
        top: positionY,
      }}
    >
    </div>
  );
}
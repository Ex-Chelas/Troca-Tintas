import React, { useState, useRef } from "react";
import "./ModelViewer.css";

interface ModelViewerProps {
  colorScheme: string | null; // Validated color scheme passed from D3ViewerPage
}

const ModelViewer: React.FC<ModelViewerProps> = ({ colorScheme }) => {
  const [currentFrame, setCurrentFrame] = useState(1); // Frame index
  const dragStartX = useRef<number | null>(null); // Track drag start position
  const totalFrames = 48; // Number of images in the sequence
  const dragSensitivity = 10; // Adjust this to control the speed of rotation

  // Handle the drag start
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dragStartX.current = e.clientX;
  };

  // Handle dragging
  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (dragStartX.current !== null) {
      const dragDistance = e.clientX - dragStartX.current;

      const frameShift = Math.round(dragDistance / dragSensitivity);
      if (frameShift !== 0) {
        let newFrame = (currentFrame - frameShift + totalFrames) % totalFrames;
        if (newFrame < 1) newFrame += totalFrames;

        setCurrentFrame(newFrame);
        dragStartX.current = e.clientX;
      }
    }
  };

  const handleDragEnd = () => {
    dragStartX.current = null;
  };

  // Get the image path for the current frame and color scheme
  const getImagePath = () => {
    return `/src/assets/master_of_executions/${colorScheme}/${String(currentFrame).padStart(
      2,
      "0"
    )}.jpg`;
  };
  
  console.log(getImagePath());

  return (
    <div className="viewer-container">
      <div
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        className="model-viewer"
        style={{
          backgroundImage: `url(${getImagePath()})`,
        }}
      ></div>
    </div>
  );
};

export default ModelViewer;

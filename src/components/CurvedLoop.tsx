import { useRef, useEffect, useState, useMemo, useId } from 'react';
import '../css/CurvedLoop.css';

const CurvedLoop = ({
  marqueeText = '',
  speed = 2,
  className,
  curveAmount = 400,
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
  }, [marqueeText]);

  const measureRef = useRef(null);
  const textPathRef = useRef(null);
  const pathRef = useRef(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const uid = useId();
  const pathId = `curve-${uid}`;

  const fontSize = 64; // 4rem
  const svgHeight = Math.abs(curveAmount) + fontSize; 
  const centerY = svgHeight / 2;
  

  const svgWidth = 1000; // match your .contact-card max-width
  const pathD = `M-50,${centerY} Q${svgWidth/2},${centerY + curveAmount} ${svgWidth + 50},${centerY}`;

  const textLength = spacing;
  const totalText = textLength
    ? Array(Math.ceil(1800 / textLength) + 2).fill(text).join('')
    : text;
  const ready = spacing > 0;

  // Measure text length
  useEffect(() => {
    if (measureRef.current) setSpacing(measureRef.current.getComputedTextLength());
  }, [text, className]);

  // Initialize start offset
  useEffect(() => {
    if (!spacing || !ready) return;
    const initial = -spacing;
    if (textPathRef.current) textPathRef.current.setAttribute('startOffset', initial + 'px');
    setOffset(initial);
  }, [spacing, ready]);

  // Animate continuously
  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (textPathRef.current) {
        let currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
        currentOffset -= speed; // always move left
        if (currentOffset <= -spacing) currentOffset += spacing;
        textPathRef.current.setAttribute('startOffset', currentOffset + 'px');
        setOffset(currentOffset);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  return (
    <div className="curved-loop-jacket" style={{ visibility: ready ? 'visible' : 'hidden' }}>
      <svg className="curved-loop-svg" viewBox={`0 0 1440 ${svgHeight}`}>
        <text ref={measureRef} xmlSpace="preserve" style={{ visibility: 'hidden', opacity: 0 }}>
          {text}
        </text>
        <defs>
          <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>
        {ready && (
          <text fontWeight="bold" xmlSpace="preserve" className={className} dominantBaseline="hanging" textAnchor="middle">
            <textPath ref={textPathRef} href={`#${pathId}`} startOffset={offset + 'px'} xmlSpace="preserve">
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;

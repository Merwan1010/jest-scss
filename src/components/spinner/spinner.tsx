// Spinner.tsx
import React from 'react'

interface Props {
  color?: "white" | "black";
}

const Spinner: React.FC<Props> = ({ color = "black" }) => {
  const rgbaColor: number = color === "white" ? 255 : 0;
  const spinnerStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    border: `2px solid rgba(${rgbaColor}, ${rgbaColor}, ${rgbaColor}, 0.1)`,
    borderLeftColor: `rgba(${rgbaColor}, ${rgbaColor}, ${rgbaColor}, 0.6)`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }

  const keyframes = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `

  return (
    <div role="status" style={{ display: 'flex', alignItems: 'center' }}>
      <style>{keyframes}</style>
      <div style={spinnerStyle}></div>
    </div>
  )
}

export default Spinner

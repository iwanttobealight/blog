import * as React from 'react';

interface ButtonProps {
  color?: string
  shadowSize?: number
}

export const Button = (props: ButtonProps) => {
  const { color, shadowSize } = props
  return (
    <button style={{ color: `${color}`, shadowSize: `${shadowSize}` }}>
      click me
    </button>
  )
}

import * as React from 'react';

interface ButtonProps {
  color?: string
  shadowSize?: number
  children?: any
}

export const Button = (props: ButtonProps) => {
  const { color, shadowSize } = props
  return (
    <button onClick={() => console.log('hello world')} style={{ color: `${color}`, shadowSize: `${shadowSize}` }}>
      {props.children}
    </button>
  )
}

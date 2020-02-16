import * as React from 'react';

export const Button = (props) => {
  const { color, shadowSize } = props
  return (
    <button style={{ color: `${color}`, shadowSize: `${shadowSize}` }}>
      click me
    </button>
  )
}

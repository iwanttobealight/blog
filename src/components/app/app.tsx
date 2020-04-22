import * as React from 'react';
import { Button } from '../button';
var fs = require('fs');


export const App = () => {
  const buffer = fs.readFileSync(__dirname + '/assets/with_sharks.jpg')

  return <div className="app">
    <h1>Daria Moreno-Gogoleva</h1>
    <div style={{ display: 'flex' }}>
      <div style={{ paddingRight: '2rem' }}>
        <p>front end developer based in Saint Petersburg</p>
        <p>here will be my blog</p>
        <a href="https://twitter.com/twanttobealighi">twitter</a>
      </div>
      <div>
        <img style={{ display: 'flex', marginLeft: 'auto' }} height="300" src={`data:image/jpg;base64,${buffer.toString('base64')}`} />
        <p style={{ fontSize: '0.7rem', textAligh: 'center' }}>it's me with sharks</p>
        <Button>do nothing</Button>
      </div>
    </div>
  </div>
}


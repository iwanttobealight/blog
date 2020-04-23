import React from 'react';
import './App.css'

export const App = () => {
  return (<main>
    <h1>Дарья Морено-Гоголева, веб-разработчица</h1>
    <section className="about">
      <div className="text-wrapper">
        <p>живу в Петербурге, делаю фронтенд в <a target="_blank" rel="noopener noreferrer" href="https://breadhead.ru">хлебушке</a></p>
        <p>люблю тесты и чистый код</p>
        <p>организую локальный митап по <a target="_blank" rel="noopener noreferrer" href="https://nodeschool.io/spb/">node.js</a></p>
      </div>
    </section>
  </main>)
}

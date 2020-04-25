import React from 'react';
import fs from 'fs'


export const App = () => {

  const buffer = fs.readFileSync(__dirname + '/../../../assets/images/me.png')

  return (<main>
    <h1>Дарья Морено-Гоголева, веб-разработчица</h1>
    <section className="about">
      <img className="image" src={`data:image/png;base64,${buffer.toString('base64')}`} alt="me" />
      <div className="text-wrapper">
        <p>живу в Петербурге, делаю фронтенд в <a target="_blank" rel="noopener noreferrer" href="https://breadhead.ru">хлебушке</a></p>
        <p>люблю поэзию и архитектурные прогулки</p>
        <p>здесь будет мой модный инди-блог с веб-меншенами и всем на свете</p>
      </div>
    </section>
  </main>)
}

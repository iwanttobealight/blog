import React from 'react';
import pngUrl from '../../../assets/images/me.png'
import webpUrl from '../../../public/assets/images/me.webp'

export const App = () => {
  return (<main>
    <h1>Дарья Морено-Гоголева, веб-разработчица</h1>
    <section className="about">
      <picture className="image">
        <source srcSet={webpUrl} type="image/webp" />
        <img src={pngUrl} alt="its me" width="200" loading="lazy" />
    </picture>
        <div className="text-wrapper">
          <p>живу в Петербурге, делаю фронтенд в <a target="_blank" rel="noopener noreferrer" href="https://breadhead.ru">хлебушке</a></p>
          <p>люблю поэзию и архитектурные прогулки</p>
          <p>здесь будет мой модный инди-блог с веб-меншенами и всем на свете</p>
        </div>
    </section>
  </main>)
}

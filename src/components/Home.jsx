import React from 'react'

export default function Home() {
  return (
    <div>
        <section className="trending" id="food">
      <section className="trending-sushi">
        <div className="trending__content" data-aos="fade-right">
          <p className="sushi__subtitle">What’s Trending / トレンド</p>
  
          <h3 className="sushi__title">Hiragana <span style={{ color: '#b1454a' }}>Alphabet</span>
          </h3>
          <p className="sushi__description">Learn the Hiragana alphabet with us. It's easy and fun!
          </p>
  
          <ul className="trending__list flex-between">
            <li>
              <div className="trending__icon flex-center">
                <img src="../../src/assets/img/check.svg" alt="check" />
              </div>
              <p>あ (A)</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="../../src/assets/img/check.svg" alt="check" />
              </div>
              <p>い (I)</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="../../src/assets/img/check.svg" alt="check" />
              </div>
              <p>う (U)</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="../../src/assets/img/check.svg" alt="check" />
              </div>
              <p>え (E)</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="../../src/assets/img/check.svg" alt="check" />
              </div>
              <p>お (O)</p>
            </li>
            <li>
              <div className="trending__icon flex-center">
                <img src="../../src/assets/img/check.svg" alt="check" />
              </div>
              <p>か (KA)</p>
            </li>
          </ul>
        </div>
  
        <div className="trending__image flex-center">
          <img src="../../src/assets/img/learning.svg" alt="sushi-5" data-aos="fade-left" />
        </div>
      </section>
    </section>
    </div>
  )
}

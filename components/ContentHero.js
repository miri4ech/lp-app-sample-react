import React from 'react'

const ContentHero = () =>
  <section id='hero'>
    <div className='row'>
      <div className='six left'>
        <div className='hero-text'>
          <h1 className='responsive-headline'>Instant Win App <br />
          Cibo mutat nulla ei eam.Has molestie percipit an.</h1>

          <p>Lorem ipsum dolor sit amet, ea eum labitur scripserit, illum complectitur deterruisset at pro. </p>
        </div>

        <div className='buttons'>
          <a className='button trial' href='#'>Free Trial</a>
          <a className='button learn-more smoothscroll' href='#features'>Learn More</a>
        </div>

      </div>
      <div className='six right'>
        <img src='http://res.cloudinary.com/dwexdghrq/image/upload/v1503557341/demo_bqiojy.gif' />
        <img src='http://res.cloudinary.com/dwexdghrq/image/upload/v1503559016/iMac-Mockup_03_f0belx.png' />
      </div>
    </div>
  </section>

export default ContentHero

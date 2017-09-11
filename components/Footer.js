import React from 'react'

const Footer = () =>
  <footer>
    <div className='row'>
      <div className='six columns info'>
        <p>Lorem ipsum dolor sit amet, ea eum labitur scripserit, illum complectitur deterruisset at pro. Odio quaeque
          reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie percipit an. Falli
          volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto at mea.
          No soleat fabulas prodesset vel, ut quo solum dicunt.Nec et amet vidisse mentitum. Cibo mutat nulla ei
          eam.</p>
      </div>

      <div className='six columns right-cols'>
        <div className='row'>
          <div className='columns'>
            <h3 className='address'>Adress</h3>
            <p>Tokyo Japan</p>
          </div>

          <div className='columns last'>
            <h3 className='contact'>Contact Us</h3>
            <ul>
              <li><a href='/'>123-000-000</a></li>
              <li><a href='/'>test@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p className='copyright'>&copy; 2017 miri4ech</p>

      <div id='go-top'>
        {/* TODO:smoothscroll  */}
        <a
          className='smoothscroll'
          title='Back to Top'
          onClick={onClickBackToTop}>
          <i className='icon-up-open' />
        </a>
      </div>
    </div>
  </footer>

const onClickBackToTop = () => {
  // TODO: smoothscroll
  document.body.scrollTop = 0
}

export default Footer

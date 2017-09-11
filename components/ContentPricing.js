import React from 'react'

const ContentPricing = () =>

  <section id='pricing'>
    <div className='row section-head'>
      <h1>Pricing</h1>
      <p>Lorem ipsum dolor sit amet, ea eum labitur scripserit, illum complectitur deterruisset at pro. Odio quaeque
        reformidans est eu, expetendis intellegebat has ut, viderer invenire ut his. Has molestie percipit an. Falli
        volumus efficiantur sed id, ad vel noster propriae. Ius ut etiam vivendo, graeci iudicabit constituto at mea. No
        soleat fabulas prodesset vel, ut quo solum dicunt.Nec et amet vidisse mentitum. Cibo mutat nulla ei eam.</p>
    </div>

    <div className='row'>
      <div className='pricing-tables bgrid-quarters s-bgrid-halves'>
        <div className='column'>

          <div className='price-block'>
            <h3 className='plan-title'><i className='fa fa-cog' />Starter</h3>
            <p className='plan-price'>FREE <span>per month</span></p>

            <ul className='features'>
              <li>1GB Storage</li>
              <li>5GB Bandwidth</li>
              <li>2 Domains</li>
              <li>3 Databases</li>
              <li>1 FTP Account</li>
              <li>25 Email Accounts</li>
            </ul>

            <footer className='plan-sign-up'>
              <a className='button' href='#contact'>Contact</a>
            </footer>
          </div>
        </div>

        <div className='column'>
          <div className='price-block'>
            <h3 className='plan-title'><i className='fa fa-thumbs-up' />Standard</h3>
            <p className='plan-price'>$9.99 <span>per month</span></p>

            <ul className='features'>
              <li>3GB Storage</li>
              <li>10GB Bandwidth</li>
              <li>3 Domains</li>
              <li>5 Databases</li>
              <li>3 FTP Account</li>
              <li>30 Email Accounts</li>
            </ul>

            <footer className='plan-sign-up'>
              <a className='button' href='#contact'>Contact</a>
            </footer>
          </div>
        </div>

        <div className='column'>
          <div className='price-block'>
            <h3 className='plan-title'><i className='fa fa-star' />Premium</h3>
            <p className='plan-price'>$19.99 <span>per month</span></p>

            <ul className='features'>
              <li>10GB Storage</li>
              <li>25GB Bandwidth</li>
              <li>5 Domains</li>
              <li>10 Databases</li>
              <li>10 FTP Account</li>
              <li>50 Email Accounts</li>
            </ul>

            <footer className='plan-sign-up'>
              <a className='button' href='#contact'>Contact</a>
            </footer>
          </div>

        </div>

        <div className='column'>
          <div className='price-block'>
            <h3 className='plan-title'><i className='fa fa-trophy' />Ultimate</h3>
            <p className='plan-price'>$29.99 <span>per month</span></p>

            <ul className='features'>
              <li>30 Storage</li>
              <li>Unlimited Bandwidth</li>
              <li>10 Domains</li>
              <li>15 Databases</li>
              <li>10 FTP Account</li>
              <li>50 Email Accounts</li>
            </ul>

            <footer className='plan-sign-up'>
              <a className='button' href='#contact'>Contact</a>
            </footer>
          </div>
        </div>

      </div>
    </div>
  </section>

export default ContentPricing

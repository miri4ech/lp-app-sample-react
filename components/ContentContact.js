import React from 'react'

const ContentContact = () =>
  <section id="contact">
    <div className="row section-head">

      <div className="twelve columns">

        <h1>MailChimp signup form.</h1>

        <p>Adding your own MailChimp powered email sign-up is easy.
          Grab the super slim code from your MailChimp account and drop the code here. Lastly, remove the link and style
          tags
          that comes with the embedded code and your good to go. All styling is within our stylesheet.</p>

      </div>
    </div>

    <div className="row">
      <div className="twelve columns">
        <div id="mc_embed_signup">
          {/* TODO: form submit */}
          <form action="/" method="post" id="mc-embedded-contact-form" name="mc-embedded-contact-form">
            <input type="text" value="first_name" placeholder="First Name" name="First" required />
            <input type="text" value="last_name" placeholder="Last Name" name="Last" required />
            <textarea cols="100"></textarea>
            <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
            <input type="submit" value="contact" name="contact" id="mc-embedded-contact" className="button"/>
          </form>
        </div>
      </div>
    </div>
  </section>

export default ContentContact

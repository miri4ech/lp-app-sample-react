import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import React from 'react'
import theme, { styleSheet } from '../theme'

export default class Html extends Document {
  static async getInitialProps (context) {
    const {html, head, errorHtml, chunks} = context.renderPage()
    const styles = flush()
    return {html, head, errorHtml, chunks, styles}
  }

  render () {
    return (
      <html>
        <Head>
          <title>Ataton</title>
          <meta name='description' content='description' />
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content={[
              'user-scalable=0',
              'initial-scale=1',
              'maximum-scale=1',
              'minimum-scale=1',
              'width=device-width',
              'height=device-height'
            ].join(',')} />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='theme-color' content={theme.palette.primary[500]} />
          <link
            href='//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600|Roboto Mono'
            rel='stylesheet'
            type='text/css' />
          <style className='styleSheets'>
            {styleSheet()}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link href="https://{{cdn}}/prism@v1.x/themes/prism.css" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      <script src="https://kit.fontawesome.com/10ba25ad3c.js" crossorigin="anonymous"></script>
      <script src="https://{{cdn}}/prism@v1.x/components/prism-core.min.js"></script>
	    <script src="https://{{cdn}}/prism@v1.x/plugins/autoloader/prism-autoloader.min.js"></script>
    </Head>
    <Component {...pageProps} />
  </>
}




export default MyApp

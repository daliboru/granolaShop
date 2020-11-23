import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { IProduct } from '../components/Product';
import Footer from '../components/Footer';
import Head from 'next/head';
import '../public/styles.scss';

interface IIndexProps {
  products: IProduct[];
}
const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="YmZhYjhjOTUtNjRjOS00MWM2LTg0M2YtNzMwYTc3MjAzNGIxNjM3NDE3NDI4NTAzMzEzMzI0"
          id="snipcart"
        ></script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Header />
      <main className="main">
        <ProductList products={props.products} />
      </main>
      <Footer />
    </div>
  );
};
Index.getInitialProps = async ({ req }) => {
  return {
    products: [
      {
        id: 'nextjs_honeycrisp',
        name: 'Honeycrisp Apple Pie Granola',
        price: 9.0,
        size: '12oz. Pouch',
        image: '../static/gran1.png',
        description:
          'No matter the time of year, Honeycrisp Apple Pie is a flavor you know and love. Rather than spending hours baking to satisfy your craving, grab a bag of our delicious, clean-label granola!',
      } as IProduct,
      {
        id: 'nextjs_birthday ',
        name: 'Birthday Cake Granola',
        price: 6.0,
        size: '12oz. Pouch',
        image: '../static/gran2.png',
        description: `We put Birthday Cake in a bag so you can snack anywhere! Grab a big handful and let${`'`}s celebrate with our super-festive Birthday Cake Granola.`,
      } as IProduct,
    ],
  };
};
export default Index;

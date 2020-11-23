import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <img src="/static/logo.png" alt="" className="header__logo" />
      </Link>

      <a
        className="header__summary snipcart-checkout snipcart-summary"
        href="#"
        style={{ textDecoration: 'none' }}
      >
        <span className="header__price snipcart-total-price"></span>
      </a>
    </header>
  );
}

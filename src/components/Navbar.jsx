export default function Navbar(props) {
  const { toggleProducts, cart } = props;
  return (
    <nav>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.toggleProducts(false);
          }}>
          <img
            src="https://cache.dominos.com/olo/6.102.5/assets/build/images/img/dpz-logo.svg"
            alt="Domino's Pizza"
          />
        </a>
      </h1>
      <ul>
        <li>
          <a href="/pt/pages/order/">Encomenda online</a>
        </li>
        <li>
          <a
            href=""
            onClick={(event) => {
              event.preventDefault();
              props.toggleProducts(true);
            }}>
            Menu
          </a>
        </li>
        <li>
          <a href="/"> promoções</a>
        </li>
        <li>
          <a href="/">Lojas</a>
        </li>
        <li>
          <a href="/">Segue</a>
        </li>
        <li>
          <a href="/">English</a>
        </li>
        <li>
          <a href="/">franchising</a>
        </li>
        <li>
          <a href="/">login</a>
        </li>
        <li>
          <a href="/">carrinho({cart.length})</a>
        </li>
      </ul>
    </nav>
  );
}

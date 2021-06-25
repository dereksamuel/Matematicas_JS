const calcDiscountPrice = (price = 10, discount = 4) => {
  return ((price * (100 - discount)) / 100) || "0";
};

const handlerPriceDiscount = () => {
  const $price = document.getElementById("price").value;
  const $discount = document.getElementById("discount").value;
  const totalDiscount = calcDiscountPrice($price, $discount);

  document.querySelector("#app").innerHTML = `
    <form class="card">
      <img src="https://falabella.scene7.com/is/image/FalabellaCO/1745210_1?wid=800&hei=800&qlt=70">
      <div class="content">
        <div class="Discount">
        -${$discount}%
        <p>descuento</p>
        </div>
        <h3>Mi bici</h3>
        <p class="tachado">Original Price: $${$price}</p>
        <p>Total price: $${totalDiscount}</p>
        <button type="button">Comprar</button>
      </div>
    </form>
  `;
};

window.onload = () => {
  const originalPrice = 10000;
  const discount = 10;

  const discountTotal = calcDiscountPrice(originalPrice, discount);
  document.querySelector("#app").innerHTML = `
    <form class="card">
      <img src="https://falabella.scene7.com/is/image/FalabellaCO/1745210_1?wid=800&hei=800&qlt=70">
      <div class="content">
        <div class="Discount">
        -${discount}%
        <p>descuento</p>
        </div>
        <h3>Mi bici</h3>
        <p>Original Price: $${originalPrice}</p>
        <p>Total price: $${discountTotal}</p>
        <button type="button">Comprar</button>
      </div>
    </form>
  `;
};

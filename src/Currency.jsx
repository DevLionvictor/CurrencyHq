 import Landing from './Landing';

function Currency({short, rate, amount, symbol}) {
    function currencyFormat(num, symbol) {
        return symbol+'' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }
    const price =rate * amount;
  return (
    <div className="currency flex justify-between">
        <div class="currency-short">
            {short}
        </div>
        <div className="price">
            {currencyFormat(price, symbol)}
            <br /> <sub>Rate: {currencyFormat(rate, symbol)}</sub>
                    </div>

      
    </div>
  );
}

export default Currency;
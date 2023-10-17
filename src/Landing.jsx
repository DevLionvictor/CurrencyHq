import React, { useEffect, useState } from 'react'
import Currency from './Currency';
 
import './Styles.css';

function Landing() {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState('NGN');
  const [apiData, setApiData] = useState(null);
  const url="http://api.exchangeratesapi.io/v1/latest?access_key=d14ede3ac78a17c9ab9af1e9d997ce32&base=EUR";
  const Currencies = [
    {short: 'NGN', symbol: '₦'},
    {short: 'USD', symbol: '$'},
    {short: 'GBP', symbol: '£'},
    {short: 'CAD', symbol: '$'}
  ];

  useEffect(() => {
    //getting data from api
    fetch(url).then(response => response.json()).then(data => setApiData(data))
    .catch(error => console.log('Error:', error));
   

  }, []);
 
   function getRate(currency){
      
      if(apiData !== null){
        
        let rates =Object.entries(apiData.rates);
        let foundRate = rates.find(item => item.includes(currency));
        
        if (foundRate) {
          return foundRate[1];
        } else {
          return 0;
        }
               
             
        
        //console.log(rates);
        //apiData.rates.map((item) => item.includes('USD') ? console.log(item) : '');
       // console.log(apiData.rates)
      }
      else{
        return 0;
      }
     

   // return 300;
  }
  

  

   
const listItems = Currencies.map((item) =>  <Currency short={item.short} rate={getRate(item.short)} amount={amount} symbol={item.symbol} />);
 
  return (
     
     <div class="card">
       <h2>CurrencyHQ </h2>
       <p>Convert Currencies with live rates </p>
        <div>
           <select className="base-currency">
             <option value="">EUR</option>
           
             </select>
                <input type="number" className="" onChange={(e) => {setAmount(e.target.value)}} placeholder="Enter Amount"/> 
        </div>
        <div className="list">
        {listItems}
            
             
        </div>

         
     </div>
    
  );
}

export default Landing;

import { useState } from 'react'
import './App.css'
import InputBox from './Components/Inputbox'
import useCurrencyinfo from "./Components/useCurrencyinfo.js"

function App() {


  const [amount,setamount]= useState("");
  const [from,setfrom]= useState("usd");
  const [to,setto]= useState("inr");

  const [convertedAmount,setconvertedAmount]= useState("");
  const currencyInfo = useCurrencyinfo(from)
  const key  = Object.keys(currencyInfo);


  const swap=()=>{
    setfrom(to);
    setto(from);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  }


  const convert =()=>{
    setconvertedAmount(amount * currencyInfo[to]);
  }



  return (
    <div className='w-full flex justify-center items-center h-[100vh] text-black' style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D')" ,backgroundSize:"cover"}}>
      <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={setamount}
                                currencyOptions={key}
                                onCurrencyChange={(currency)=>setamount(amount)}
                                selectedCurrency={from}
                                className="mb-2"
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                onClick={swap}
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                onAmountChange={setamount}
                                currencyOptions={key}
                                onCurrencyChange={(currency)=>setto(currency)}
                                selectedCurrency={from}
                                amountdisabled={true}
                                className="mb-2"
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {to} to {from}
                        </button>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default App

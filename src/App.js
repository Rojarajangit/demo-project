import { useState,useEffect }from 'react'
import './App.css'
import productsData from './products.json'

function App() {
  const [textinput, settextinput] = useState('')
  const [products, setproducts] = useState(productsData)

  useEffect(() => {

  let filteredData=productsData.filter((product)=>
  product.name.toLowerCase().includes(textinput.toLowerCase())
  )
  setproducts(filteredData)
  }, [textinput])
  
  
  return (
    <div className="App">
      <div>
      <h1>Music Store</h1>
       <pre>{JSON.stringify(products,null, 2)}</pre>
       <input type="text" name="" id=""
  
       onChange={(e) => settextinput(e.target.value)}
       />
  
       <h3>This is the input={settextinput}</h3>
      </div>
       <div>
        {products.map((product)=>(
          <>
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
          <h2>${product.description}</h2>
          <img src={product.img} alt=""/>
          <button onClick={() =>
                window.open(
                  `https://web.whatsapp.com/send?phone=8110862228&text=I want to buy ${product.name}`
                )}>Buy on whatsup</button>
          <hr/>
          <hr/>
          <hr/>
          </>
        ))}
       </div>
      
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css'
import { ProductList } from './components/product-list/product-list';
import { Header } from './components/header/header';

function App() {

 
  const [allFoodData, setAllFoodData] = useState<any>([]);
  const [total, setTotal] = useState(0);
  const [countFoodData, setCountFoodData] = useState(0);


  return (
    
    <>
    
    <Header
    allFoodData={allFoodData}
    setAllFoodData={setAllFoodData}
    total={total}
    setTotal={setTotal}
    countFoodData={countFoodData}
    setCountFoodData={setCountFoodData}/>

 <div className = "container">
  
      <ProductList
        allFoodData={allFoodData}
        setAllFoodData={setAllFoodData}
        total={total}
        setTotal={setTotal}
        countFoodData={countFoodData}
        setCountFoodData={setCountFoodData}/>
  
  </div>
  </>
  )
}

export default App

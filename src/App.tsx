import { useState } from 'react';
import './App.css'
import { ProductList } from './components/product-list/product-list';

function App() {

 
  const [allFoodData, setAllFoodData] = useState([]);
  const [total, setTotal] = useState(0);
  const [countFoodData, setCountFoodData] = useState(0);


  return (
    
      <ProductList
        allFoodData={allFoodData}
        setAllFoodData={setAllFoodData}
        total={total}
        setTotal={setTotal}
        countFoodData={countFoodData}
        setCountFoodData={setCountFoodData}/>
  
  )
}

export default App

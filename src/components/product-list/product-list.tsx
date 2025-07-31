
import { useState } from 'react';
import { CreateModal } from '../create-modal/create-modal';
import { useFoodData } from '../../hooks/useFoodData';
import type { FoodData } from '../../interface/FoodData';

import "../card/card.css";

interface ProductListProps{

  allFoodData: any[],
  setAllFoodData(value: any[]): void,
  total: number,
  setTotal(value: number): void,
  countFoodData:number,
  setCountFoodData(value: number): void,


}



export function ProductList({allFoodData, setAllFoodData, total, setTotal, countFoodData, setCountFoodData}: ProductListProps){

    const { data } = useFoodData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () =>{
  
          setIsModalOpen(prev => !prev)
    }

    const onAddFoodData = (foodData: FoodData, quantity: number) => {

        if(allFoodData.find(item => item.id === foodData.id)){
  
           const listFoodData = allFoodData.map(item  => item.id === foodData.id ? {...item, quantity: quantity + 1} : item
              );
          setTotal(total + foodData.price * quantity);
          setCountFoodData(countFoodData + quantity);
          return setAllFoodData([...listFoodData]);
  
        }
  
        setTotal(total + foodData.price * quantity);
        setCountFoodData(countFoodData + quantity);
        setAllFoodData([...allFoodData, foodData]);
  
  };


  return (


<>
    <div className="card">

        {
        
        data?.map(product  => (

        <div className = "item" key = {product.id}>
        
        <img src ={product.image}/>
        <h2>{product.title}</h2>
        <p><b>Valor:</b>{product.price}</p>
        <button className="button-add" onClick={() => onAddFoodData(product, 1)}>Adicionar ao Carrinho</button>
        </div>



        ))}
        
        

    </div>
    <div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>
    </div>
    </>

  );

  

}



  




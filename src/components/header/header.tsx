import { useState } from "react";
import type { FoodData } from "../../interface/FoodData";


interface HeaderProps{

  allFoodData: any[],
  setAllFoodData(value: any[]): void,
  total: number,
  setTotal(value: number): void,
  countFoodData:number,
  setCountFoodData(value: number): void,

}

export const Header = ({allFoodData, setAllFoodData, total, setTotal, countFoodData, setCountFoodData}: HeaderProps) => {

const [active, setActive] = useState(false);

const onDeleteFoodData = (foodData: FoodData, quantity: number) => {

    const results = allFoodData.filter(
        item => item.id !== foodData.id
    );

    setTotal(total - foodData.price * quantity);
    setCountFoodData(countFoodData - quantity);
    setAllFoodData(results);

};

const onCleanCart = () =>{

    setAllFoodData([]);
    setTotal(0);
    setCountFoodData(0);
}

    return(
       <header>
       <h1>Cardapio</h1>
       <div className ="container">
            <div className = "container-cart-icon" onClick={()=> setActive(!active)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-cart">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119
                    1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0
                    .375.375 0 01.75 0z"/>
                </svg>
                <div className="count-products"><span id ="contador-produtos">{countFoodData}</span>
                </div>
            </div>
            <div className ={`container-cart-products ${active? '' : 'hidden-cart'}`}>{allFoodData.length ? (
                <>
                <div className = 'row-product'>
                    {allFoodData.map(foodData =>(
                        <div className='cart-product' key={foodData.id}>
                            <div className='info-cart-product'>
                                <span className='quantidade-produto-carrinho'>{foodData.quantity}</span>
                                <p className ='titulo-produto-carrinho'>{foodData.title}</p>
                                <span className='preco-produto-carrinho'>${foodData.price}</span>
                            </div>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5'
                            stroke='currentColor' className='icon-close' onClick={() => onDeleteFoodData(foodData,1)}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'/>
                            </svg>
                        </div>
                    ))}
                </div>

                <div className ='cart-total'><h3>Total:</h3><span className='total-pagar'>${total}</span>
                </div>
                <button className='btn-clear-all' onClick={onCleanCart}>Esvaziar Carrinho</button>
                </>
            ) : (
                <p className='cart-empty'>O Carrinho está vazio</p>

            )}
            </div>
       </div>
       </header>
   )



}


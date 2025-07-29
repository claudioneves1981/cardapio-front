import "./card.css"

interface CardProps{


    id: number,
    price: number,
    title: string,
    image: string


}

export function Card({id, price, title, image} : CardProps){

    const quantity = 1

    return(
       
    <div className="card">
        
        <img src ={image}/>
        <h2>{title}</h2>
        <p><b>Valor:</b>{price}</p>
        <button className="button-add" onClick={() => onAddFoodData({id, title, price, quantity})}>Adicionar ao Carrinho</button>


    </div>

    )
}

/*const onAddFoodData = foodData => {


      if(allFoodData.find(item => item.id === foodData.id)){

         const listFoodData = allFoodData.map(item => item.id === foodData.id ? {...item, quantity: item.quantity + 1} : item
            );
        setTotal(total + foodData.price * foodData.quantity);
        setCountFoodData(countFoodData + foodData.quantity);
        return setAllFoodData([...listFoodData]);

      }

      setTotal(total + foodData.price * foodData.quantity);
      setCountFoodData(countFoodData + foodData.quantity);
      setAllProducts([...allFoodData, foodData]);

};*/


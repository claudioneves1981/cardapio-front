import "./card.css"

interface CardProps{


    id: number,
    price: number,
    title: string,
    image: string,
    allFoodData: any[],
    setAllFoodData(value: any[]): void,
    total : number,
    setTotal (value: number): void,
    countFoodData: number,
    setCountFoodData(value: number): void,


}



export function Card({id, price, title, image, allFoodData, setAllFoodData, total, setTotal, countFoodData, setCountFoodData} : CardProps){

    const quantity = 1

    const onAddFoodData = (foodData: { id: any; title?: string; price: any; quantity: any; }) => {


        if(allFoodData.find(item  => item.id === foodData.id)){
  
           const listFoodData = allFoodData.map(item  => item.id === foodData.id ? {...item, quantity: item.quantity + 1} : item
              );
          setTotal(total + foodData.price * foodData.quantity);
          setCountFoodData(countFoodData + foodData.quantity);
          return setAllFoodData([...listFoodData]);
  
        }
  
        setTotal(total + foodData.price * foodData.quantity);
        setCountFoodData(countFoodData + foodData.quantity);
        setAllFoodData([...allFoodData, foodData]);
  
  };


    return(
       
    <div className="card">
        
        <img src ={image}/>
        <h2>{title}</h2>
        <p><b>Valor:</b>{price}</p>
        <button className="button-add" onClick={() => onAddFoodData({id, title, price, quantity})}>Adicionar ao Carrinho</button>


    </div>

    

    )

    
}

//export function FoodDataList({allFoodData, setAllFoodData, total, setTotal,countFoodData, setCountFoodData}) : FoodDataList {


//



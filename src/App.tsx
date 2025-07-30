import { useState } from 'react';
import './App.css'
import { Card} from './components/card/card';
import { CreateModal } from './components/create-modal/create-modal';
import { useFoodData } from './hooks/useFoodData';

function App() {

  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () =>{

        setIsModalOpen(prev => !prev)
  }
  const [allFoodData, setAllFoodData] = useState<Array<any>>([]);
  const [total, setTotal] = useState(0);
  const [countFoodData, setCountFoodData] = useState(0);


  return (
    <>
      <div className="container">
        <h1>Cardapio</h1>
        <div className="card-grid">
            { data?.map(foodData => 
           
           <>
                <Card
                  price={foodData.price}
                  title={foodData.title}
                  image={foodData.image} id={0} allFoodData={[]} setAllFoodData={function (value: any[]): void {
                    throw new Error('Function not implemented.');
                  } } total={0} setTotal={function (value: number): void {
                    throw new Error('Function not implemented.');
                  } } countFoodData={0} setCountFoodData={function (value: number): void {
                    throw new Error('Function not implemented.');
                  } } />
                </>
                
           )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>
      </div>
      <Card 
        allFoodData={allFoodData}
        setAllFoodData={setAllFoodData}
        total={total}
        setTotal={setTotal}
        countFoodData={countFoodData}
        setCountFoodData={setCountFoodData} id={0} price={0} title={''} image={''}      />
    </>
  )
}

export default App

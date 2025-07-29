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


  return (
    <>
      <div className="container">
        <h1>Cardapio</h1>
        <div className="card-grid">
            { data?.map(foodData => 
           
           <>
                <Card
                id={foodData.id}
                price={foodData.price}
                title={foodData.title}
                image={foodData.image} />

                </>
                
           )}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>
      </div>
    </>
  )
}

export default App

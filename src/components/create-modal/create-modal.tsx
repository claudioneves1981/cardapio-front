import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import type { FoodData } from "../../interface/FoodData";
import "./modal.css";

interface InputProps{

    label: string,
    value: string | number,
    updateValue(value: any) : void

}

interface ModalProps{

    closeModal():void
}


const Input = ({label, value, updateValue}: InputProps) => {

    return(
    <>
       <label>{label}</label>
       <input value={value} onChange={event => updateValue(event.target.value)}></input>
    </>
    )

}

export function CreateModal({closeModal}:ModalProps){

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const{ mutate, isSuccess, isPending } = useFoodDataMutate();

    const submit = () => {

        const foodData: FoodData = {
            title,
            price,
            image,
            id: 0
        }

        mutate(foodData)

    }

    useEffect(() =>{
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])


    return(
    <div className="modal-overlay">
        <div className="modal-body">
          <h2>Cadastre um novo item no Cardapio</h2>
          <form className="input-container">
            <Input label="título" value={title} updateValue={setTitle}/>
            <Input label="preço" value={price} updateValue={setPrice}/>
            <Input label="imagem" value={image} updateValue={setImage}/>
          </form>
          <button onClick={submit} className="btn-secondary" >{isPending ? 'Postando...':'Postar'}</button>
        </div>
    </div>
    )
}
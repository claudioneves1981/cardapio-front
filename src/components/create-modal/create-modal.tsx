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

    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const{ mutate, isSuccess, isPending } = useFoodDataMutate();

    const submit = () => {

        const foodData: FoodData = {
            id,
            title,
            price,
            image
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
            <Input label="id" value={id} updateValue={setId}/>
            <Input label="title" value={title} updateValue={setTitle}/>
            <Input label="price" value={price} updateValue={setPrice}/>
            <Input label="image" value={image} updateValue={setImage}/>
          </form>
          <button onClick={submit} className="btn-secondary" >{isPending ? 'Postando...':'Postar'}</button>
        </div>
    </div>
    )
}
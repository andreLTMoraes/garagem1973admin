import React, {useState, useEffect } from 'react'
import * as S from './styled'

import productImg from '../assets/product.png'

export default function PopUpProduct({
    item,
    mode,
    closeBtn=() => {},
    editBtn=()=>{},
    saveBtn=()=>{},
    deleteBtn=()=>{}
}) {
    
    const [disable, setDisable] = useState(true);
    const [firstBtn, setFirstBtn] = useState('edit');

    useEffect(()=>{
        if(mode === 'new') {
            setFirstBtn('save');
            setDisable(false);
        }
    }, [])

    function handleEdit() {
        setFirstBtn('save');
        setDisable(false);
    }
    
    return (
        <S.PopUpShadow>
            <S.PopUpContainer>
                <S.PopUpClose onClick={closeBtn}>x</S.PopUpClose>
                <S.PopUpImg src={productImg}/>
                <S.PopUpForm>
                    <span>Nome</span>
                    <S.PopUpInput 
                        placeholder='Nome'
                        value={item.name}
                        onChange={e => editBtn({...item, name: e.target.value})}
                        disabled={disable}/>
                    <span>Preço</span>
                    <S.PopUpInput 
                        placeholder='Preço'
                        value={item.price}
                        onChange={e => editBtn({...item, price: e.target.value})}
                        disabled={disable}/>
                    <span>Qtd em estoque</span>
                    <S.PopUpInput
                        placeholder='Estoque'
                        value={item.stock}
                        onChange={e => editBtn({...item, stock: e.target.value})}
                        disabled={disable}/>
                    {firstBtn === 'edit' ? 
                    <S.PopUpButton typeBtn='edit' onClick={handleEdit}>Editar</S.PopUpButton>:
                    <S.PopUpButton typeBtn='save' onClick={saveBtn}>Salvar</S.PopUpButton>}
                    <S.PopUpButton typeBtn='delete' onClick={deleteBtn}>Deletar</S.PopUpButton>
                </S.PopUpForm>
            </S.PopUpContainer>
        </S.PopUpShadow>
    )
}

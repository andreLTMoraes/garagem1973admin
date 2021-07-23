import React, {useState, useEffect } from 'react'
import * as S from './styled'

export default function PopUpClient({
    item,
    mode,
    closeBtn=() => {},
    editBtn=()=>{},
    saveBtn=()=>{},
    deleteBtn=()=>{}
}) {
    
    const [disable, setDisable] = useState(true);
    const [firstBtn, setFirstBtn] = useState('edit');
    const [addresses, setAddresses] = useState([]);
    const [cars, setCars] = useState([]);
    const [hideAddresses, setHideAddresses] = useState(false);
    const [hideCars, setHideCars] = useState(false);

    useEffect(()=>{
        if(mode === 'new') {
            setFirstBtn('save');
            setDisable(false);
        }
        setAddresses(item.address);
        setCars(item?.cars ? item.cars : []);
    }, [])

    useEffect(()=>{
        editBtn({...item, address: addresses});
    },[addresses])

    useEffect(()=>{
        editBtn({...item, cars: cars})
    },[cars])

    function handleEdit() {
        setFirstBtn('save');
        setDisable(false);
    }

    function handleSave() {
        let save = true;
        addresses.forEach(item => {
            if(item.publicArea === '' ||
            item.number === '' ||
            item.city === '' ||
            item.state === '') save = false;
        })
        cars.forEach(item => {
            if(item.brand === '' ||
            item.model === '' ||
            item.year === '') save = false;
        })
        save && saveBtn();
    }

    function addAddress() {
        firstBtn !== 'edit' && setAddresses([
            ...addresses,
            {
                id: addresses[addresses.length -1]?.id + 1 || 1,
                publicArea: '',
                number: '',
                city: '',
                state: ''
            }])
    }

    function removeAddress(id) {
        firstBtn !== 'edit' && setAddresses(addresses.filter(item => item.id !== id))
    }

    function addCar() {
        firstBtn !== 'edit' && setCars([
            ...cars,
            {
                id: cars[cars.length -1]?.id + 1 || 1,
                brand: '',
                model: '',
                year: ''
            }
        ])
    }

    function removeCar(id) {
        firstBtn !== 'edit' && setCars(cars.filter(item => item.id !== id))
    }
    
    return (
        <S.PopUpShadow>
            <S.PopUpContainer>
                <S.PopUpClose onClick={closeBtn}>x</S.PopUpClose>
                <S.PopUpForm>
                    <span>*Nome</span>
                    <S.PopUpInput 
                        placeholder='Nome'
                        value={item.name}
                        onChange={e => editBtn({...item, name: e.target.value})}
                        disabled={disable}/>
                    <span>*Email</span>
                    <S.PopUpInput 
                        placeholder='Email'
                        value={item.email}
                        onChange={e => editBtn({...item, email: e.target.value})}
                        disabled={disable}/>
                    <span>Telefone</span>
                    <S.PopUpInput
                        placeholder='Telefone'
                        value={item?.phone}
                        onChange={e => editBtn({...item, phone: e.target.value})}
                        disabled={disable}/>
                    <S.Row>
                        <S.Column width='85%'>
                            <h3 style={{marginTop: '.5rem'}}>Endereços: {addresses.length}</h3>
                        </S.Column>
                        <S.Column 
                            width='5%'
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'}}
                            onClick={() => setHideAddresses(hideAddresses ? false : true)}>
                            <S.Icon color='#ccc' icon={hideAddresses ? 'angle-down' : 'angle-up'} />
                        </S.Column>
                        <S.Column>
                            <S.PopUpButton 
                                typeBtn='save'
                                onClick={addAddress}>+ Novo</S.PopUpButton>
                        </S.Column>
                    </S.Row>
                    <S.Hidder hide={hideAddresses}>
                        {addresses.map((address, index) => <div style={{position: 'relative'}}>
                            {index !== 0 && <S.PopUpClose onClick={()=>removeAddress(address.id)}>x</S.PopUpClose>}
                            <S.Line weight='3'/>
                            <span>*Logradouro</span>
                            <S.PopUpInput 
                                placeholder='Logradouro'
                                value={address.publicArea}
                                onChange={e => setAddresses(addresses.map(i => {
                                    if(i.id !== address.id){
                                        return i
                                    }else{
                                        return {...address, publicArea: e.target.value}
                                    }
                                }))}
                                disabled={disable}/>
                            <span>*Número</span>
                            <S.PopUpInput 
                                placeholder='Número'
                                value={address.number}
                                onChange={e => 
                                    setAddresses(addresses.map(i => {
                                        if(i.id !== address.id){
                                            return i
                                        }else{
                                            return {...address, number: parseInt(e.target.value) || 0}
                                        }
                                    }))
                                }
                                disabled={disable}/>
                            <span>*Cidade</span>
                            <S.PopUpInput 
                                placeholder='Cidade'
                                value={address.city}
                                onChange={e => 
                                    setAddresses(addresses.map(i => {
                                        if(i.id !== address.id){
                                            return i
                                        }else{
                                            return {...address, city: e.target.value}
                                        }
                                    }))
                                }
                                disabled={disable}/>
                            <span>*Estado</span>
                            <S.PopUpInput 
                                placeholder='Estado'
                                value={address.state}
                                onChange={e => 
                                    setAddresses(addresses.map(i => {
                                        if(i.id !== address.id){
                                            return i
                                        }else{
                                            return {...address, state: e.target.value}
                                        }
                                    }))
                                }
                                disabled={disable}/>
                        </div>)}
                    </S.Hidder>
                    <S.Row>
                        <S.Column width='85%'>
                            <h3 style={{marginTop: '.5rem'}}>Carros: {cars.length}</h3>
                        </S.Column>
                        <S.Column 
                            width='5%'
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'}}
                            onClick={() => setHideCars(hideCars ? false : true)}>
                            <S.Icon color='#ccc' icon={hideCars ? 'angle-down' : 'angle-up'} />
                        </S.Column>
                        <S.Column>
                            <S.PopUpButton 
                                typeBtn='save'
                                onClick={addCar}>+ Novo</S.PopUpButton>
                        </S.Column>
                    </S.Row>
                    <S.Hidder hide={hideCars}>
                        {cars.map(car => <div style={{position: 'relative'}}>
                            <S.PopUpClose onClick={()=>removeCar(car.id)}>x</S.PopUpClose>
                            <S.Line weight='3'/>
                            <span>*Marca</span>
                            <S.PopUpInput 
                                placeholder='Marca'
                                value={car.brand}
                                onChange={e => 
                                    setCars(cars.map((i) => {
                                        if(i.id !== car.id){
                                            return i
                                        } else {
                                            return {...car, brand: e.target.value}
                                        }
                                    }))
                                }
                                disabled={disable}/>
                            <span>*Modelo</span>
                            <S.PopUpInput 
                                placeholder='Modelo'
                                value={car.model}
                                onChange={e => {
                                    setCars(cars.map((i) => {
                                        if(i.id !== car.id){
                                            return i
                                        } else {
                                            return {...car, model: e.target.value}
                                        }
                                    }))
                                }}
                                disabled={disable}/>
                            <span>*Ano</span>
                            <S.PopUpInput 
                                placeholder='Ano'
                                value={car.year}
                                onChange={e => {
                                    setCars(cars.map((i) => {
                                        if(i.id !== car.id){
                                            return i
                                        } else {
                                            return {...car, year: parseInt(e.target.value) || 0}
                                        }
                                    }))
                                }}
                                disabled={disable}/>
                        </div>)}
                    </S.Hidder>
                    {firstBtn === 'edit' ? 
                    <S.PopUpButton typeBtn='edit' onClick={handleEdit} style={{marginTop: '2rem'}}>Editar</S.PopUpButton>:
                    <S.PopUpButton typeBtn='save' onClick={handleSave} style={{marginTop: '2rem'}}>Salvar</S.PopUpButton>}
                    <S.PopUpButton typeBtn='delete' onClick={deleteBtn}>Deletar</S.PopUpButton>
                </S.PopUpForm>
            </S.PopUpContainer>
        </S.PopUpShadow>
    )
}

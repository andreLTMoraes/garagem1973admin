import React, {useState, useEffect} from 'react';
import * as S from './styled';
import logo from './assets/logoLanding.png';
import CardMenu from './components/CardMenu';
import ListProducts from './components/ListProducts';
import ListClients from './components/ListClients';
import PopUpProduct from './components/PopUpProduct';
import PopUpClient from './components/PopUpClient';

import { products } from './data/products';
import { clients } from './data/clients';

function App() {
  const [productList, setProductList] = useState(products)
  const [clientList, setClientList] = useState(clients)
  const [painel, setPainel] = useState('Produtos')
  const [popupProduct, setPopupProduct] = useState('none')
  const [popupClient, setPopupClient] = useState('none')
  const [product, setProduct] = useState({})
  const [client, setClient] = useState({})

  useEffect(() => localStorage.setItem('Produtos', JSON.stringify(productList)), [productList]);
  useEffect(() => localStorage.setItem('Clientes', JSON.stringify(clientList)), [clientList]);

  /*
  *   Funções para lista de produtos
  */

  function handleProductItemClick(index){
    setPopupProduct('view');
    setProduct({
      id: index,
      ...productList[index]
    });
  }

  function handleNewProduct(){
    setProduct({
      name: '',
      price: '',
      stock: ''
    });
    setPopupProduct('new');
  }

  function handleSaveProduct(){
    if(popupProduct === 'new'){
      const p = {
        name: product.name,
        price: parseInt(product.price),
        stock: parseInt(product.stock)
      }

      setProductList([...productList, p]);
      setPopupProduct('none');
    }
    if(popupProduct === 'view') {
      setProductList(productList.map((item, index) => {
        if(index !== product.id){
          return item;
        }else{
          item = {
            name: product.name,
            price: parseInt(product.price),
            stock: parseInt(product.stock)
          }
          return item;
        }
      }));
      setPopupProduct('none');
    }
  }

  function handleDeleteProduct(){
    setProductList(productList.filter((item, index) => index !== product.id));
    setPopupProduct('none');
  }

  /*
  * Funções para lista de clientes
  */

  function handleClientItemClick(index){
    setPopupClient('view');
    setClient(clientList[index])
  }

  function handleNewClient(){
    setClient({
      id: clientList[clientList.length - 1].id + 1,
      name: '',
      email: '',
      phone: '',
      address: [
          {
              publicArea: '',
              number: '',
              city: '',
              state: ''
          }
      ]
    });
    setPopupClient('new');
  }

  function handleSaveClient(){
    if(popupClient === 'new'){
      setClientList([...clientList, client])
      setPopupClient('none')
    }
    if(popupClient === 'view'){
      setClientList(clientList.map(item => {
        if(item.id !== client.id){
          return item;
        }else{
          return client;
        }
      }));
      setPopupClient('none');
    }
  }

  function handleDeleteClient(){
    setClientList(clientList.filter(item => item.id !== client.id));
    setPopupClient('none');
  }

  return (
    <div className="App">
      {popupProduct !== 'none' && 
      <PopUpProduct
        item={product}
        mode={popupProduct}
        closeBtn={()=>setPopupProduct('none')}
        editBtn={setProduct}
        saveBtn={handleSaveProduct}
        deleteBtn={handleDeleteProduct}
      />}
      {popupClient !== 'none' &&
      <PopUpClient
        item={client}
        mode={popupClient}
        closeBtn={() => setPopupClient('none')}
        editBtn={setClient}
        saveBtn={handleSaveClient}
        deleteBtn={handleDeleteClient}
      />}
      <S.Header>
        <S.Img src={logo}/>
      </S.Header>
      <S.MainSection>
        <S.MainContent>
          <S.Menu>
            <CardMenu 
              title='Produtos'
              iconSideColor='#389FD9'
              contentSideColor='#3FB0F2'
              icon='box-open'
              counter={productList.length}
              onClick={() => setPainel('Produtos')}
            />
            <CardMenu
              title='Clientes'
              iconSideColor='#DC8B30'
              contentSideColor='#F79B38'
              icon='user-alt'
              counter={clientList.length}
              onClick={() => setPainel('Clientes')}
            />
          </S.Menu>
          <S.ListContainer>
            <S.ListHeader>
              <h2>{painel}</h2>
              <S.AddButton
              onClick={painel === 'Clientes' ?
                handleNewClient :
                handleNewProduct}
              >+ Novo</S.AddButton>
            </S.ListHeader>
            {painel === 'Clientes' ?
              <ListClients listClients={clientList} itemClick={i=>handleClientItemClick(i)}/>
              :            
              <ListProducts listProducts={productList} itemClick={i=>handleProductItemClick(i)}/>
            }
          </S.ListContainer>
        </S.MainContent>
      </S.MainSection>
      <S.CreditSection id='credits'>
        <span>Desenvolvido por <S.Link href='https://github.com/andreLTMoraes/' target='_blank' rel='noreferrer'>André Moraes</S.Link></span>
      </S.CreditSection>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import * as S from './styled';
import logo from './assets/logoLanding.png';
import CardMenu from './components/CardMenu';
import ListProducts from './components/ListProducts';
import ListClients from './components/ListClients';
import PopUpProduct from './components/PopUpProduct';

import { products } from './data/products';
import { clients } from './data/clients';

function App() {
  const [productList, setProductList] = useState(products)
  const [clientList, setClientList] = useState(clients)
  const [painel, setPainel] = useState('Clientes')
  const [popup, setPopup] = useState('none')
  const [product, setProduct] = useState({})

  useEffect(() => console.log(productList), [productList]);
  useEffect(() => console.log(clientList), [clientList]);

  function handleProductItemClick(index){
    setPopup('view');
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
    setPopup('new');
  }

  function handleSaveProduct(){
    if(popup === 'new'){
      const p = {
        name: product.name,
        price: parseInt(product.price),
        stock: parseInt(product.stock)
      }

      setProductList([...productList, p]);
      setPopup('none');
    }
    if(popup === 'view') {
      setProductList(productList.map((item, index) => {
        if(index !== product.id){
          console.log(index);
          return item;
        }else{
          item = {
            name: product.name,
            price: parseInt(product.price),
            stock: parseInt(product.stock)
          }
          console.log(item);
          return item;
        }
      }));
      setPopup('none');
    }
  }

  function handleDeleteProduct(){
    setProductList(productList.filter((item, index) => index !== product.id));
    setPopup('none');
  }

  return (
    <div className="App">
      {popup !== 'none' && 
      <PopUpProduct
        item={product}
        mode={popup}
        closeBtn={()=>setPopup('none')}
        editBtn={setProduct}
        saveBtn={handleSaveProduct}
        deleteBtn={handleDeleteProduct}
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
                ()=>{} :
                handleNewProduct}
              >+ Novo</S.AddButton>
            </S.ListHeader>
            {painel === 'Clientes' ?
              <ListClients listClients={clientList}/>
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

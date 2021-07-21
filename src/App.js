import * as S from './styled';

function App() {
  return (
    <div className="App">
      <S.Header>
        <h1>Garagem 1973 Admin</h1>
      </S.Header>
      <S.MenuSection>
        <h1>Produtos</h1>
        <h1>Clientes</h1>
      </S.MenuSection>
      <S.ListSection>

      </S.ListSection>
      <S.CreditSection id='credits'>
        <span>Desenvolvido por <S.Link href='https://github.com/andreLTMoraes/' target='_blank' rel='noreferrer'>André Moraes</S.Link></span>
      </S.CreditSection>
    </div>
  );
}

export default App;

import React from 'react'
import * as S from './styled'

export default function ListProducts({
    listProducts,
    itemClick=()=>{}
}) {
    return (
        <S.Table>
            <S.Row>
                <S.Column width='60%' th>
                    Nome
                </S.Column>
                <S.Column width='20%' th>
                    Preço
                </S.Column>
                <S.Column width='20%' th>
                    Qtd. em estoque
                </S.Column>
            </S.Row>
            <S.Line weight='3'/>
            {listProducts.map((product, index) => (<>
                <S.Row onClick={e => itemClick(index)} clickable>
                    <S.Column width='60%'>
                        {product.name}
                    </S.Column>
                    <S.Column width='20%'>
                        R$ {product.price},00
                    </S.Column>
                    <S.Column width='20%'>
                        {product.stock}
                    </S.Column>
                </S.Row>
                <S.Line/>
            </>))
            }
        </S.Table>
    )
}

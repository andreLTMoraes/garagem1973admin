import React from 'react'
import * as S from './styled'

export default function ListClients({
    listClients,
    itemClick=()=>{}
}) {
    return (
        <S.Table>
            <S.Row>
                <S.Column width='30%' th>
                    Nome
                </S.Column>
                <S.Column width='30%' th>
                    email
                </S.Column>
                <S.Column width='20%' th>
                    Telefone
                </S.Column>
                <S.Column width='10%' th>
                    Endereços
                </S.Column>
                <S.Column width='10%' th>
                    Carros
                </S.Column>
            </S.Row>
            <S.Line weight='3'/>
            {listClients.map((client, index) => (<>
                <S.Row onClick={e => itemClick(index)} clickable>
                    <S.Column width='30%'>
                        {client.name}
                    </S.Column>
                    <S.Column width='30%'>
                        {client.email}
                    </S.Column>
                    <S.Column width='20%'>
                        {client?.phone ? client?.phone : '-'}
                    </S.Column>
                    <S.Column width='10%'>
                        {client.address.length}
                    </S.Column>
                    <S.Column width='10%'>
                        {client?.cars ? client?.cars.length : '0'}
                    </S.Column>
                </S.Row>
                <S.Line/>
            </>))
            }
        </S.Table>
    )
}

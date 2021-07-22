import React from 'react';

import * as S from './styled';

export default function CardMenu({
    title,
    iconSideColor,
    contentSideColor,
    icon,
    counter,
    onClick=() => {}}) {
    return (
        <S.Card onClick={onClick}>
            <S.CardIconSide iconSideColor={iconSideColor}>
                <S.Icon color={contentSideColor} icon={icon || 'times'}/>
            </S.CardIconSide>
            <S.CardContentSide contentSideColor={contentSideColor}>
                <S.CardTitle>{title}</S.CardTitle>
                <S.CardCounter>Total: {counter || 0}</S.CardCounter>
            </S.CardContentSide>
        </S.Card>
    )
}

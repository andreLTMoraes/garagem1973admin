import styled from 'styled-components'
import { MDBIcon } from 'mdbreact'

const textColor = '#fff';

export const Card = styled.div`
    display: flex;
    margin: 0.3rem;
    width: 40%;
    max-width: 16rem;

    &:hover {
        cursor: pointer;
        filter: brightness(1.1);
    }
`;

export const CardIconSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.iconSideColor || '#c1c1c1'};
    width: 30%;
    border-radius: 0.4rem 0 0 0.4rem;
`;

export const Icon = styled(MDBIcon)`
    color: ${props => props.color};
    font-size: 2rem;
`;

export const CardContentSide = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.contentSideColor || '#dcdcdc'};
    padding: 1rem;
    width: 70%;
    border-radius: 0 0.4rem 0.4rem 0;
`;

export const CardTitle = styled.span`
    color: ${textColor};
    font-size: 1.5rem;
    font-weight: 900;
`;

export const CardCounter = styled.span`
    color: ${textColor};
    font-size: 1rem;
`;

// Table list
export const Table = styled.div`
    margin-top: 2rem;
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    ${props => props?.clickable ? 'cursor: pointer;' : ''}
`;

export const Column = styled.div`
    width: ${props => props.width || '10%'};
    font-weight: ${props => props.th ? '600' : 'none'};
`;

export const Line = styled.hr`
    border-top: ${props => props.weight || '1'}px solid #ccc;
`;

export const Hidder = styled.div`
    display: ${props => props.hide ? 'none' : 'block'}
`;

// PopUp
export const PopUpShadow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
    background-color: #00000070;
    z-index: 10;
    position: fixed;
`;

export const PopUpContainer = styled.div`
    display: flex;
    width: 80%;
    max-height: 90%;
    background-color: #fff;
    margin: 2rem 0;
    border-radius: .7rem;
    position: relative;
    padding: 2rem 1rem 1rem 1rem;
`;

export const PopUpClose = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    cursor: pointer;
`;

export const PopUpInput = styled.input`
    width: 100%;
    height: 2rem;
    margin-bottom: .7rem;
    border: 1px solid #ddd;
    border-radius: .25rem;
    padding: 0 .5rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const PopUpButton = styled.button`
    width: 100%;
    height: 2rem;
    margin-top: .5rem;
    border: none;
    border-radius: .25rem;
    color: #fff;
    background-color: ${props => props.typeBtn === 'delete'?
        '#bf0000' :
        props.typeBtn === 'edit' ?
        '#3FB0F2' :
        props.typeBtn === 'save' ?
        '#188230' :
        '#aaa'
    };
    font-weight: 600;

    &:hover {
        filter: brightness(1.2);
    }

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
`;


// PopUp Products
export const PopUpImg = styled.img`
    margin-right: 1rem;
    width: 40%;
`;

export const PopUpForm = styled.div`
    width: 100%;
    padding-right: 1rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ddd;
        border-radius: 10px;
    }
`;
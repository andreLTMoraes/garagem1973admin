import styled from 'styled-components';
import track from './assets/tire1.png';

const colorHeader = '#6f6f6f';

export const Header = styled.section`
    width: 100vw;
    height: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colorHeader};
    background-image: url(${track});
    background-blend-mode: color-dodge;
    background-repeat: repeat-x;
    background-position: center;
`;

export const Img = styled.img`
    height: 10rem;
    width: auto;
    margin-bottom: 1rem;
`;

export const MainSection = styled.section`
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-top: 5rem;
    padding-bottom: 4rem;
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    width: 94%;
    max-width: 991px;
    background-color: #fff;
    border-radius: .7rem;
`;

export const Menu = styled.div`
    position: absolute;
    top: 15rem;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const ListContainer = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 94%;
    padding: 1rem 1rem 0 1rem;
`;

export const AddButton = styled.button`
    background-color: #188230;
    color: #fff;
    border-radius: .5rem;
    border: none;
    padding: .5rem 2rem !important;

    &:hover {
        filter: brightness(1.2);
    }

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CreditSection = styled.section`
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: flex;
    padding: .5rem 0;
    justify-content: center;
    background-color: ${colorHeader};
    color: #fff;
`;

export const Link = styled.a`
    color: #fff;
    text-decoration: none;
`;
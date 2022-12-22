import styled from 'styled-components'

// colors
export const colors = {
    dark: 'black',
    light: 'white',
    middle: 'aqua',
};

// images
export const Image = styled.img`
    width: 300px;
`;

// navigation
export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    border: 3px solid black;
    padding: 8px;
    width: 90%;
    margin: auto;
`;

// portfolio cards
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// buttons
export const Git = styled.button`
    background-color: ${colors.dark};
    color: ${colors.light};
    margin: 10px;
`;

export const Live = styled.button`
    background-color: ${colors.middle};
    color: ${colors.dark};
`;

// about
export const Bio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 70px 0 70px;
`;
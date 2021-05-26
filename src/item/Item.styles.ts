import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 5px solid #000;
    border-radius: 20px;
    box-shadow: 2px 3px 4px 5px rgba(0,0,0, 0.6);

    button{
        border-radius: 0 0 20px 20px;
    }

    img{
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div{
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`;
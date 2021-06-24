import styled from 'styled-components'

export const Container = styled.div`
    padding-top: 40px;
    background: #fff;
`

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 42px 0 42px;
    justify-content: center;
    align-items: stretch;
    display: flex;
    flex-wrap: nowrap;
`

export const Column = styled.div`
    flex-direction: column;
    text-align: left;
    margin: 0 5px 0 5px;
    padding: 0 10px 0 10px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 0.5rem;
`

export const Link = styled.div`
    color: #000;
    margin-bottom: 10px;
    font-size: 16px;
    text-decoration: none;

    $:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`

export const Title = styled.div`
    font-size: 24px;
    color: #000;
    margin-bottom: 15px;
    font-weight: bold;
`
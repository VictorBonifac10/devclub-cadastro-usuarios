import styled from "styled-components";

export const Container = styled.div`
background-color: #181f36;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
`

export const Title = styled.h2`
color: #fff;
text-align: center;
font-size: 30px;
font-style: normal;
font-weight: 600;
margin: 15px;
`

export const ContainerUsers = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 20px;
margin: 10px;

@media (max-width: 750px){
    grid-template-columns: 1fr;

}
`

export const CardUsers = styled.div`
background-color: #252d48;
padding: 16px;
border: 32px;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;
max-width: 380px;

h3{
    color: #fff;
    font-size: 24px;
    margin-bottom: 3px;
    text-transform: capitalize;
}

p{
    color: #fff;
    font-size: 14px;
    font-weight: 200;
}
`

export const TrashIcon = styled.img`
cursor: pointer;
padding-left: 30px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}
`

export const AvatarUser = styled.img`
height: 80px;
`


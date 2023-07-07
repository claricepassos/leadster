import styled from "styled-components"



const ButtonConteiner = styled.div`
display: flex ;
align-items: center;
justify-content: center;
`;

const StyledButton = styled.button`
border-radius: 9999px;
border: 2px solid;
margin: 15px;
background-color: white ;
font-weight: 600;
font-family: Plus_Jakarta_Sans;
cursor: pointer;
padding: 10px;
&:hover {
  background-color: #00aff0;
};
font-size: 16px;
`;

const StyledTextSelector= styled.p`
margin: 5px;
`;




const StyledSelector = styled.select`
border-radius: 9999px;
font-size: 16px;
font-weight: 600;
height: 40px;
padding: 5px;
`
export default function SelectionComponent() {

    return (
        <ButtonConteiner>
            <StyledButton>Agências</StyledButton>
            <StyledButton>Chatbot</StyledButton>
            <StyledButton>Marketing Digital</StyledButton>
            <StyledButton>Geração de Leads</StyledButton>
            <StyledButton>Mídia Paga</StyledButton>

            <StyledTextSelector><b>Ordenar por:</b></StyledTextSelector>
            <StyledSelector>
                <option value="data">Data publicação</option>
                <option value="autor">Autor</option>
            </StyledSelector>

        </ButtonConteiner>
    )
}
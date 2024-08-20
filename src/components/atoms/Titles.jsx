import styled from "styled-components";

const StyledH1 = styled.h1`
    font-size: 2.2rem;
    color: #601130;
`;

function Title({text}) {
    return ( 
        <StyledH1>{text}</StyledH1>
     );
}

export default Title;
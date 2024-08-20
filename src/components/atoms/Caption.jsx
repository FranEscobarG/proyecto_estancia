import styled from "styled-components";

const StyledH2 = styled.h2`
    color: #333333;
    margin: 1.6rem 0 1rem 0;
`;

function Caption({text}) {
    return ( 
        <StyledH2>{text}</StyledH2>
     );
}

export default Caption;
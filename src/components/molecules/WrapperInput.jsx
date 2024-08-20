import styled from "styled-components";

const StyledDiv = styled.div`
    width: 60%;
    margin-top: 2rem;

    label{
        color: #601130;
        font-size: 1.2rem;
        font-weight: 500;
    }

    input{
        width: 100%;
        margin-top: .2rem;
        font-size: 1.2rem;
        padding: .8rem .7rem;
        border: none;
        border-radius: .5rem;
        background-color: #dbdbdb;
    }
`;

function WrapperInput({label, inputType, inputName}) {
    return ( 
        <StyledDiv>
            <label htmlFor={inputName}>{label}</label>
            <input type={inputType} name={inputName} id={inputName} />
        </StyledDiv>
     );
}

export default WrapperInput;
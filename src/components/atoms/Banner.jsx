import styled from "styled-components";
import BannerICTI from '../../assets/img/bannerICTI.jpg'

const StyledDiv = styled.div`
    min-height: 50vh;
    background-image: url(${BannerICTI});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

function Banner() {
    return ( 
        <StyledDiv/>
    );
}

export default Banner;
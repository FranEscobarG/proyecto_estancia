import Title from "../atoms/Titles";
import '../../assets/css/dashboard.css'

function FlexContainer() {
    return ( 
        <div className="container-dashboard">
            <div className="box-chart">
                <Title text={"DAHBOARD"} />
            </div>
            
        </div>
     );
}

export default FlexContainer;

import Button from "./Button.js";

const Card = ({ planType, price, features }) => {
    
    return (


        <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">{planType}</h1>
                <h2 className="h1 font-weight-bold">{planType === "Enterprise" ? "TBA" : price + ' Eur /month '}</h2>
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Features: </h1>
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
               
                <ul className="list-unstyled my-5 text-small text-left">
                    {features.map((features) => {
                        return <li key={features + 'xkj'}className="mb-3">
                            <i className="fa fa-check mr-2 text-primary"></i> {features}</li>;
                    })}
                </ul>
                <Button text={planType === "Enterprise" ? "Contact Sales" : "Try for free"}></Button>
                <div><a href="/">Learn More</a></div>
                
            </div>
        </div>


    );
};

export default Card;
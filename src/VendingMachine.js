import { BrowserRouter, Link, Route } from "react-router-dom";
import Chips from "./chips";
import Chocolate from "./chocolate";
import Soda from "./soda";

const VendingMachine = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to="/chips">Chips</Link>
                <Link to="/chocolate">Chocolate</Link>
                <Link to="/soda">Soda</Link>
                
                <Route exact path="/chips">
                    <Chips />
                </Route>
                <Route exact path="/chocolate">
                    <Chocolate />
                </Route>
                <Route exact path="/soda">
                    <Soda />
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default VendingMachine;
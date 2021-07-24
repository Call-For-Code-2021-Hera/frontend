import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CadastroUsuario, HomePage } from "../../paginas";

export function Rotas() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={ HomePage }></Route>
                    <Route exact path="/usuario" component={CadastroUsuario}></Route>
                </Switch>
            </Router>
        </>
    )
}
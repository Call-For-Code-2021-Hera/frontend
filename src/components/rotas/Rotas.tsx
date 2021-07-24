import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CadastroUsuario } from "../../paginas";

export function Rotas() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={CadastroUsuario}></Route>
                    <Route exact path="/usuario" component={CadastroUsuario}></Route>
                </Switch>
            </Router>
        </>
    )
}
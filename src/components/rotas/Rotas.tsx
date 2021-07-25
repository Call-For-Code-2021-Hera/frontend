import { ThemeProvider } from "@material-ui/core";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CadastroEmpresa, CadastroAssociacao, CadastroUsuario, CadastroUsuarioDetalhes, HomePage, MinhasRotas, PreCadastro, CadastroEmpresaDetalhes, CadastroAssociacaoDetalhes, Login, HomeLogada } from "../../paginas";
import { DefaultTheme } from "../../temas";

export function Rotas() {
    return (
        <>
            <ThemeProvider theme={DefaultTheme}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route exact path="/homelogada" component={HomeLogada}></Route>
                        <Route exact path="/cadastro/empresa" component={CadastroEmpresa}></Route>
                        <Route exact path="/cadastro/empresa/:id" component={CadastroEmpresaDetalhes}></Route>
                        <Route exact path="/cadastro/usuario" component={CadastroUsuario}></Route>
                        <Route exact path="/cadastro/usuario/:id" component={CadastroUsuarioDetalhes}></Route>
                        <Route exact path="/cadastro/associacao" component={CadastroAssociacao}></Route>
                        <Route exact path="/cadastro/associacao/:id" component={CadastroAssociacaoDetalhes}></Route>
                        <Route exact path="/pre-cadastro" component={PreCadastro}></Route>
                        <Route exact path="/minhasRotas" component={MinhasRotas}></Route>
                        <Route exact path="/login" component={Login}></Route>

                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    )
}
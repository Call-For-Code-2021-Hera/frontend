import { ThemeProvider } from "@material-ui/core";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { CadastroEmpresa, CadastroAssociacao, CadastroUsuario, CadastroUsuarioDetalhes, HomePage, PreCadastro, CadastroEmpresaDetalhes, CadastroAssociacaoDetalhes, Login, HomeLogadaUsuario, HomeLogadaAssociacao, HomeLogadaEmpresa, RotasList, DetalhesRota, RelatorioList, CadastroColeta } from "../../paginas";
import { DefaultTheme } from "../../temas";

export function Rotas() {
    return (
        <>
            <ThemeProvider theme={DefaultTheme}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage}></Route>
                        <Route exact path="/homelogada/usuario" component={HomeLogadaUsuario}></Route>
                        <Route exact path="/homelogada/associacao" component={HomeLogadaAssociacao}></Route>
                        <Route exact path="/homelogada/empresa" component={HomeLogadaEmpresa}></Route>
                        <Route exact path="/cadastro/coleta" component={CadastroColeta}></Route>

                        <Route exact path="/cadastro/empresa" component={CadastroEmpresa}></Route>
                        <Route exact path="/cadastro/empresa/:id" component={CadastroEmpresaDetalhes}></Route>
                        <Route exact path="/cadastro/usuario" component={CadastroUsuario}></Route>
                        <Route exact path="/cadastro/usuario/:id" component={CadastroUsuarioDetalhes}></Route>
                        <Route exact path="/cadastro/associacao" component={CadastroAssociacao}></Route>
                        <Route exact path="/cadastro/associacao/:id" component={CadastroAssociacaoDetalhes}></Route>
                        <Route exact path="/pre-cadastro" component={PreCadastro}></Route>
                        <Route exact path="/relatorio-list" component={RelatorioList}></Route>
        
                        <Route exact path="/rotas-list" component={RotasList}></Route>
                        <Route exact path="/rotas-list/:id" component={DetalhesRota}></Route>
                        <Route exact path="/login" component={Login}></Route>

                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    )
}
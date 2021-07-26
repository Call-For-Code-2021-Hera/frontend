import { Box, Button, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import apiUsuario from "../services/apiUsuario";

import LogoImg from '../assets/img/logo-provisoria.png';

const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
    }
}))

export function Login() {
    const classes = useStyles();

    const history = useHistory();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');


    const handleSubmit = async () => {
        let response = await api.get("login/" + senha).then(async ({ data }) => {

            let response = await api.post('login/', {
                usuario: nome,
                senha: data.senha,
            })
            console.log(response);
            if (response.data.token !== undefined) {
                let responseUsuario = await apiUsuario.get('/usuario/' + response.data.idCliente)
                console.log(responseUsuario);
                localStorage.setItem(`idCliente`, responseUsuario.data.clienteId)
                
                history.push('./homelogada/'+ responseUsuario.data.tipo)
            }
        }
        )

    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item>
                <img style={{width: '150px'}}src={LogoImg} />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" style={{ marginBottom: '10px' }}>
                <Grid item>
                    <Typography variant="h4" color="primary">
                        Login
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate autoComplete="off" onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item xs={10}>
                        <TextField
                            variant="outlined"
                            value={nome}
                            onChange={(event) => { setNome(event.target.value) }}
                            fullWidth={true}
                            id="usuario"
                            name="usuario"
                            label="Usuario" />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                            variant="outlined"
                            value={senha}
                            onChange={(event) => { setSenha(event.target.value) }}
                            fullWidth={true}
                            type="password"
                            id="senha"
                            name="senha"
                            label="Senha" />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Box my={3} style={{ boxSizing: 'border-box' }}>
                                    <Button variant="contained" color="primary" type="submit">
                                        Entrar
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
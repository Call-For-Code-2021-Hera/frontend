import { Box, Button, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import LogoImg from '../assets/img/logo-provisoria.png';

const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
    }
}))

export function CadastroAssociacao() {
    const classes = useStyles();

    const history = useHistory();


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const handleSubmit = async () => {
        await api.get("login/" + senha).then(async ({ data }) => {
            const responseCadastrar = await api.post('login/cadastrar', {
                 usuario: email,
                 senha: data.senha,
             })
             let response = await api.post('login/', {
                 usuario: email,
                 senha: data.senha
             })
             if (response.data.token !== undefined) {
                 localStorage.setItem('tokenCliente', response.data.token);
                 console.log('clienteId', data)
                 history.push(`/cadastro/associacao/${responseCadastrar.data.idCliente}`)
             }
         })

    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item>
                    <img style={{width: '150px'}}src={LogoImg} />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" style={{marginBottom: '10px'}}>
                <Grid item>
                    <Typography variant="h4" color="primary">
                        Cadastro Associação
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
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
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
                                <Box my={3} style={{boxSizing: 'border-box'}}>
                                    <Button variant="contained" color="primary" type="submit">
                                        Cadastrar
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
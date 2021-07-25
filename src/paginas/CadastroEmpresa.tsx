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

export function CadastroEmpresa() {
    const classes = useStyles();

    const history = useHistory();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [idCliente, setIdCliente] = useState('');



    const handleSubmit = async () => {
        // await api.get("login/1234").then(({ data }) => {
        //         api.post('login/cadastrar', {
        //         usuario: nome,
        //         senha: data.senha,
        //     }).then(({data})=>{
        //         console.log(data);
        //     })
        // })

        history.push('/cadastro/empresa/id')


    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item>
                    <img src={LogoImg} />
                </Grid>
            </Grid>
            <Grid container justifyContent="center" style={{ marginBottom: '10px' }}>
                <Grid item>
                    <Typography variant="h4" color="primary">
                        Cadastro Empresa
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate autoComplete="off" onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item xs={10} md={7}>
                        <TextField
                            variant="outlined"
                            value={nome}
                            onChange={(event) => { setNome(event.target.value) }}
                            fullWidth={true}
                            id="usuario"
                            name="usuario"
                            label="Usuario" />
                    </Grid>
                    <Grid item xs={10} md={7}>
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
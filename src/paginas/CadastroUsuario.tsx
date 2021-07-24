import { Box, Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import api from "../services/api";

const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
    }
}))

export function CadastroUsuario() {
    const classes = useStyles();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');


    const handleSubmit = async () => {
        await api.get("login/1234").then(({ data }) => {
            let response = api.post('login/cadastrar', {
                usuario: nome,
                senha: data.senha,
            })
            console.log(response);

        })


    }

    return (
        <>
            <form noValidate autoComplete="off" onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                            value={nome}
                            onChange={(event) => { setNome(event.target.value) }}
                            fullWidth={true}
                            id="usuario"
                            name="usuario"
                            label="Usuario" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={senha}
                            onChange={(event) => { setSenha(event.target.value) }}
                            fullWidth={true}
                            type="password"
                            id="senha"
                            name="senha"
                            label="Senha" />
                    </Grid>
                    <Grid item>
                        <Box my={3}>
                            <Button variant="contained" type="submit">
                                Cadastrar
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
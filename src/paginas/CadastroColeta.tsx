

import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, makeStyles, TextField, TextFieldProps, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import InputMask from "react-input-mask";

import api from "../services/api";
import LogoImg from '../assets/img/logo-provisoria.png';

const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
    }
}))

export function CadastroColeta() {
    const classes = useStyles();


    const history = useHistory();

    const [endereco, setEndereco] = useState('');

    const [tipo, setTipo] = useState({
        plastico: false,
        metal: false,
        vidro: false,
        papeu: false,
    });

    const [idCliente, setIdCliente] = useState('');

    const a = localStorage.setItem('a', '1');

    console.log(localStorage.getItem('a'))

    const geraArrayTipo = () => {
        const arrayTypo = [];
        if (tipo.metal)
            arrayTypo.push('Metal')
        if (tipo.plastico)
            arrayTypo.push('Plastico')
        if (tipo.vidro)
            arrayTypo.push('Vidro')
        if (tipo.papeu)
            arrayTypo.push('Papeu')

        return(arrayTypo);
    }

    const handleSubmit = async () => {
        // await api.get("login/1234").then(({ data }) => {
        //         api.post('login/cadastrar', {
        //         usuario: nome,
        //         senha: data.senha,
        //     }).then(({data})=>{
        //         console.log(data);
        //     })
        // })

        // console.log(telefone.replace(/\D/g, ''));
        const arrayTipo = geraArrayTipo();
        history.push('/homelogada/usuario');

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
                        Cadastro Coleta
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
                            value={endereco}
                            onChange={(event) => { setEndereco(event.target.value) }}
                            fullWidth={true}
                            id="endereco"
                            name="endereco"
                            label="Endereço" />
                    </Grid>
                    <Grid item xs={10} md={7}>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={(event) => {
                                            tipo.plastico = event.target.checked
                                            setTipo(tipo)
                                        }}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Plástico"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={(event) => {
                                            tipo.metal = event.target.checked
                                            setTipo(tipo)
                                        }}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Metal"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={(event) => {
                                            tipo.papeu = event.target.checked
                                            setTipo(tipo)
                                        }}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Papeu"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={(event) => {
                                            tipo.vidro = event.target.checked
                                            setTipo(tipo)
                                            console.log(tipo)
                                        }}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Vidro"
                            />
                        </FormGroup>
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
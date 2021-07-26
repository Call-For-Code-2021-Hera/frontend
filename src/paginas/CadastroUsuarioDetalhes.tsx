

import { Box, Button, Grid, makeStyles, TextField, TextFieldProps, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import InputMask from "react-input-mask";

import apiUsuario from "../services/apiUsuario";
import LogoImg from '../assets/img/logo-provisoria.png';
import { ListaDeEnderecos } from "../utils/Enderecos";

const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
    }
}))

export function CadastroUsuarioDetalhes() {
    const classes = useStyles();

    const { id } = useParams<{ id: string }>();

    console.log('token: ', localStorage.getItem('tokenCliente'))
    const history = useHistory();

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nuCpfCnpj, setNuCpfCnpj] = useState('');
    const [email, setEmail] = useState('');

    const ListaEnderecos = ListaDeEnderecos();

    function getRandomIntInclusive(min: any, max: any) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    const handleSubmit = async () => {
        await apiUsuario.post('/usuario/cadastrar', {
            clienteId: id,
            nome: nome,
            endereco: ListaEnderecos[getRandomIntInclusive(1, 30)],
            nuCpfCnpj: nuCpfCnpj,
            email: email,
            tipo: 'usuario',
            telefone: telefone.replace(/\D/g, '')
        })
        
        history.push('/login');


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
                        Cadastro Usuário
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
                            value={nuCpfCnpj}
                            onChange={(event) => { setNuCpfCnpj(event.target.value) }}
                            fullWidth={true}
                            id="nuCpfCnpj"
                            name="nuCpfCnpj"
                            label="CPF/CNPJ" />
                    </Grid>

                    <Grid item xs={10} md={7}>
                        <TextField
                            variant="outlined"
                            value={nome}
                            onChange={(event) => { setNome(event.target.value) }}
                            fullWidth={true}
                            id="nome"
                            name="nome"
                            label="Nome" />
                    </Grid>
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
                        <InputMask mask="(99) 9999-9999" value={telefone} onChange={(event) => { setTelefone(event.target.value) }}>
                            {(inputProps: JSX.IntrinsicAttributes & TextFieldProps) => <TextField
                                {...inputProps}
                                variant="outlined"
                                value={telefone}
                                fullWidth={true}
                                id="telefone"
                                name="telefone"
                                label="Telefone" />}
                        </InputMask>

                    </Grid>

                    <Grid item xs={10} md={7}>
                        <TextField
                            variant="outlined"
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                            fullWidth={true}
                            id="email"
                            name="email"
                            label="E-mail" />

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
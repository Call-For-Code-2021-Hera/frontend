import { Box, Button, Divider, Grid, LinearProgress, makeStyles, Typography, useTheme } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { LogOutButton } from "../components/buttons";
import apiUsuario from "../services/apiUsuario";

const useStyles = makeStyles((theme) => ({
    mainContent: {
        padding: '20px',
    },
    descricaoContainer: {
        boxSizing: 'border-box',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '5px 3px 10px 2px rgba(0,0,0,0.46)',
        background: theme.palette.primary.contrastText,
        marginTop: '10px',
    }
}))

export function HomeLogadaAssociacao() {
    const history = useHistory();
    const theme = useTheme();
    const classes = useStyles(theme);

    const [endereco, setEndereco] = useState<any>(null);
    const [nome, setNome] = useState<any>(null);
    const [nuCpfCnpj, setNuCpfCnpj] = useState<any>(null);
    const [telefone, setTelefone] = useState<any>(null);

    const getUsuario = async () => {
        const response = await apiUsuario.get('/usuario/' + localStorage.getItem('idCliente'))
        console.log(response);
        setNome(response.data.nome)
        setNuCpfCnpj(response.data.nuCpfCnpj)
        setEndereco(response.data.endereco)
        setTelefone(response.data.telefone)

    }
    useEffect(() => {
        let a = getUsuario();
    }, [])
    return (
        <>
            <Grid container className={classes.mainContent} justifyContent="center">
                <Grid item>
                    <Grid container spacing={2} direction="column" alignItems="center">
                        <Grid item>
                            <Grid container spacing={3} alignItems="center" justifyContent="center">
                                <Grid item>
                                    <img style={{ borderRadius: '20px' }} src="http://picsum.photos/200"></img>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} spacing={2}>
                                            <Button
                                                onClick={() => {
                                                    history.push('/rotas-list')
                                                }}
                                                fullWidth={true}
                                                variant="contained"
                                                color="primary">
                                                <Typography variant="caption">
                                                    Rotas
                                                </Typography>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                onClick={() => {
                                                    history.push('/rotas-list');
                                                }}
                                                fullWidth={true}
                                                variant="contained"
                                                color="primary">
                                                <Typography variant="caption">
                                                    Historico
                                                </Typography>
                                            </Button>

                                        </Grid>
                                        <Grid item xs={12}>
                                            <LogOutButton />
                                        </Grid>
                                    </Grid>



                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box mt={3}>
                                <Grid container direction="column">
                                    <Grid item xs={12}>
                                        <Typography variant="h5" color="primary" style={{ fontWeight: 'bold' }}>
                                            {nome}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider></Divider>
                                    </Grid>
                                </Grid>
                            </Box>

                        </Grid>
                        <Grid item>
                            <Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>
                                Descrição:
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Grid container justifyContent="center">
                                <Grid item xs={12} md={7}>
                                    <div className={classes.descricaoContainer}>
                                        <Typography variant="body2" style={{ lineHeight: 1.8 }}>
                                            <Typography display="block">
                                                CPF/CNPJ: {nuCpfCnpj}
                                            </Typography>
                                            <Typography display="block">
                                                TELEFONE: {telefone}
                                            </Typography>
                                            <Typography display="block">
                                                ENDERECO: {endereco}
                                            </Typography>
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
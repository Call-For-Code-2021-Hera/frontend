import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { CardLocal } from "../components/card-local";


const useStyles = makeStyles(() => ({
    mainContent: {
        boxSizing: 'border-box',
        padding: '2vw',
        display: 'flex',
        justifyContent: 'center'
    },
    localContainer: {
        borderRadiu: '30px',
        background: '#FAFAFA',
        padding: '30px',    
    }
}))

export function MinhasRotas() {
    const classes = useStyles();

    const [localList, setLocalList] = useState([
        {
            nomeUsuario: 'Pedro lemos',
            endereco: 'Rua não sei la das quantas',
            contato: '11999999999',
        },
        {
            nomeUsuario: 'Pedro lemos',
            endereco: 'Rua não sei la das quantas',
            contato: '11999999999',
        },
        {
            nomeUsuario: 'Pedro lemos',
            endereco: 'Rua não sei la das quantas',
            contato: '11999999999',
        }
    ]);

    return (
        <>
            <div className={classes.mainContent}>
                <Grid container>
                    <Grid xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box my={3}>
                                    <Typography style={{ fontWeight: 'bold' }} color="primary" variant="h3">
                                        Minhas rotas:
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Grid className={classes.localContainer} container spacing={3}>
                            {localList.map((item) => {
                                return (
                                    <Grid item xs={12} md={6}>
                                        <CardLocal
                                            nomeUsuario={item.nomeUsuario}
                                            contato={item.contato}
                                            endereco={item.endereco}></CardLocal>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>


            </div>
        </>
    )
}
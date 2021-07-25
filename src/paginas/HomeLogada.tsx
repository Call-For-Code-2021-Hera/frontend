import { Box, Button, Grid, LinearProgress, makeStyles, Typography, useTheme } from "@material-ui/core";

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

export function HomeLogada() {
    const theme = useTheme()
    const classes = useStyles(theme);
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
                                            <Button fullWidth={true} variant="contained" color="primary">
                                                <Typography variant="caption">
                                                    Solicitar coleta
                                                </Typography>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button fullWidth={true} variant="contained" color="primary">
                                                <Typography variant="caption">
                                                    Historico
                                                </Typography>
                                            </Button>

                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button fullWidth={true} variant="contained">
                                                <Typography variant="caption">
                                                    Sair
                                                </Typography>
                                            </Button>

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
                                            Carlos Eduardo
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <LinearProgress style={{ height: 10, borderRadius: '100px', marginBottom: '30px' }} variant="determinate" value={50} />
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
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam quaerat ratione beatae fugiat aspernatur adipisci veniam incidunt tempore explicabo impedit. Saepe impedit voluptatibus expedita aperiam consequuntur reiciendis ipsam. Sit, similique.

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
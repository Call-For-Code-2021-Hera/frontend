import { Button, Grid, makeStyles, Typography, useTheme } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import LogoImg from '../assets/img/logo-provisoria.png'

const useStyles = makeStyles(() => ({
    infoContainer: {
        marginBottom: '20px',
    },
    infoItem: {
        padding: '20px',
        boxShadow: '5px 3px 10px 2px rgba(0,0,0,0.46)',
    }
}))

export function HomePage() {
    const history = useHistory()
    const theme = useTheme()
    const classes = useStyles()
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item>
                    <img src={LogoImg} />
                </Grid>
            </Grid>

            <Grid container className={classes.infoContainer}>
                <Grid item xs={12} className={classes.infoItem} style={{ background: theme.palette.primary.main }}>
                    <Typography variant="h6" style={{ color: theme.palette.primary.contrastText }}>
                        Titulo 1
                    </Typography>
                    <Typography variant="body2" style={{ color: theme.palette.primary.contrastText }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, ullam quisquam. Culpa provident libero nihil nemo deleniti, ipsa assumenda aut
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.infoItem} style={{ background: theme.palette.primary.contrastText }}>
                    <Typography variant="h6" style={{ color: theme.palette.primary.main }}>
                        Titulo 1
                    </Typography>
                    <Typography variant="body2" style={{ color: theme.palette.primary.main }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, ullam quisquam. Culpa provident libero nihil nemo deleniti, ipsa assumenda aut
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.infoItem} style={{ background: theme.palette.primary.main }}>
                    <Typography variant="h6" style={{ color: theme.palette.primary.contrastText }}>
                        Titulo 1
                    </Typography>
                    <Typography variant="body2" style={{ color: theme.palette.primary.contrastText }}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, ullam quisquam. Culpa provident libero nihil nemo deleniti, ipsa assumenda aut
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" style={{ marginBottom: '20px' }}>
                <Grid item xs={6}>
                    <Button
                        onClick={() => {
                            history.push('/pre-cadastro')
                        }}
                        fullWidth={true} variant="contained" color="primary">
                        Cadastrar
                    </Button>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" style={{ marginBottom: '20px' }}>
                <Grid item xs={6}>
                    <Button onClick={()=>{
                        history.push('/login')
                    }} fullWidth={true} variant="contained">
                        Entrar
                    </Button>
                </Grid>
            </Grid>

        </>
    )
}
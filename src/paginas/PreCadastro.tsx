import { Card, CardActionArea, CardContent, Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import LogoImg from '../assets/img/logo-provisoria.png';

import ReciClagemIcon from '../assets/img/reciclagem-icon.png';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    mainContent: {
        padding: '0 20px',
    }
}))

export function PreCadastro() {
    const theme = useTheme();
    const history = useHistory();
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainContent}>
                <Grid container justifyContent="center">
                    <Grid item>
                        <img src={LogoImg} />
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" style={{ marginBottom: '20px' }}>
                    <Grid item>
                        <Typography variant="h4" color="primary">
                            Como você deseja se cadastrar?
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center">
                    <Grid item md={6} xs={12} >
                        <Grid container justifyContent="center" direction="column">
                            <Grid item style={{marginBottom: '20px'}}>
                                <Card 
                                onClick={()=>{
                                    history.push('/cadastro/usuario')
                                }}
                                >
                                    <CardActionArea>
                                        <CardContent>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <PersonIcon fontSize={'large'} color="primary"></PersonIcon>
                                                <Typography variant="h5">
                                                    <span>
                                                        Usuário
                                                    </span>
                                                </Typography>
                                            </div>
                                            <Typography gutterBottom variant="body1">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, architecto.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item style={{marginBottom: '20px'}}>
                                <Card 
                                     onClick={()=>{
                                        history.push('/cadastro/associacao')
                                    }}
                                    style={{background: theme.palette.primary.main}}>
                                    <CardActionArea>
                                        <CardContent>
                                            <div style={{ display: 'flex',flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                                                <img src={ReciClagemIcon} style={{width: '22px', marginRight:'5px'}} />
                                                <Typography style={{color: theme.palette.primary.contrastText}} variant="h5">
                                                    <span>
                                                        Associação de reciclagem
                                                    </span>
                                                </Typography>
                                            </div>
                                            <Typography style={{color: theme.palette.primary.contrastText}} variant="body1">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, architecto.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item style={{marginBottom: '20px'}}>
                                <Card
                                     onClick={()=>{
                                        history.push('/cadastro/empresa')
                                    }}
                                    >
                                    <CardActionArea>
                                        <CardContent>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <ApartmentIcon fontSize={'large'} color="primary"></ApartmentIcon>
                                                <Typography variant="h5">
                                                    <span>
                                                        Empresa
                                                    </span>
                                                </Typography>
                                            </div>
                                            <Typography gutterBottom variant="body1">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, architecto.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </div>

        </>
    )
}
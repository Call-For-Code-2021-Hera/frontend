import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core"
import { useState } from "react";

interface LocalProps {
    nomeUsuario: string;
    endereco: string;
    contato: string;
}

const useStyles = makeStyles(() => ({
    localContainer: {
        background: '#FFF',
    },
}))

export function CardLocal(props: LocalProps) {
    const classes = useStyles();


    return (
        <>
            <Card className={classes.localContainer}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {props.nomeUsuario}
                        </Typography>
                        <Typography gutterBottom variant="h6">
                            {props.endereco}
                        </Typography>
                        <Typography gutterBottom variant="h6">
                            {props.contato}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}
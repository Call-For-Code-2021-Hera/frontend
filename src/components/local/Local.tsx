import { makeStyles } from "@material-ui/core"
import { useState } from "react";

interface LocalProps {
    nomeUsuario: string;
    endereco: string;
    contato: string;
}

const useStyles = makeStyles(()=>({
    localContainer: {
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
    }
}))

export function Local(props: LocalProps){
    const classes = useStyles();

    
    return(
        <>
            <div className={classes.localContainer}>
                <div>

                </div>
            </div>
        </>
    )
}
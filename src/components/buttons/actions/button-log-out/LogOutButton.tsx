import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export function LogOutButton() {
    const history = useHistory();

    const closeSession = () =>{
        history.push('/');
    }
    
    return (
        <>
            <Button onClick={closeSession} fullWidth={true} variant="contained">
                <Typography variant="caption">
                    Sair
                </Typography>
            </Button>
        </>
    )
}
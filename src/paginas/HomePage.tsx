import { useHistory } from "react-router-dom"

export function HomePage(){
    const history = useHistory()
    const handleClick = () =>{
        history.push('/usuario')
    }
    return(
        <>
            <div onClick={handleClick}>
                teste
            </div>
        </>
    )
}
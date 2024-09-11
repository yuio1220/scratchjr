import { Paper } from "@mui/material"

type Props = {
    img: string,
    action: string
}

export const OrderButton = ({img, action}: Props) => {
    
    return(
        <Paper>
            <img src={img}></img>
        </Paper>
    )
}
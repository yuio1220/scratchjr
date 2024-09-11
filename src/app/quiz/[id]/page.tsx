"use client"

import { Button, Grid, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import end_button from "../../../../assets/button/end.png";
import start_button from "../../../../assets/button/start.png";
import right_arrow_button from "../../../../assets/button/right_arrow.png";
import speed_button from "../../../../assets/button/speed.png";
import slow_button from "../../../../assets/button/slow.png";
import normal_button from "../../../../assets/button/normal.png";
import fast_button from "../../../../assets/button/fast.png";
import pig from "../../../../assets/pig.png";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function QuizContents () {
    const router = useRouter()
    const [blockArray, setblockArray] = useState<string[]>([])
    const [isHover, setIsHover] = useState<string | null>(null)

    const addBlock = (src: string) => {
        setblockArray([...blockArray, src])
    }

    const deleteBlock = (deleteIndex: number) => {
        let newArray = blockArray.filter((item: string, index: number)=>index != deleteIndex)
        setblockArray(newArray)
    }   


    return (
        <div className="right" style={{margin: "10px 20px"}}> 
        <Grid container spacing={2}>
            <Grid item xs={6}>    
            <h2>
                ぶたをうごかそう
            </h2>
            <img onClick={()=>{console.log("CLICK")}} src={pig.src} />
            {/* <img onClick={()=>{console.log("CLICK")}} src={Img1.src} /> */}
            </Grid>
            <Grid item xs={6} style={{display: "flex", flexDirection: "column", height: "90vh"}}>
                <div className="yellow-button">
                    <img style={{height:"65px"}} onClick={()=>{addBlock(start_button.src)}} src={start_button.src} />
                </div>
                <div className="red-button">
                    <img style={{height:"65px"}} onClick={()=>{addBlock(end_button.src)}}  src={end_button.src} />
                </div>
                <div className="blue-button">
                    <img style={{height:"65px"}} onClick={()=>{addBlock(right_arrow_button.src)}}  src={right_arrow_button.src} />
                </div>
                <div className="orange-button">
                    <img style={{height:"65px"}} onClick={()=>{console.log("CLICK")}} src={speed_button.src} />
                    <img style={{height:"65px"}} onClick={()=>{console.log("CLICK")}} src={slow_button.src} />
                    <img style={{height:"65px"}} onClick={()=>{console.log("CLICK")}} src={normal_button.src} />
                    <img style={{height:"65px"}} onClick={()=>{console.log("CLICK")}} src={fast_button.src} />
                </div>
            
                <div className="code-box" style={{marginTop:"50px", border: "solid black",flexGrow: "1" }}>
                    
                    
                    {
                        blockArray.map((block: string, index: number)=>{
                            return (
                                <span
                                    key={index}
                                    onMouseEnter={()=>{setIsHover(block)}}
                                    onMouseLeave={() => {setIsHover(null)}}
                                    style={{position: "relative", width:"0px"}}
                                >
                                        <img  style={{height:"65px"}} onClick={()=>{console.log("CLICK")}} src={block} />
                                        <IconButton onClick={()=>{deleteBlock(index)}} aria-label="delete" style={{position: "relative", bottom:"50px", right:"35px"}}>
                                            <CloseIcon />
                                        </IconButton>
            
                                </span>
                        )
                        })
                    }
                </div>


            </Grid>
        </Grid>
        </div>
    )
}






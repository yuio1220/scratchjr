import { Dispatch, SetStateAction } from "react"
import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import { quiz } from "@/type/quiz"

type Props = {
    quiz: quiz,
    isSelected: number | undefined
    setIsSelected:  Dispatch<SetStateAction<number | undefined>>
}

export const QuizTopPage = ({quiz, setIsSelected, isSelected}: Props) => {
    const router = useRouter()

    return(
        <div>
            {
                isSelected ?
                <div>
                    <img src={quiz.img} />
                
                    <div>{quiz.description}</div>
                
                    <div>
                        <Button onClick={() => router.push(`/quiz/${quiz.id}`)}>はじめる</Button>
                        <Button onClick={()=>setIsSelected(undefined)}>もどる</Button>
                    </div>
            </div>
            :<></>
                
            }
        </div>

    )
}
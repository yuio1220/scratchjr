"use client"

import { Button, Paper } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { quiz } from "../../type/quiz";
import { QuizTopPage } from "@/components/page/QuizTopPage";
import Quiz1Img from "../../../assets/animal_race1.png";


export default function Quiz () {
    const router = useRouter()
    const [isSelected, setIsSelected] = useState<number | undefined>(undefined)
    const [selectedQuiz, setSelectedQuiz] = useState<quiz | undefined>(undefined)
    const quizzes: quiz[] = [
        {id:1, img: Quiz1Img.src, name: "もんだい１", description: "どうぶつレースをつくってみよう"},
        {id:2, img: "", name: "もんだい２", description: ""},
        {id:3, img: "", name: "もんだい３", description: ""},
        {id:4, img: "", name: "もんだい４", description: ""}
    ]

    return (
        <div>
            {
                isSelected 
                ?
                    <QuizTopPage 
                        quiz={selectedQuiz as quiz} 
                        setIsSelected={setIsSelected}
                        isSelected={isSelected}
                    >
                    </QuizTopPage>
                :
                <div>
                    {
                        quizzes.map((quiz: quiz, index: number)=>{
                            return (
                              <Button 
                                onClick={()=>{
                                    setIsSelected(quiz.id),
                                    setSelectedQuiz(quiz)
                                }} 
                                key={quiz.id}>{quiz.name}</Button>
                            )
                        })
                    }
                </div>
            }

        </div>
    )
}
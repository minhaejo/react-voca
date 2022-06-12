
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom" //url에 포함된 값을 얻을때 //react-router-dom은 주소랑 친한녀석임
import useFetch from "../hooks/useFetch"
import Word from "./Word"
  //
export default function Day() {
    const day = useParams().day
    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    // const [words,setWords]=useState([])
    // useEffect(()=>{
    //     fetch("http://localhost:3001/words")
    //     .then(res=>{
    //         return res.json()
    //     })
    //     .then(data=>{
    //         setWords(data)
    //     })
    // },[])
    //결국엔 목적지향적이여야함 url이 바뀌고 이시점에서 바뀌는건 link to {}가 a href 로 컴파일
    //그 바뀐 데이터값을 전달해야하기 때문에 필터를 쓰는거
    //www.naver.com/day/3 useParams는 슬래쉬에 맨 마지막 값
    //{day를 반환하는거임}
    
  
     //["www.naver.com","day","3"]url이 문자열로 /단위로 쪼개서 들어옴
    

    return(
        <>
        <h2>Day{day}</h2>
        <table>
            <tbody>
                {words.map((word)=>
                 <Word word={word}
                 //word프롭은 wordlist의 객체 한줄한줄임
                 //이상태에서 word에서 프롭으로 받고 그 프롭에 id===0이면 null로 해서 데이터를 지우는거임
                 />
                )}
            </tbody>
        </table>
        </>
    )
}   

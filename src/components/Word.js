import { useState } from "react"

export default function Word({word:w}) {
    const [word,setWords]=useState(w)
    //day컴포넌트에서 찾을것
    //구조분해문법에서의 네이밍 변수화.

    const [isShow,setIsShow] = useState(false)
    const [isDone,setIsDone] =useState(word.isDone)


    const onClick = () => setIsShow(!isShow)

//Create - POST
//Read - GET
//Update - PUT
//Delete - DELETE
    function toggleDone() { 
        fetch(`http://localhost:3001/words/${word.id}`,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json", //보내는 리소스의 타입을 의미함 이미지 html 평범한 url 가능

            },
           
            body : JSON.stringify({
                ...word,
                isDone :!isDone
            }),
            //제이슨 데이터로 변환
            
        })
        .then(res => {
            if (res.ok ) {
                setIsDone(!isDone)
                //인터페이스 의 ok읽기 전용 속성 Response에는 응답이 성공했는지(상태 200-299 범위) 여부를 나타내는 부울이 포함됩니다.
            }
        })


        
    }
    function del() {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            fetch(`http://localhost:3001/words/${word.id}`,{
                method:"DELETE",
            }).then(res => {
                if (res.ok) {
                    setWords({id:0})
                }
            })
            
        }
    }
    if (word.id === 0) {
        return null
    }

    return(
         <tr key={word.id} className={isDone ? "off" :""}>
                    <td><input type ="checkbox" checked={isDone} onChange={toggleDone}></input></td>
                   <td>{word.eng}</td>
                   <td>{isShow && word.kor}</td>
                   <td><button onClick={onClick}>뜻 {isShow ? "숨기기" : "보기"}</button><button onClick={del} className="btn_del">삭제</button></td>
                </tr>
          )
    }


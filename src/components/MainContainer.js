import React from 'react'
import { TableHeading } from "./TableHeading"
import { TableBlock } from "./TableBlock"
import { InputBar } from "./InputBar"

export const MainContainer = ({onSubmitHandler, onChangeHandler, onExampleHandler}) => {
  return (
    <div className="main-container">
        <div className="title">CatGPT</div>
        <div className="table-container">
            <div className="table-column examples">
                <TableHeading>Examples</TableHeading>
                <TableBlock onExampleHandler={onExampleHandler}>"고양이들이 어떻게 개발자가 되는지 설명해봐"</TableBlock>
                <TableBlock onExampleHandler={onExampleHandler}>"13번째 고양이 생일선물을 추천해줄수 있니?"</TableBlock>
                <TableBlock onExampleHandler={onExampleHandler}>"냥냥프로그래밍 언어로 API 리퀘스트로 보내는 법을 얼려줘?"</TableBlock>
            </div>
            <div className="table-column">
                <TableHeading>한계성</TableHeading>
                <TableBlock>답변된 내용은 모두 냥냥포럼과 관련되었습니다</TableBlock>
                <TableBlock>난 대단한 고양이댜옹!</TableBlock>
                <TableBlock>무제한 파월ㄹㄹㄹㄹ</TableBlock>
            </div>
            <div className="table-column">
                <TableHeading>제한</TableHeading>
                <TableBlock>사고적으로, 고양이가 책상의 컵을 떨어트릴 수 있다.</TableBlock>
                <TableBlock>고양이-오류가 있을 수 있다</TableBlock>
                <TableBlock>2021년 고양이 년도 이후로 학습이 되지 않았다</TableBlock>
            </div>
            
        </div>
        <InputBar onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler}/>
    </div>
  )
}

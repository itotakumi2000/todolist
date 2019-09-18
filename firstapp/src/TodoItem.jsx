import  React from "react"

import styled from "styled-components"

const ItemWrap = styled.li`
	list-style: none;
	background-color: #fff;
	border-left: 35px solid #00FFFF;
	margin-top: 40px;
	padding-top: 20px;
	padding-bottom: 20px;
	box-shadow: 8px 3px;
`


const ToggleBtn = styled.button`
	width: 100px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-radius: 5px 5px;
	:focus { 
        outline:0; 
	}
	:hover {
		background-color: #c0c0c0;
	}
`

export default class TodoItem extends React.Component {
	render() {
		const buttonText =  this.props.isDone?"戻す":"完了"
		// sample.isDone?"戻す":"完了"
		// 三項演算子

		return(
			<ItemWrap>
				<p>タイトル: {this.props.title}</p>
				<p>詳細: {this.props.desc}</p>
				<ToggleBtn　onClick={()=>this.props.buttonChange(this.props.id)}>{buttonText}</ToggleBtn>
			</ItemWrap>
		)

		// function handleClick() {
		// 	this.props.handleClick(this.props.)
		// }
		// onClickの中にthis.props.id

	}
}

// Reduxは倉庫に入れて、それから全て取り出す

// sample.desc

// sample.addEventListener("click", function(){
	// argumentsで参照できる、仮引数
// })
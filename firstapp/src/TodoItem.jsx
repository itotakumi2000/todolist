import  React from "react"

export default class TodoItem extends React.Component {
	render() {
		const buttonText =  this.props.isDone?"戻す":"完了"
		// sample.isDone?"戻す":"完了"
		// 三項演算子

		return(
			<li>
				<p>タイトル: {this.props.title}</p>
				<p>詳細: {this.props.desc}</p>
				<button　onClick={()=>this.props.handleClick(this.props.id)}>{buttonText}</button>
			</li>
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
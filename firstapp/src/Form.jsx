import React from "react"

import styled from "styled-components"

const FormBtn = styled.button`
    box-shadow: 3px 3px black;
	border-radius: 50% 50%;
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: white;
    background-color: #1e90ff;
    :active{
        box-shadow: 0px 0px;
    }
`


const FormInputLeft = styled.input`
    height: 30px;
    margin-right: 20px;
`

const FormInputRight = styled.input`
    height: 30px;
    margin-right: 20px;
`

class Form extends React.Component {
    
    render() {
        return(
            <form onSubmit={this.props.hundleSubmit}>
                <FormInputLeft type="text" name="title" placeholder="タイトル" />
                <FormInputRight type="text" name="desc" placeholder="詳細" />
                <FormBtn type="submit">＋</FormBtn>
            </form>
        )
    }
}
// formがsubmitされたらappのstateを書き換えたい
// しかし、formコンポーネント内では、appのstateは参照できない...（コンポーネントが分かれているため）

export default Form

// nameをつけるのは識別するため

// class Form extends React.Component {
//     hundleSubmit(){
//         // 処理
//     }
//     render() {
//         return(
//             <form onSubmit={this.props.hundleSubmit}>
//                 <input type="text" name="title" />
//                 <input type="text" name="desc" />
//                 <button type="submit">追加</button>
//             </form>
//         )
//     }
// }
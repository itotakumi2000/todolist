import React from "react"

class Form extends React.Component {
    
    render() {
        return(
            <form onSubmit={this.props.hundleSubmit}>
                <input type="text" name="title" />
                <input type="text" name="desc" />
                <button type="submit">追加</button>
            </form>
            // formがsubmitされたらappのstateを書き換えたい
            // しかし、formコンポーネント内では、appのstateは参照できない...（コンポーネントが分かれているため）
        )
    }
}

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
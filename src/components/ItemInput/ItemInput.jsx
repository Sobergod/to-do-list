import React from 'react'
import './ItemInput.css'

class ItemInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
        }
    }
    titleChange(e) {
        // console.log(e);
        this.setState({
            title: e.target.value
        })
    }
    contentChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    submitBtn() {
        if (this.props.onSubmit) {
            const { title, content } = this.state;
            if (this.state.title === '' || this.state.content === '') {
                alert("检查内容")
                return false;
            }
            this.props.onSubmit({ title, content });
        }
        this.setState({ title: "", content: "" })
    }
    abandon() {
        this.setState({ title: "", content: "" })
    }
    render() {
        return (
            <div className='inputWrap'>
                <p className='inputItem'>
                    <span className='inputItemTitle'>标题: </span>
                    <input className='input' value={this.state.title} onChange={this.titleChange.bind(this)} type="text" />
                </p>
                <p className='inputItem'>
                    <span className='inputItemTitle'>内容: </span>
                    <textarea className='input' value={this.state.content} onChange={this.contentChange.bind(this)} name="" id="" cols="30" rows="10"></textarea>
                </p>
                <p className='btnWrap'>
                    <span onClick={this.submitBtn.bind(this)}>提交</span>
                    <span onClick={this.abandon.bind(this)}>放弃</span>
                </p>
            </div >
        )
    }
}
export default ItemInput
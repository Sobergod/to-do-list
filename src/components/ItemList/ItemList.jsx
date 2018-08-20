import React from 'react'
import './ItemList.css'
import AX from '../../lib/axios.config.js';

class ItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    finishBtn(i, j) {
        if (this.props.onFinish) {
            this.props.onFinish(i, j);
        }
    }
    deleteBtn(i, j) {
        // this.setState({ lists })
        if (this.props.onDel) {
            let lists = this.props.lists,
                item = this.props.lists[i].listItems,
                id = item[j]._id,
                time = lists[i].relTime;
            AX.get('/remove', {
                params: {
                    id: id,
                    time: time
                }
            }).then(res => {
                if (res.data.message === '删除成功') {
                    this.props.setData()
                }
            })
            this.props.onDel(lists);
        }
    }
    render() {
        return (
            <div>
                {this.props.lists.map((list, i) => {
                    return (
                        <div key={i} className='list-item'>
                            <p className='date'>
                                <span>{list.relTime}</span>
                            </p>
                            <ul>
                                {this.props.lists[i].listItems.map((item, j) => {
                                    return (
                                        <li key={j} >
                                            <p><strong>标题: </strong>{item.title}</p>
                                            <div className='item'>
                                                <span className='l'></span>
                                                <span className='lf'>{item.content}</span>
                                                <div className='opt'>
                                                    {item.isFinish === false ? (
                                                        <span onClick={this.finishBtn.bind(this, i, j)} className='finish-btn'>完成</span>
                                                    ) : ''}
                                                    <span onClick={this.deleteBtn.bind(this, i, j)} className='delete-btn'>删除</span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ItemList
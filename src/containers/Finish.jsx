import React from 'react';
import AX from '../lib/axios.config.js';
import ItemList from '../components/ItemList/ItemList';
class Finish extends React.Component {
    constructor() {
        super();
        this.state = {
            lists: [],
            listUrl: []
        }
    }
    componentWillMount() {
        this.setData()
    }
    setData() {
        AX.get('/getlist', {
            params: {
                isFinish: true
            }
        }).then((res) => {
            this.stateChange(res.data.lists);
        })
    }
    getDate() {
        let date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();
        month = (month < 10 ? "0" + month : month);
        var mydate = (year.toString() + '-' + month.toString() + '-' + day.toString());
        return mydate;
    }
    // 检测states变化
    stateChange(lists) {
        this.setState({
            lists: lists
        })
    }
    onDel(lists) {
        // let lists = this.state.lists,
        //     item = this.state.lists[i].listItems,
        //     id = item[j]._id,
        //     time = lists[i].relTime;
        // AX.get('/remove', {
        //     params: {
        //         id: id,
        //         time: time
        //     }
        // }).then(res => {
        //     if (res.data.message === '删除成功') {
        //         this.setData()
        //     }
        // })
        // item.splice(j, 1);
        // // console.log(item)
        // if (item.length === 0) {
        //     lists.splice(i, 1);
        // }
        this.stateChange(lists);
    }
    render() {
        return (
            <div className='wrap'>
                <div className='list-wrap'>
                    <ItemList
                        listUrl={this.state.listUrl}
                        lists={this.state.lists}
                        setData={this.setData.bind(this)}
                        onDel={this.onDel.bind(this)}
                    />
                </div>
            </div>
        )
    }
}
export default Finish
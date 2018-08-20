import React from 'react';
import ItemList from '../components/ItemList/ItemList';
import ItemInput from '../components/ItemInput/ItemInput';
import '../style/home.css';
import AX from '../lib/axios.config.js';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            lists: [],
            listUrl: []
            // test: this.setData()
        }
    }
    componentWillMount() {
        this.setData()
    }
    setData() {
        AX.get('/getlist', {
            params: {
                isFinish: false
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
    submit(content) {
        // let lists = this.state.lists,
        //     list = {
        //         relTime: this.getDate(),
        //         date: '创建日期' + this.getDate(),
        //         listItems: []
        //     },
        //     count = 0;
        AX({
            url: '/',
            method: 'post',
            data: {
                title: content.title,
                content: content.content,
                time: this.getDate(),
            }
        }).then(res => {
            if (res.data.message === '成功') {
                this.setData();
            }
            alert(res.data.message)
        })

        // 模拟数据添加
        // if (lists.length === 0) {
        //     list.listItems.push(content);
        //     lists.push(list)
        // } else {
        //     for (let i = 0; i < lists.length; i++) {
        //         if (lists[i].relTime === this.getDate()) {
        //             lists[i].listItems.push(content)
        //             break;
        //         } else {
        //             count++;
        //         }
        //     }
        // }
        // if (count === lists.length) {
        //     list.listItems.push(content);
        //     lists.push(list);
        // }
        // this.setState({
        //     lists: lists
        // })
        // alert(content);
    }
    onFinish(i, j) {
        let lists = this.state.lists,
            item = this.state.lists[i].listItems,
            id = item[j]._id,
            time = lists[i].relTime;
        AX.get('/finish', {
            params: {
                id: id,
                time: time
            }
        }).then(res => {
            if (res.data.message === '完成') {
                this.setData()
            }
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
                    <ItemInput
                        onSubmit={this.submit.bind(this)}
                    >
                    </ItemInput>
                    <ItemList
                        listUrl={this.state.listUrl}
                        lists={this.state.lists}
                        setData={this.setData.bind(this)}
                        onFinish={this.onFinish.bind(this)}
                        onDel={this.onDel.bind(this)}
                    />
                </div>
            </div>
        )
    }
}
export default Home 
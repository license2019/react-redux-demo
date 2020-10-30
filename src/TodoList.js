import React from 'react'
import { Button, Input, List, Row, Col } from 'antd'
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDelItemAction } from './store/actionCreaotor'

export default class TodoList extends React.Component {

  constructor(props) {
    super(props)
    // console.log(store.getState())
    // 获取store中的当前state
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  // 对store内部的数据进行更新同步
  handleStoreChange = () => {
    this.setState(store.getState())
  }

  handleInputChange = e => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  // 增加item
  handleAddList = () => {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  // 删除item
  handleDelList = id => {
    const action = getDelItemAction(id)
    store.dispatch(action)
  }

  render() {
    return (
      <div style={{ marginTop: 10, marginLeft: 10 }}>
        <Input placeholder="todo info" style={{ width: 300, marginRight: 10 }} value={this.state.inputValue} onChange={this.handleInputChange} />
        <Button type="primary" onClick={this.handleAddList}>提交</Button>
        <List
          style={{ marginTop: 10, width: 300 }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => {
            return (
              <Row>
                <Col span={16}>
                  <List.Item>{item}</List.Item>
                </Col>
                <Col span={8}>
                  <Button type="default" onClick={this.handleDelList.bind(this, index)}>删除</Button>
                </Col>
              </Row>
            )
          }}
        />
      </div>

    )
  }
}


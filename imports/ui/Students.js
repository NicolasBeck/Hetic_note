import React from 'react'
import { Table, Select, Input, Popconfirm, Button, Row, Col } from 'antd'

const Option = Select.Option
const columns = [{
  title: 'FirstName',
  dataIndex: 'firstName',
  key: 'firstName',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'LastName',
  dataIndex: 'lastName',
  key: 'lastName',
  render: text => <a href="#">{text}</a>,
}]

const data = []

const EditableCell = ({ editable, value, column, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : null
    }
    {!editable
      ? value
      : null
    }
  </div>
)

export default class Students extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [{
      title: 'FirstName',
      dataIndex: 'firstName',
      sorter: (a, b) => {
        return a.firstName.localeCompare(b.firstName)
      },
      render: (text, record) => this.renderColumns(text, record, 'firstName'),
    }, {
      title: 'LastName',
      dataIndex: 'lastName',
      sorter: (a, b) => {
        return a.lastName.localeCompare(b.lastName)
      },
      render: (text, record) => this.renderColumns(text, record, 'lastName'),
    }, {
      title: 'Operations',
      dataIndex: 'operations',
      render: (text, record) => {
        const { editable } = record
        return (
          <div className="editable-row-operations">
            {
              editable
                ?
                <span>
                  <a onClick={() => this.save(record.key)}>Save </a>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
                :
                <span>
                  <a onClick={() => this.edit(record.key)}>Edit </a>
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                    <a href="#"> Delete</a>
                  </Popconfirm>
                </span>
            }

          </div>
        )
      },
    }]
    this.state = {
      data: [],
      count: 0,
    }
    this.cacheData = this.state.data.map(item => ({ ...item }))
  }



  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        column={column}
        onChange={value => this.handleChange(value, record.key, column)}
      />
    )
  }

  handleChange(value, key, column) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item.key)[0]
    if (target) {
      target[column] = value
      this.setState({ data: newData })
    }
  }

  edit(key) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item.key)[0]
    if (target) {
      target.editable = true
      this.setState({ data: newData })
    }
  }

  save(key) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item.key)[0]
    if (target) {
      delete target.editable
      this.setState({ data: newData })
      this.cacheData = newData.map(item => ({ ...item }))
    }
  }

  cancel(key) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item.key)[0]
    if (target) {
      Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
      delete target.editable
      this.setState({ data: newData })
    }
  }

  onDelete = (key) => {
    const data = [...this.state.data]
    this.setState({ data: data.filter(item => item.key !== key) })
  }

  handleAdd = () => {
    const { count, data } = this.state
    const newData = {
      key: count,
      firstName: 'undefined',
      lastName: 'undefined',
    }
    this.setState({
      data: [...data, newData],
      count: count + 1,
    })
  }

    render() {
      return(
        <div>
        <Row>
          <Col span={24}>
            <h1>My Students</h1>
          </Col>
        </Row>
        <Row>
          <Col span={23}>
            <span>Select a promotion : </span>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a promotion"
            >
              <Option value="P2018">P2018</Option>
              <Option value="P2019">P2019</Option>
              <Option value="P2020">P2020</Option>
            </Select>
          </Col>
          <Col span={1} >
            <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col span={24}>
          <Table bordered dataSource={this.state.data} columns={this.columns} size="small" pagination={{ showSizeChanger: true }} />
          </Col>
        </Row>
        </div>
      );
    }
};
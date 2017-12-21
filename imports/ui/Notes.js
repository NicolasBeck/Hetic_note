import React from 'react';
import { Table, Select, Input, Popconfirm, Button, Row, Col } from 'antd'

const Option = Select.Option
const columns = [{
  title: 'FirstName',
  dataIndex: 'firstName',
  key: 'firstName',
  render: text => <span>{text}</span>,
}, {
  title: 'LastName',
  dataIndex: 'lastName',
  key: 'lastName',
  render: text => <span>{text}</span>,
}, {
  title: 'Note',
  dataIndex: 'note',
  key: 'note',
  render: text => <span>{text}</span>,
}]

const data = [{
  key: '1',
  firstName: 'Mike',
  lastName: "Tyson",
  note: 16
}, {
  key: '2',
  firstName: 'John',
  lastName: 'Wein',
  note: 14
}]

export default class Notes extends React.Component {

    render() {
      return(
        <div>
        <Row>
          <Col span={24}>
            <h1>Notes</h1>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <span>Select a note : </span>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a note"
            >
              <Option value="PartielJS1">Partiel JS 1</Option>
              <Option value="PartielJS2">Partiel JS 2</Option>
              <Option value="PartielJS3">Partiel JS 3</Option>
              <Option value="PartielJS4">Partiel JS 4</Option>
            </Select>
          </Col>
        </Row>
        <br/>
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
            <Button className="editable-add-btn">Add note</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col span={24}>
          <Table bordered dataSource={data} columns={columns} size="small" pagination={{ showSizeChanger: true }} />
          </Col>
        </Row>
        </div>
      );
    }
};
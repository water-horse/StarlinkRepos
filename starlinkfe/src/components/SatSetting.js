import React, {Component} from 'react';
import {Form, Button, InputNumber} from 'antd';

class SatSetting extends Component {
  showSatellite = values => {
    console.log('Received values of form: ', values);
  }

  render() {
    return (
      <Form
        name="wrap"
        labelCol={{
          flex: '150px',
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        className="sat-setting"
        onFinish={this.showSatellite}
      >

        <Form.Item
          label="Longitude(degrees)"
          name="longitude"
          rules={[
            {
              required: true,
              message: "Please input your longitude",
            }
          ]}
        >
          <InputNumber min={-180} max={180}
            style={{width: "100%"}}
            placeholder="Please input longitude"
          />
        </Form.Item>

        <Form.Item
          label="Latitude(degrees)"
          name="latitude"
          rules={[
            {
              required: true,
              message: "Please input latitude",
            }
          ]}
        >
          <InputNumber min={-90} max={90}
            style={{width: "100%"}}
            placeholder="Please input latitude"
          />
        </Form.Item>

        <Form.Item
          label="Altitude(meters)"
          name="elevation"
          rules={[
            {
              required: true,
              message: "Please input altitude",
            }
          ]}
        >
          <InputNumber min={-413} max={8850}
            style={{width: "100%"}}
            placeholder="Please input altitude"
          />
        </Form.Item>

        <Form.Item
          label="Radius(degrees)"
          name="altitude"
          rules={[
            {
              required: true,
              message: "Please input radius",
            }
          ]}
        >
          <InputNumber min={0} max={90}
            style={{width: "100%"}}
            placeholder="Please input radius"
          />
        </Form.Item>

        <Form.Item
          label="Duration(secs)"
          name="duration"
          rules={[
            {
              required: true,
              message: "Please input Duration",
            }
          ]}
        >
          <InputNumber min={0} max={90}
            style={{width: "100%"}}
            placeholder="Please input Duration"
          />
        </Form.Item>

        <Form.Item className="show-nearby">
          <Button type="primary" htmlType="submit" style={{textAlign: "center"}}>
            Find Satellite
          </Button>
        </Form.Item>

      </Form>
    );
  }
}

export default SatSetting;
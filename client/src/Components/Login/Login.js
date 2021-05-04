import React, { Component, useState } from 'react';
import { Modal, Button, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import '../../Scss/Login.scss';


function Login() {

    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return (
      <div>
        <Button type="primary" onClick={showModal}>
          로그인
        </Button>
        <Modal title="Login to Ninja Coders" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} 
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '-30px',
        }}
        >
        <Input
         style={{
          borderRadius:'5px',
          marginTop: '30px',
          // width: '475px'        
        }}
          type="email"
          placeholder="E-mail"
      
        />
        <Space direction="vertical">
          <div>
          <Input.Password
            style={{
              borderRadius:'5px',
              marginTop: '30px',
              width: '475px'        
            }}
              type="password"
              placeholder="password"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            )}
          />
          </div>
        </Space>
      </Modal>
      </div>
    )
}

export default Login
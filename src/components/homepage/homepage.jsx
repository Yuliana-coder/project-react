import React, { useState } from "react";
import { Typography, Input, Form, Button, Space, DatePicker } from "antd";
import moment from 'moment';

function disabledDate(current) {
    return current && current.valueOf() < Date.now() - Math.pow(60,4);
}

export function Homepage() { 
    let [userName, setUserName] = useState('')
    let [date, setDate] = useState(0)
    let [showMessage, setShowMessage] = useState('');

    return <div>
            <Typography.Title>
                Записаться на стирку
            </Typography.Title>
            <Typography.Paragraph>
                Здесь можно записаться в прачечную. Заполните Ваше имя и выберите удобное время стирки.
            </Typography.Paragraph>
            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                <Form.Item
                    label="Имя"
                    name="userName"
                    rules={[{ required: true, message: 'Пожалуйста, введите Ваше имя' }]}
                >
                    <Input onInput={(event) => { setUserName(event.target.value) }} />
                </Form.Item>

                <Form.Item
                    label="Время стирки"
                    name="date"
                    rules={[{ required: true, message: 'Пожалуйста, выберите дату и время стирки' }]}
                >
                    <DatePicker
                        format={'YYYY-MM-DD HH:mm'}
                        disabledDate={disabledDate}
                        minuteStep={30}
                        onChange={(event) => setDate(event._d)} showTime />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={() => { setShowMessage(userName + ', ' + 'Вы успешно записаны на стирку. Дата: ' + date) }} type="primary" htmlType="submit">
                    Записаться!
                    </Button>
                </Form.Item>
                </Form>
                {userName && date ? 
                <Typography.Paragraph>
                    {showMessage}
                </Typography.Paragraph>
                : null
                }
            </div>
        </div>
}


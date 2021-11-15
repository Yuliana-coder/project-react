import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Typography, Space } from "antd";

function getUser() {
    return new Promise()
}

const useGithubData = (userName) => {
    const [userData, setUserData] = useState({});
    const token = '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';

    useEffect(() => {
        if (!userName) return;
        const url = 'https://api.github.com/users/' + userName;
        const promise = axios(url, {
            headers: {
                "Authorization": "token "+ token
            }
        });

        promise.then((response) => {
            setUserData(response.data);
        }).catch((error) => {
            throw new Error(error);
        }) 

    }, [userName]);

    return userData;
}

export function AboutPage() {
    const profileData = useGithubData('yuliana-coder');

    return <div >
    <Typography.Title>
        О нас
    </Typography.Title>
        <Space>
            <Typography.Text>
                Студент группы М05-116б. Ссылка на гитхаб
            </Typography.Text>
            <Typography.Link href="https://github.com/Yuliana-coder" target="_blank">
                Github
            </Typography.Link>
        </Space>
        {profileData ?
        <div>
            {profileData.login ?<div>
                <Typography.Text strong={true}>Логин github</Typography.Text> {profileData.login}
            </div>
            : null}
            {profileData.bio ?
            <div>
                <Typography.Text strong={true}>BIO github</Typography.Text> {profileData.bio}
            </div>
            : null}
        </div>
        : null}
    </div>;
}

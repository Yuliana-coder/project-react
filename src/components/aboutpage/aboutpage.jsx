import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Typography } from "antd";

const useGithubData = (userName) => {
    const [userData, setUserData] = useState([]);
    const token = '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';

    useEffect(() => {
        if (!userName) return;
        const fetchData = async () => {
            const response = await axios(
                'https://api.github.com/users/' + userName,
                    {
                        headers: {
                        "Authorization": "token "+ token
                    }
                }
            );
            console.log(response.data);
            setUserData(response.data);
        };

        fetchData();
    }, [userName]);

    return userData;
}

export function Aboutpage() {
    const profileData = useGithubData('yuliana-coder');

    return <div >
    <Typography.Title>
        О нас
    </Typography.Title>
        <Typography.Text>
            Студент группы М05-116б. Ссылка на гитхаб 
        </Typography.Text>
        <Typography.Link href="https://github.com/Yuliana-coder" target="_blank">
            Github
        </Typography.Link>
        <div>
            <Typography.Text strong>Логин github</Typography.Text> {profileData.login}
        </div>
        <div>
            <Typography.Text strong>BIO github</Typography.Text> {profileData.bio}
        </div>
    </div>;
}

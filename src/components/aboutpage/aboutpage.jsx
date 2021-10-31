import React from "react";
import { Typography } from "antd";

export class Aboutpage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Typography.Title>
                    О нас
                </Typography.Title>
               Студент группы М05-116б. Ссылка на гитхаб <a href="https://github.com/Yuliana-coder" target="_blank">Github</a>
            </div>
        );
    }
}

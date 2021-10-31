import React from "react";
import { Typography } from "antd";

export class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Typography.Title>
                    Главная
                </Typography.Title>
                <Typography.Paragraph>
                    Проект на React. 1 домашнее задание.
                </Typography.Paragraph>
            </div>
        );
    }
}


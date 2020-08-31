import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Router from "./router.js";
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

import "./index.less"

moment.locale("zh-cn");

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Router></Router>
    </ConfigProvider>
    , document.getElementById("app"));

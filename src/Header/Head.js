import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import companyLogo from '../img/company-logo-dh.png';

const menu = (
    <Menu>
        <Menu.Item key="1"><Link to="buyer/myBill">我的提单</Link></Menu.Item>
        <Menu.Item key="2"><Link to="buyer/apply">申请退货</Link></Menu.Item>
        <Menu.Item key="3"><Link to="buyer/return">进入物流</Link></Menu.Item>
    </Menu>
);



class Head extends Component {
    render() {
        return (
            <header id="header">
                <div className="header">
                    <div className="banxin layui-row">
                        <div className="left-logo layui-col-xs2">
                            <Link to="/ecommerce"><img src={companyLogo} alt="东海电商" title="东海电商" /></Link>
                        </div>
                        <div className="al-login layui-col-xs4">
                            <span>您好，某某某</span><a href="javascript:void(0)" className="red">[退出]</a>
                        </div>
                        <div className="right-nav layui-col-xs6 fr">
                            <ul className="layui-nav layui-bg-custom nav_dir">
                                <li className="layui-nav-item login-re">
                                    <Link to="/ecommerce">首页</Link>
                                </li>
                                <li className="layui-nav-item login-re">
                                    <Link to="buyer/all">APP下载</Link>
                                </li>
                                <li className="layui-nav-item login-re">
                                    <Link to="buyer/all">我的中心</Link>
                                </li>
                                <li className="layui-nav-item right-line home">
                                    <Link to="/ecommerce/"><i className="img-jlt homepage"></i>销售首页</Link>
                                </li>
                                <li className="layui-nav-item right-line buy">
                                    <Link to="buyer/all"><i className="img-jlt my-ct"></i>我的中心</Link></li>
                                <li className="layui-nav-item right-line buy bus">
                                    <Dropdown overlay={menu}>
                                        <span style={{ userSelect: 'none' }}><i className="img-jlt business"></i>业务跟踪</span>
                                    </Dropdown>
                                </li>
                                <li className="layui-nav-item car">
                                    <Link to="/ecommerce/cart"> <i className="img-jlt shopcar-ye shop-num"
                                        data-shopnum=""></i>我的购物车</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Head;
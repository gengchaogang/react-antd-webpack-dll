import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import styles from './style.less'
import {
	MenuUnfoldOutlined,
	DoubleRightOutlined,
	DoubleLeftOutlined,
	UserOutlined,
	VideoCameraOutlined
} from '@ant-design/icons';
const { Sider, Content } = Layout;

function _Layout(props) {
	const [collapse, setCollapse] = useState(false);
	function toggleCollapse() {
		return setCollapse(!collapse)
	}

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<Layout className={styles.section}>
				<Sider trigger={null} collapsible collapsed={collapse} className={styles.aside}>
					<Menu theme="light" mode="inline" defaultSelectedKeys={['1']} className={styles.menuCon}>
						<Menu.Item key="1" icon={<UserOutlined />}>
							<Link to="/">Main</Link>
						</Menu.Item>
						<Menu.SubMenu key="2" title="submenu" icon={<MenuUnfoldOutlined />}>
							<Menu.Item key="2-1" icon={<VideoCameraOutlined />}>
								<Link to="/HelloWorld">HelloWorld</Link>
							</Menu.Item>
						</Menu.SubMenu>
					</Menu>
					<div className={styles.collapseBtn} onClick={toggleCollapse}>
						{React.createElement(collapse ? DoubleRightOutlined : DoubleLeftOutlined, {
							className: styles.collapseIcon
						})}
					</div>
				</Sider>
				<Layout className="site-layout">
					<Content
						className="site-layout-background"
						style={{ padding: 20 }}
					>
						{
							props.children
						}
					</Content>
				</Layout>
			</Layout>
		</div>
	);
}

export default withRouter(_Layout)
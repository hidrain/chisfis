import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { logOut } from '../../../../store/auth/action';
import { Dropdown, Menu } from 'antd';
class AccountQuickLinks extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout = e => {
        e.preventDefault();
        this.props.dispatch(logOut());
    };

    render() {
        const accountLinks = [
            {
                text: 'Информация об аккаунте',
                url: '/account/user-information',
                icon: 'icon-user',
            },
            {
                text: 'Уведомления',
                url: '/account/notifications',
                icon: 'icon-alarm-ringing',
            },
            {
                text: 'Счета',
                url: '/account/invoices',
                icon: 'icon-papers',
            },
            {
                text: 'Адрес',
                url: '/account/addresses',
                icon: 'icon-map-marker',
                active: true,
            },
            {
                text: 'Недавно просмотренный товар',
                url: '/account/recent-viewed-product',
                icon: 'icon-store',
            },
            {
                text: 'Список желаемого',
                url: '/account/wishlist',
                icon: 'icon-heart',
            },
        ];
        const menu = (
            <Menu>
                {accountLinks.map(link => (
                    <Menu.Item key={link.url}>
                        <Link href={link.url}>
                            <a>{link.text}</a>
                        </Link>
                    </Menu.Item>
                ))}

                <Menu.Item>
                    <a href="#" onClick={this.handleLogout.bind(this)}>
                        Выйти
                    </a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Dropdown overlay={menu} placement="bottomLeft">
                <a href="#" className="header__extra ps-user--mobile">
                    <i className="icon-user"></i>
                </a>
            </Dropdown>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(AccountQuickLinks);

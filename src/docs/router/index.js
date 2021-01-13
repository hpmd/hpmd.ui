import VueRouter from 'vue-router';
import Alert from '../Alert';
import Avatar from '../Avatar';
import Badge from '../Badge';
import Button from '../Button';
import Calendar from '../Calendar';
import Checkbox from '../Checkbox';
import Collapse from '../Collapse';
import SpinButton from '../SpinButton';

const routes = [
    {
        path: '/',
        meta: {
            name: 'О библиотеке'
        },
        component: {
            render() {
                return (
                    <div>
                        <p>
                            <strong>HPMD.ui</strong> - Набор интерфейсов на основе Bootstrap 4 (и нескольких более мелких библиотек), сделанный для быстрого создания дэшбордов и подобных интерфейсов. Библиотека включает:
                        </p>

                        <ul>
                            <li>
                                Набор CSS - в виде подключаемого SCSS файла с возможностью кастомизации до сборки
                            </li>
                            <li>
                                Vue-компоненты (Vue 2): набор отдельных компонентов для использования в Vue-приложениях.
                            </li>
                        </ul>
                    </div>
                );
            }
        }
    },
    {
        path: '/components',
        redirect: '/components/alert',
        meta: {
            name: 'Компоненты',
            text: true
        }
    },
    {
        path: '/components/alert',
        component: Alert,
        meta: {
            name: 'Alert'
        }
    },
    {
        path: '/components/avatar',
        component: Avatar,
        meta: {
            name: 'Avatar'
        }
    },
    {
        path: '/components/badge',
        component: Badge,
        meta: {
            name: 'Badge'
        }
    },
    {
        path: '/components/button',
        component: Button,
        meta: {
            name: 'Button'
        }
    },
    {
        path: '/components/calendar',
        component: Calendar,
        meta: {
            name: 'Calendar'
        }
    },
    {
        path: '/components/checkbox',
        component: Checkbox,
        meta: {
            name: 'Checkbox'
        }
    },
    {
        path: '/components/collapse',
        component: Collapse,
        meta: {
            name: 'Collapse'
        }
    },
    {
        path: '/components/spin-button',
        component: SpinButton,
        meta: {
            name: 'Spin Button'
        }
    }
];

export default new VueRouter({
    routes
});

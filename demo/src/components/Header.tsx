import { DonutConsumer } from 'react-donut-cursor';

const Header = (): JSX.Element => {
    return (
        <DonutConsumer>
            <div
                className={
                    'float-left flex w-full h-16 border-b border-gray-300'
                }
            >
                <div className={'float-left container mx-auto px-4'}>
                    <nav className={'float-left w-full'}>
                        <ul className={'float-left w-full flex flex-row'}>
                            <li
                                style={{ lineHeight: 4 }}
                                className={'flex-1 text-left '}
                            >
                                <span className={'flex flex-row'}>
                                    <span
                                        className={
                                            'donut-hover font-bold transform duration-200 hover:translate-x-3'
                                        }
                                    >
                                        ⚛️🍩👆 react-donut-cursor
                                    </span>
                                </span>
                            </li>
                            <li className={'text-right'}>
                                <a
                                    href="https://github.com/ericnam/react-donut-cursor"
                                    target="_blank"
                                >
                                    <button
                                        className={
                                            'donut-hover readme bg-gray-200 px-6 py-3 my-2.5 text-sm rounded-md font-bold hover:bg-gray-300 transform duration-200'
                                        }
                                    >
                                        📃.md
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </DonutConsumer>
    );
};

export default Header;

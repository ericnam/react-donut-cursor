import { isBrowser } from 'react-device-detect';
import { DonutConsumer } from 'react-donut-cursor';

const Welcome = (): JSX.Element => {
    let view = isBrowser ? (
        <WelcomeBrowser />
    ) : (
        <div
            className={'py-28 px-4 mx-0'}
            style={{ backgroundColor: '#FFEFF1' }}
        >
            <WelcomeMessage />
        </div>
    );

    return (
        <div className={'float-left flex w-full'}>
            <div className={'float-left container mx-auto'}>{view}</div>
        </div>
    );
};

const WelcomeBrowser = (): JSX.Element => {
    return (
        <DonutConsumer>
            <div
                className={
                    'flex justify-center items-center w-1 h-full mx-auto text-left'
                }
                style={{ height: '650px' }}
            >
                <h1
                    className={
                        'flex flex-col flex-1 font-bold font-serif donut-hover welcome text-3xl'
                    }
                >
                    <span style={{ color: '#F18122' }} className={'flex-1'}>
                        HOVER
                    </span>{' '}
                    <span
                        style={{ color: '#E40F84', marginTop: '-8.5px' }}
                        className={'flex-1'}
                    >
                        HERE
                    </span>
                </h1>
            </div>
        </DonutConsumer>
    );
};

const WelcomeMessage = ({ style }: any): JSX.Element => {
    return (
        <div
            style={{ ...style, color: '#842B34' }}
            className={'font-serif text-center text-4xl'}
        >
            <h1>
                Welcome to
                <br />
                <span style={{ color: '#886CE4' }}>React Donut Cursor!</span>
            </h1>
            <br />
            <p className={'font-sans text-lg font-bold'}>
                Create your own custom, animated cursor that gives your users
                additional feedback and your browser web apps a stylish flare.
            </p>
            {!isBrowser ? (
                <p className={'font-sans text-lg mt-12'}>
                    (Best experienced in the browser)
                </p>
            ) : null}
        </div>
    );
};

export { WelcomeMessage };
export default Welcome;

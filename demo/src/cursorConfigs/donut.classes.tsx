import { DonutCustomClass } from 'react-donut-cursor';
import { WelcomeMessage } from '@components/welcome';
import HandsomeSquidward from '@assets/handsome_squidward.png';



const DonutCustomClasses: DonutCustomClass = {
    readme: {
        center: {
            width: '85px',
            height: '85px',
            transition: '300ms',
            backgroundColor: '#886CE4',
            jsx: (
                <div
                    style={{
                        width: '85px',
                        height: '18px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: '12px',
                    }}
                >
                    readme!
                    <span
                        style={{
                            position: 'absolute',
                            fontSize: '22px',
                            right: 14,
                            top: 9,
                        }}
                    >
                        👆
                    </span>
                </div>
            ),
        },
        ring: {
            display: 'none',
        }
    },
    welcome: {
        center: {
            width: '800px',
            height: '800px',
            transition: '600ms',
            backgroundColor: '#FFEFF1',
            jsx: (
                <WelcomeMessage
                    style={{
                        height: '150px',
                        width: '520px',
                        color: '#FFECEE',
                    }}
                />
            ),
        },
        ring: {
            display: 'none',
        },
        click: {},
    },
    about_feedback: {
        center: {
            width: '90px',
            height: '90px',
            transition: '300ms',
            backgroundColor: '#886CE4',
            jsx: (
                <div
                    style={{
                        width: '85px',
                        height: '18px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: '12px',
                    }}
                >
                    you're great 😀
                </div>
            ),
        },
        ring: {
            display: 'none',
        },
        click: {},
    },
    about_customize: {
        center: {
            width: '90px',
            height: '90px',
            transition: '300ms',
            backgroundColor: '#333',
            jsx: (
                <div
                    style={{
                        width: '90px',
                        height: '90px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: '12px',
                        paddingTop: '38px',
                    }}
                    className="rainbow-bg"
                >
                    whoa, funky
                </div>
            ),
        },
        ring: {
            width: '120px',
            height: '120px',
            borderWidth: '20px',
            borderColor: '#333',
            borderStyle: 'solid',
            lag: '0ms',
        },
        click: {},
    },
    about_stylish: {
        center: {
            width: '90px',
            height: '90px',
            transition: '300ms',
            backgroundColor: '#333',
            jsx: (
                <div
                    style={{
                        width: '90px',
                        height: '90px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        style={{
                            minWidth: '100%',
                            minHeight: '100%',
                        }}
                        src={HandsomeSquidward}
                    />
                </div>
            ),
        },
        ring: {
            display: 'none',
        },
        click: {},
    },
};
export default DonutCustomClasses;

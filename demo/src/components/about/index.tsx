import { DonutConsumer } from 'react-donut-cursor';

const About = (): JSX.Element => {
    return (
        <div className={'float-left flex w-full'}>
            <div
                style={{ maxWidth: '1150px' }}
                className={
                    'float-left flex flex-wrap mx-auto border rounded justify-self-center center-items'
                }
            >
                <AboutTile
                    isLogo={false}
                    donutClass={'about_feedback'}
                    title={'User Feedback'}
                    description={
                        'Provide additional feedback and cues via cursor for improved user experience'
                    }
                    icon={'🙋'}
                />
                <AboutTile
                    isLogo={false}
                    donutClass={'about_customize'}
                    title={'Customizable'}
                    description={
                        'Configure the look and feel across all states of the cursor to your own design language'
                    }
                    icon={'⚙️'}
                />
                <AboutTile
                    isLogo={false}
                    donutClass={'about_stylish'}
                    title={'Stylish'}
                    description={'All components are fluid and animated with a configurable style and rate of transition'}
                    icon={'💇‍♂️'}
                />
            </div>
        </div>
    );
};

type AboutTileProps = {
    isLogo: boolean;
    title?: string;
    description?: string;
    icon?: any;
    donutClass?: string;
};

const AboutTile = ({
    isLogo,
    title,
    description,
    icon,
    donutClass,
}: AboutTileProps): JSX.Element => {
    if (isLogo) {
        return <div className={'w-80 mx-10 my-10'}></div>;
    }

    return (
        <DonutConsumer>
            <div className={'flex-1 mx-10 my-10 donut-hover ' + donutClass}>
                <span className={'flex flex-row mb-12'}>
                    <h1 className={'text-xl'}>{icon}</h1>
                    <h1
                        style={{ color: '#333' }}
                        className={'mx-2 leading-7 font-sans font-bold'}
                    >
                        {title}
                    </h1>
                </span>

                <p>{description}</p>
            </div>
        </DonutConsumer>
    );
};
export default About;

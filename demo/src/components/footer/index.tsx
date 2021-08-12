import { DonutConsumer } from 'react-donut-cursor';

import GithubImg from '@assets/githublogo.png';
import NpmImg from '@assets/npmlogo.png';

const Footer = (): JSX.Element => {
    return (
        <DonutConsumer>
            <div className={'float-left flex w-full my-36'}>
                <div
                    className={'float-left container mx-auto'}
                    style={{ maxWidth: '600px' }}
                >
                    <span className="flex flex-wrap">
                        <span className="flex-1 justify-center center-content">
                            <a
                                href="https://github.com/ericnam/react-donut-cursor"
                                target="_blank"
                            >
                                <img
                                    src={GithubImg}
                                    className="w-32 mx-auto donut-hover"
                                />
                            </a>
                        </span>
                        <span className="flex-1 justify-center center-content">
                            <a
                                href="https://www.npmjs.com/package/react-donut-cursor"
                                target="_blank"
                            >
                                <img
                                    src={NpmImg}
                                    className="w-32 mt-8 mx-auto donut-hover"
                                />
                            </a>
                        </span>
                    </span>
                </div>
            </div>
        </DonutConsumer>
    );
};
export default Footer;

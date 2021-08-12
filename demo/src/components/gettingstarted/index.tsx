import 'regenerator-runtime/runtime';
import ReactEmbedGist from 'react-embed-gist';
import { DonutConsumer } from 'react-donut-cursor';

const GettingStarted = (): JSX.Element => {
    return (
        <DonutConsumer>
            <div className={'float-left flex w-full mt-16 px-5'}>
                <div
                    className={'float-left container mx-auto'}
                    style={{ maxWidth: '900px' }}
                >
                    <h1
                        style={{ color: '#333' }}
                        className={'font-sans text-xl font-bold mb-5'}
                    >
                        Installation
                    </h1>
                    <ReactEmbedGist
                        gist={'ericnam/b20493e0d026b1093acf124b5fb22704'}
                    />
                    <h1
                        style={{ color: '#333' }}
                        className={'font-sans text-xl font-bold mb-5 mt-12'}
                    >
                        Usage
                    </h1>
                    <p className="text-sm mb-8">
                        In order to get the Donut Cursor to work, you'll need to
                        setup the DonutCursorProvider, DonutConsumer, and class
                        name "donut-hover" on the DOM objects you want the hover
                        events to take place on.
                    </p>

                    <ReactEmbedGist
                        gist={'ericnam/ebf8f5e8515ec75747805e8f66bfc792'}
                    />
                    <a href="https://github.com/ericnam/react-donut-cursor" target="_blank" style={{color:"blue"}} className="underline donut-hover readme">
                        view full documentation
                    </a>
                </div>
            </div>
        </DonutConsumer>
    );
};

export default GettingStarted;


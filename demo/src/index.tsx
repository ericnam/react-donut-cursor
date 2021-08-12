import { render } from 'react-dom';
import { DonutCursorProvider } from 'react-donut-cursor';

import './style/tailwind.css';
import './style/index.less';

import Header from '@components/Header';
import Welcome from '@components/welcome';
import About from '@components/about';
import Footer from '@components/footer';
import GettingStarted from '@components/gettingstarted';
import { DonutClasses, DonutBase, DonutHover } from '@donut';

const ReactDonutCursorApp = (): JSX.Element => {
    return (
        <DonutCursorProvider
            classArr={DonutClasses}
            base={DonutBase}
            hover={DonutHover}
        >
            <AppContent />
        </DonutCursorProvider>
    );
};

const AppContent = (): JSX.Element => {
    return (
        <div>
            <Header />
            <Welcome />
            <About />
            <GettingStarted />
            <Footer />
        </div>
    );
};

render(<ReactDonutCursorApp />, document.getElementById('root'));

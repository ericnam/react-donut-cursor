const UseCases = (): JSX.Element => {
    return (
        <div className={'float-left flex w-full mt-16'}>
            <div
                className={'float-left container mx-auto'}
                style={{ maxWidth: '1300px' }}
            >
                <h1
                    style={{ color: '#333' }}
                    className={'font-sans text-2xl font-bold'}
                >
                    Use Cases
                </h1>
                <div className="flex flex-wrap">
                    <ExampleTile header={'Icon Navbar'} content={NavBarExample} />
                    <ExampleTile header={'Icon Nav'} content={NavBarExample} />
                    <ExampleTile header={'Icon Nav'} content={NavBarExample} />
                </div>
            </div>
        </div>
    );
};

const ExampleTile = ({ header, content }: any): JSX.Element => {
    return (
        <div className="flex-1 m-5 p-5 border rounded">
            <span className="flex flex-row w-full">
                <p className="flex-1 font-bold mt-2">{header}</p>
                <button className="float-right bg-gray-200 py-2 px-5 rounded font-bold">
                    📄.js
                </button>
            </span>
            <span>{content}</span>
        </div>
    );
};

const NavBarExample = (): JSX.Element => {
    return <div></div>;
};

export default UseCases;

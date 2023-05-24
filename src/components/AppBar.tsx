import Logo from "./Logo";

const AppHead: React.FC = () => {
    return (
        <div className="header">
            <div className="logo">
                <Logo />
            </div>
        </div>
    );
};

export default AppHead;

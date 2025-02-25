import NavOption from "./NavOption.jsx";

interface NavBarProps {
    background?: string;
    absolute?: boolean;
}

export default function NavBar({ background, absolute }: NavBarProps) {
    return (
        <nav
            className={`flex items-center py-4 px-[15%] w-full text-white ${
                absolute ? "absolute" : ""
            } bg-[#0075C0]`}
        >
            <div className="font-public-sans font-bold">
                Platform Governance Research Lab
            </div>
            <div className="flex items-center ml-auto">
                <div className="flex items-center space-x-4">
                    <NavOption link="#" text="Topics"/>
                    <NavOption link="#" text="Plans & Pricing"/>
                    <NavOption link="#" text="FAQ"/>
                    <NavOption link="#" text="About Us"/>
                </div>
            </div>
        </nav>
    );
}
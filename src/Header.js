import Navi from "./Navi";

function Header() {
    return(
        <header>
            <a href="index.html">
                <img id="logo" src="img/logo.png"/>
            </a>
            <Navi></Navi>
        </header>
    );
}

export default Header;
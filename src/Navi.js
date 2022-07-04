import { Fragment } from "react";

function Navi() {
    return(
        <Fragment>
            <nav id="top_menu">
            HOME | LOGIN | JOIN | NOTICE
            </nav>
            <nav id="main_menu">
            <ul>
                <li><a href="board_list.html">자유 게시판</a></li>
                <li><a href="#">기타 연주</a></li>
                <li><a href="#">공동 구매</a></li>
                <li><a href="#">연주회 안내</a></li>
                <li><a href="#">회원 게시판</a></li>
            </ul>
            </nav>
        </Fragment>
    );
}

export default Navi;
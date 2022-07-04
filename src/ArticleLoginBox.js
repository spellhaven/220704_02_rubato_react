function ArticleLoginBox() {

    return (
        <article id="login_box">

            <img id="login_title" src="img/ttl_login.png"/>

            <div id="input_button">
                <ul id="login_input">
                    <li><input type="text"/></li>
                    <li><input type="password"/></li>
                </ul>
                <img id="login_btn" src="img/btn_login.gif"/>
            </div> 

            <div class="clear"></div>

            <div id="join_search">
                <img src="img/btn_join.gif" href=""/>
                <img src="img/btn_search.gif"/>
            </div>

        </article>
    );
}

export default ArticleLoginBox;
import ArticleLoginBox from "./ArticleLoginBox";
import ArticleGuestBook from "./ArticleGuestBook";

function Aside() {
    return(
        <aside>
            <ArticleLoginBox></ArticleLoginBox>
            <ArticleGuestBook></ArticleGuestBook>
        </aside>
    );
}

export default Aside;
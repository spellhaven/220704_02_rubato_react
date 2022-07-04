import ArticleFreeBoard from "./ArticleFreeBoard";
import ArticleNotice from "./ArticleNotice";
import ArticleYoutube from "./ArticleYoutube";

function SectionNoticeFreeYoutube() {
    return (
        <section id="notice_free_youtube"> {/*구조가 뭐 이래;; (어. 진짜 이랬어.)*/}
            <ArticleNotice></ArticleNotice>
            <ArticleFreeBoard></ArticleFreeBoard>
            <ArticleYoutube></ArticleYoutube>
        </section>
    );
}

export default SectionNoticeFreeYoutube;

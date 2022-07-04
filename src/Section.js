import SectionNoticeFreeYoutube from "./SectionNoticeFreeYoutube";
import SectionGallery from "./SectionGallery";

function Section() {
    return (
        <section id = "main">
            <img src="img/main_img.png"/>
            <SectionNoticeFreeYoutube></SectionNoticeFreeYoutube> {/* 루바토 홈페이지의 index.html을 잘 살펴봐라. 진짜 이런 자료 구조다. */}
            <SectionGallery></SectionGallery>
        </section>
    );
}

export default Section;
export default function ScrollButton() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className="scroll-to-top" onClick={scrollToTop}>
            Volver al<br/>
            Menú
        </button>
    )
}
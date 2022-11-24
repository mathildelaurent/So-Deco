import banner from "../assets/Banniere.png";
import deco from "../assets/Home/deco.png";

export default function Home() {
    return (
        <>
            <section id="banner">
                <img src={banner} />
            </section>
            <section id="atmosphere">
                <h2 className="title">La création d'ambiance</h2>
                <p id="content">
                    A votre image, vos espaces de vie doivent refléter ce que
                    vous êtes.
                    <br />
                    Qu'il s'agisse d'un bureau, d'une Entreprise ou tout
                    simplement chez-soi, il est primordiale de se sentir bien et
                    d'y rester avec plaisir.
                    <br />
                    <br />
                    Je vous propose donc de vous accompagner lors de cette
                    démarche. Confiez moi vos souhaits et je les exhausserai
                </p>
                <img src={deco} />
            </section>
        </>
    );
}

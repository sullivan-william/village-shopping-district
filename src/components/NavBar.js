export default function NavBar( { title } ) {

    return(
        <nav>
            <h1>{title}</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/blacksmith">Blacksmith</a>
                </li>
                <li>
                    <a href="/market">Market</a>
                </li>
                <li>
                    <a href="/potions">Potions</a>
                </li>
            </ul>
        </nav>
    )
}
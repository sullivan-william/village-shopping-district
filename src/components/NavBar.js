import Icon from '@mdi/react';
import { mdiPiggyBank, mdiCart } from '@mdi/js';

export default function NavBar() {
    return (
        <div>
            <div className="header">
                <h1>Village Shopping District</h1>
                <div>
                    <div className="coin">
                        <Icon path={mdiPiggyBank} size={1} />
                        <h3>500</h3>
                    </div>
                    <Icon path={mdiCart} size={1} />
                </div>
            </div>
            <nav>
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
        </div>
    )
}
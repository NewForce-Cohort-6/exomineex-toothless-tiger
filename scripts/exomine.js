//import {} from "database.js"
import {fact} from "./facilities.js"
import {Deliverys} from "./transports.js"
import {civilizations} from "./Colonies.js"
import {Minerals} from "./minerals.js"






export const Exomine = () => {
    return `
        <header class="header">
            <h1 class="title">Exomine</h1>
        </header>
        <article class="Dropdowns">
        <section class="select-a-colony">
        <br>
        <p>Select a Colony</p>
        ${civilizations()}
        </section>
        <section class="select-a-mineral">
        <p>Select a Mineral</p>
        ${Minerals()}
        </section>
        <section class="select-a-facility">
        <p>Select a Facility</p>
        ${fact()}
        </section>
        <section class="select-a-transport">
        <p>Select a Transport</p>
        ${Deliverys()}
        </section>

        <article class="Space-Cart">
        <h2>Space Cart</h2>
        </article>

        <article>
            <button id="Check-Avaliability" class="btn btn-primary>Check Avaliability</button>
            
        </article>

        <article class="transientState">
            <h2>Monthly Sales</h2>
            </article>

    `
}
//import {} from "database.js"
import {fact} from "./facilities.js"





export const Exomine = () => {
    return `
        <header class="header">
            <h1 class="title">Exomine</h1>
        </header>
        <article class="Dropdowns">
        <section class="select-a-colony">
        <h2>Colonies</h2>
        <br>
        <p>Select a colony:</p>
        </section>
        <section class="select-a-mineral">
        <p>Select a mineral</p>
        </section>
        <section class="select-a-facility">
        <p>Select a facility</p>
        ${fact()}
        </section>
        <section class="select-a-transport">
        <p>Select a transport</p>
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
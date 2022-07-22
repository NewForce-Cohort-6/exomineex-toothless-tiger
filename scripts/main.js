document.addEventListener(
    "click",
    (event) => {
        if(event.target.id === "orderButton"){
            addCustomOrder()
        }
    }
)


export const exomine = () => {
    return `
        <h1>Exomine</h1>

        <article class="choices">
            <section class="choices__colonies options">
                <h2>Colonies</h2>
                ${}
            </section>
            <section class="choices__transports options">
                <h2>Transports</h2>
                ${}
            </section>
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paints()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiors()}
            </section>
            </article>
   <br>
            <article>
            <button id="orderButton">Create Custom Order</button>
           
        </article>  

        <article class="customOrders">
        <h2>Custom Car Orders</h2>
        ${orders()}
    </article>
   
            `
}
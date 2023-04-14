import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"


export default function App(){

    const card = data.map(item => {
        return ( <Card
            key={item.id}
            {...item}
        />
    )
})
    
    return(
        <div>
            <Header />
            <Hero />
            <section className="card-list">
            {card}
            </section>


        </div>
    )
}

import "../App.css"
import Header from "../components/Header.jsx"
import shipphoto from "../images/ship.jpg"

const Travel = () => {

    return (
        <>
            <Header />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <img src={shipphoto} class="picture"></img>
                    </div>
                    <div class="col">
                        <p>Taniti offers a variety of transportation options for visitors to explore the island. Most tourists arrive by air at the small airport, which currently accommodates small jets and propeller planes, with plans for expansion to handle larger aircraft in the future. A small cruise ship also docks in Yellow Leaf Bay once a week. For getting around the island, public buses serve Taniti City from 5 a.m. to 11 p.m. daily, while private buses cover the rest of the island. Taxis are available in Taniti City, and a local agency near the airport offers rental cars. For those preferring eco-friendly options, bikes and helmets can be rented from several vendors, with helmet use mandated by law. Taniti City itself is notably flat and walkable, making it easy to explore on foot, especially the popular area around Merriton Landing. This diverse range of transportation options ensures that visitors can comfortably navigate the island and enjoy its many attractions.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                </div>
                <div class="row">
                    <div class="col-11">
                        <h2>Travel Options</h2>
                        <p></p>
                        <p>Taniti Air (local airline)</p>
                        <p>Island Hopper Cruises (small cruise ship service)</p>
                        <p>City Circle Bus (public bus service in Taniti City)</p>
                        <p>Island Explorer Bus Tours (private bus service for the rest of the island)</p>
                        <p>Yellow Leaf Taxi Co.</p>
                        <p>Volcano View Car Rentals</p>
                        <p>Green Pedal Bike Rentals</p>
                        <p>Rainforest Rides (bike rental in forested areas)</p>
                        <p>Merriton Landing Scooters</p>
                        <p>Taniti Walking Tours</p>
                        <p>Bay Breeze Water Taxis (for coastal travel)</p>
                        <p>Mountain Goat Jeep Rentals (for exploring mountainous areas)</p>
                        <p>Eco-Wheels Electric Car Rentals</p>
                        <p>Island Trek Hiking Tours</p>
                        <p>Taniti Sky Helicopters (for aerial tours)</p>

                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>

        </>
          

    )
}

export default Travel;
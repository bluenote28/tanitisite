import "../App.css"
import Header from "../components/Header.jsx"
import ancientbuildingphoto from "../images/ancient-building.jpg"

const PlacesToStay = () => {

    return (
        <>
            <Header />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <img src={ancientbuildingphoto} class="picture"></img>
                    </div>
                    <div class="col">
                        <p>Taniti offers a diverse range of lodging options to suit various preferences and budgets. At the economical end, visitors can find an inexpensive hostel for budget-conscious travelers. For those seeking more comfort, there are numerous small, family-owned hotels scattered across the island, providing a personal touch to the guest experience. A growing number of bed and breakfasts offer a cozy, home-like atmosphere for tourists. At the luxury end of the spectrum, Taniti boasts one large, four-star resort for those desiring high-end amenities and services. Importantly, all types of accommodation on the island are subject to strict regulations and regular inspections by the Tanitian government, ensuring a consistent standard of quality and safety for all visitors regardless of their chosen lodging option.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                </div>
                <div class="row">
                    <div class="col-11">
                        <h2>Places to Stay</h2>
                        <p>Taniti Paradise Resort & Spa (4-star) Location: Yellow Leaf Bay Amenities: Multiple pools, private beach, spa, 3 restaurants</p>
                        <p>Rainforest Retreat Bed & Breakfast Location: Near the rainforest edge Amenities: Home-cooked meals, guided nature walks</p>
                        <p>Volcano View Inn Location: Mountainous interior Amenities: Panoramic volcano views, hot springs access</p>
                        <p>Merriton Landing Hotel Location: Merriton Landing Amenities: Rooftop bar, proximity to entertainment district</p>
                        <p>Sandy Shores Hostel Location: Taniti City Amenities: Communal kitchen, bike rentals, beach access</p>
                        <p>Harbor Lights Boutique Hotel Location: Near the harbor Amenities: Sea-view rooms, seafood restaurant</p>
                        <p>Green Canopy Eco-Lodge Location: Within the rainforest Amenities: Treehouse rooms, sustainability tours</p>

                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>

        </>
          

    )
}

export default PlacesToStay;
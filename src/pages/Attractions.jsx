import "../App.css"
import Header from "../components/Header.jsx"
import beach2photo from "../images/beach2.jpg"

const Attractions = () => {

    return (
        <>
            <Header />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <img src={beach2photo} class="picture"></img>
                    </div>
                    <div class="col">
                        <p>Taniti offers a diverse array of attractions that cater to both nature enthusiasts and entertainment seekers. The island's natural highlights include pristine beaches along Yellow Leaf Bay, a lush tropical rainforest perfect for hiking and zip-lining adventures, and an active volcano that draws curious visitors. In the cultural hub of Taniti City, tourists can explore the local history museum and various art galleries showcasing island culture. For those seeking active entertainment, the island offers chartered fishing tours, snorkeling expeditions, helicopter rides, and a new nine-hole golf course set to open next year. The rapidly developing Merriton Landing area on the north side of Yellow Leaf Bay has become an entertainment center, featuring a microbrewery, several pubs, a modern dance club, a movie theater, an arcade, and a bowling alley. Additionally, visitors can take advantage of guided boat or bus tours around the island, providing comprehensive views of Taniti's diverse landscape and native architecture.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                </div>
                <div class="row">
                    <div class="col-11">
                        <h3>Parks</h3>
                        <p>Yellow Leaf Bay Beach Reserve</p>
                        <p>Mount Taniti Volcanic Park</p>
                        <p>Emerald Rain Forest Preserve</p>
                        <h3>Cultural and Historical Sites</h3>
                        <p>The Taniti Heritage Museum</p>
                        <p>Ancient Fishermen's Village</p>
                        <h3>Entertainment</h3>
                        <p>Island Hop Microbrewery</p>
                        <p>Coconut Club (dance club)</p>
                        <p>Paradise Lanes Bowling</p>
                        <p>Stardust Cinema</p>
                        <p>Tiki Time Arcade</p>
                        <p>Coral Bay Boat Tours</p>

                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>

        </>
          

    )
}

export default Attractions;
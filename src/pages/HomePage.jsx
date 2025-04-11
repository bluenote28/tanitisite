
import "../App.css"
import Header from "../components/Header.jsx"
import beachphoto from "../images/beach.jpg"
import smallcityphoto from "../images/smallcity.jpg"
import peoplephoto from "../images/people.jpg"
import volcanophoto from "../images/volcano.jpg"

const HomePage = () => {

    return (
        <>
            <Header />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <img src={beachphoto} class="picture"></img>
                    </div>
                    <div class="col">
                    <img src={smallcityphoto} class="picture"></img>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <p>Taniti, a small tropical island in the Pacific, offers a diverse and captivating experience for visitors. Despite its modest size of less than 500 square miles, the island boasts a rich variety of landscapes, including sandy and rocky beaches, a safe harbor, lush rainforests, and a mountainous interior featuring a small active volcano. With an indigenous population of about 20,000, Taniti's economy has traditionally been centered around fishing and agriculture, but has recently seen a significant boost from increased tourism.
Visitors to Taniti can enjoy a wide range of amenities and activities. The island offers various dining options, from local seafood to American-style and Pan-Asian cuisine. Accommodation choices span from budget-friendly hostels to a luxurious four-star resort, with numerous family-owned hotels and bed and breakfasts in between. While many tourists come to Taniti for its natural beauty, including its beaches, rainforest, and volcano, the island also offers diverse entertainment options such as museums, fishing tours, snorkeling, zip-lining, and a growing nightlife scene. Most of these attractions are concentrated in Taniti City and the developing area of Merriton Landing, making it easy for visitors to explore and enjoy all that this tropical paradise has to offer.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <img src={volcanophoto} class="picture"></img>
                    </div>
                    <div class="col">
                    <img src={peoplephoto} class="picture"></img>
                    </div>
                </div>
            </div>

        </>
          

    )
}

export default HomePage
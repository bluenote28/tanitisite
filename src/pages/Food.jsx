import "../App.css"
import Header from "../components/Header.jsx"
import fishphoto from "../images/fish.png"

const Food = () => {

    return (
        <>
            <Header />
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <img src={fishphoto} class="picture"></img>
                    </div>
                    <div class="col">
                        <p>Taniti offers a variety of dining options to cater to different tastes and preferences. The island currently boasts ten restaurants, providing a mix of local and international cuisines. Five of these establishments specialize in serving local dishes, primarily featuring fresh fish and rice, allowing visitors to experience authentic Tanitian flavors. For those seeking familiar fare, three restaurants offer American-style meals, providing a taste of home for U.S. visitors. Additionally, two restaurants serve Pan-Asian cuisine, adding an international flair to the island's culinary scene. Beyond restaurants, Taniti has two supermarkets for those who prefer to cook their own meals or stock up on supplies. There are also two smaller grocery stores for more specialized or local items, and a 24-hour convenience store for last-minute needs or late-night cravings. This diverse range of food options ensures that visitors can enjoy a variety of dining experiences during their stay on the island.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    </div>
                </div>
                <div class="row">
                    <div class="col-11">
                        <h3>Local Fish and Rice</h3>
                        <p>The Coral Reef Café. Phone: (555) 123-4567. Website: www.coralreefcafe-taniti.com</p>
                        <p>Volcano View Restaurant. Phone: (555) 234-5678. Website: www.volcanoviewdining.com</p>
                        <p>Island Breeze Eatery. Phone: (555) 345-6789. Website: www.islandbreezeeatery.com</p>
                        <p>Fisherman's Wharf. Phone: (555) 456-7890. Website: www.fishermanswharf-taniti.com</p>
                        <p>Taniti Tastes. Phone: (555) 567-8901. Website: www.tanititastes.com</p>
                        <h3>American Style</h3>
                        <p>Uncle Sam's Diner. Phone: (555) 678-9012. Website: www.unclesams-taniti.com</p>
                        <p>Stars & Stripes Grill. Phone: (555) 789-0123. Website: www.starsandstripesgrill.com</p>
                        <p>Liberty Bell Burgers. Phone: (555) 890-1234. Website: www.libertybellburgers-taniti.com</p>
                        <h3>Pan-Asian</h3>
                        <p>Golden Dragon. Phone: (555) 901-2345. Website: www.goldendragon-taniti.com</p>
                        <p>Silk Road Fusion. Phone: (555) 012-3456. Website: www.silkroadfusion.com</p>
                        <h3>Grocery and Convenience Stores</h3>
                        <p>Island Bounty Supermarket. Phone: (555) 111-2222. Website: www.islandbounty-taniti.com</p>
                        <p>Taniti Fresh Supermarket. Phone: (555) 333-4444. Website: www.tanitifresh.com</p>
                        <p>Green Leaf Grocery. Phone: (555) 555-6666. Website: www.greenleafgrocery-taniti.com</p>
                        <p>Harbor Market. Phone: (555) 777-8888. Website: www.harbormarket-taniti.com</p>
                        <p>24/7 Convenience Corner. Phone: (555) 999-0000. Website: www.247corner-taniti.com</p>

                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>

        </>
          

    )
}

export default Food;
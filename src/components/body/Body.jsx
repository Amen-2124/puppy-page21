import './Body.css'
import bannerPuppies from '../../assets/images/banner-puppies.jpg'
import Puppy1 from '../../assets/images/puppy-1.jpg'
import Puppy2 from '../../assets/images/puppy-2.jpg'
import Puppy3 from '../../assets/images/puppy-3.jpg'
import Puppy4 from '../../assets/images/puppy-4.jpg'

function Body() {
  return (
    <div>
      <section className="heroSection">
        <div>
          <img src={bannerPuppies} alt="Three puppies in a basket" />
        </div>
      </section>

      <main className="mainContent">
        <section className="featuredGallerySection">
          <div className="puppy-1">
            <img src={Puppy1} alt="White fluffy puppy" />
          </div>

          <div className="placeholderCard">
            Puppy <br/> missing <br/> here!!
          </div>

          <div className="puppy-2">
            <img src={Puppy2} alt="Black and white puppy side view" />
          </div>
        </section>

        <section className="morePuppiesSection">
          <div>
            <h1>More Puppies</h1>
          </div>

          <div className="puppyGallery">
            <div className="puppy-3">
              <img src={Puppy3} alt="Brown puppy being held" />
            </div>

            <div className="puppy-4">
              <img src={Puppy4} alt="Curly haired puppy lying down" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Body
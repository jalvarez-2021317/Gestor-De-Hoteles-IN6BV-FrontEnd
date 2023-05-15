import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Carrosel.css'

//Juan 

export const Carrosel = () => {
    return (
        <div className="container2">
        <div className="mx-auto my-4">
          <Carousel interval={7000}>
            <Carousel.Item>
            <img src="https://cdn.pixabay.com/photo/2014/07/10/17/17/hotel-389256_1280.jpg" class="d-block w-100" alt="7" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="https://cdn.pixabay.com/photo/2016/12/11/18/10/apartment-1899964_1280.jpg" class="d-block w-100" alt="6" />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src="https://cdn.pixabay.com/photo/2015/09/15/11/04/hotel-940730_1280.jpg" class="d-block w-100" alt="5" />

            </Carousel.Item>
            <Carousel.Item>
            <img src="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg" class="d-block w-100" alt="4" />

            </Carousel.Item>
            <Carousel.Item>
            <img src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg" class="d-block w-100" alt="1" />

            </Carousel.Item>
            <Carousel.Item>
            <img src="https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg" class="d-block w-100" alt="3" />

            </Carousel.Item>
            <Carousel.Item>
            <img src="https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071_1280.jpg" class="d-block w-100" alt="3" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
}

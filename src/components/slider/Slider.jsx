import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'

import { SliderProducts } from '../../data/products'

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Slider.css'

const Slider = () => {
    return (
        <div className="s-container">
            <Swiper breakpoints={{ 640: { slidesPerView: 3 }, 0: { slidesPerView: 2 } }} className='mySwiper' loopFillGroupWithBlank={true} modules={[Pagination, Navigation]} slidesPerView={3} spaceBetween={40} navigation={true} slidesPerGroup={1} loop={true}>
                {SliderProducts.map((product, i) => (
                    <SwiperSlide key={i}>
                        <div className='left-s'>
                            <div className="name">
                                <span>{product.name}</span>
                                <span>{product.detail}</span>
                            </div>
                            <span>${product.price}</span>
                            <div>Shop now</div>
                        </div>
                        <img src={product.img} alt={product.img} className='img-p' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
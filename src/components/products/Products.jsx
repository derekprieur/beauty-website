import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {
    const [parent] = useAutoAnimate()
    const [menuData, setMenuData] = useState(ProductsData)

    const filter = (type) => {
        setMenuData(ProductsData.filter(item => item.type === type))
    }

    return (
        <div className={css.container} >
            <img src={Plane} alt="" />
            <h1>Our Featured Products</h1>
            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={() => setMenuData(ProductsData)}>All</li>
                    <li onClick={() => filter('skin care')}>Skin Care</li>
                    <li onClick={() => filter('conditioner')}>Conditioners</li>
                    <li onClick={() => filter('foundation')}>Foundations</li>
                </ul>
                <div className={css.list} ref={parent}>
                    {menuData.map((item, i) => (
                        <div key={i} className={css.product}>
                            <div className="left-s">
                                <div className="name">
                                    <span>{item.name}</span>
                                    <span>{item.detail}</span>
                                </div>
                                <span>${item.price}</span>
                                <div>Shop Now</div>
                            </div>
                            <img src={item.img} alt={item.img} className='img-p' />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Products
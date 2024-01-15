import { useMemo } from 'react';
import bg23 from '../assets/bg-23.png'
import separator from '../assets/separator.svg'
import { FunctionComponent } from 'react'

interface MenuItem {
    name: string;
    description: string;
    price: number;
    image: string;
}

interface Props {
    type: string;
    items: MenuItem[];
    tag: string;
}

const MenuItem: FunctionComponent<MenuItem> = ({ image, name, price, description }) => (
    <div className="dish-block">
        <div className="inner-box">
            <div className="dish-image">
                <img src={image} alt="" />
            </div>
            <div className="title clearfix">
                {name && <div className="ttl clearfix">
                    <h5>{name}</h5>
                </div>}
                <div className="price">
                    <span>${price}</span>
                </div>
            </div>
            <div className="text desc">{description}</div>
        </div>
    </div>
)

const MenuCarte: FunctionComponent<Props> = ({ type, items, tag }) => {
    const even = useMemo(() => items.filter((_, i) => i % 2 === 0), [items]);
    const odd = useMemo(() => items.filter((_, i) => i % 2 !== 0), [items]);

    return (
        <section className="menu-two">
            {/* <div className="left-bg"><img src={bg23} alt="" title="" /></div> */}
            <div className="auto-container">
                <div className="title-box centered">
                    <div className="subtitle"><span>{tag}</span></div>
                    <div className="pattern-image"><img src={separator} alt="" title="" /></div>
                    <h2>{type}</h2>
                </div>
                <div className="row clearfix">
                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div className="inner">
                            {even.map(menuItem => <MenuItem {...menuItem} />)}
                        </div>
                    </div>
                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                        <div className="inner">
                            {odd.map(menuItem => <MenuItem {...menuItem} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { MenuCarte }
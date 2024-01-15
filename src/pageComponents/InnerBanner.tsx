import bannerImage2 from '../assets/banner-image-2.jpg';
import separator from '../assets/separator.svg'

const InnerBanner = ({ title, image }: { title: string, image?: string }) => (
    <section className="inner-banner">
        <div className="image-layer" style={{ backgroundImage: `url(${image ?? bannerImage2})` }} />
        <div className="auto-container">
            <div className="inner">
                <div className="subtitle"><span>Delicioso e Incrível</span></div>
                <div className="pattern-image"><img src={separator} alt="" title="" /></div>
                <h1><span>{title}</span></h1>
            </div>
        </div>
    </section>
);

export { InnerBanner }
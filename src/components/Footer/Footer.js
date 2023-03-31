import './Footer.scss';
import { Link } from 'react-router-dom';
function Footer() {

    return (
      <footer className="footer">
        <ul className="footer__list">
          <li className="footer__item">
            <img
              className="footer__image"
              src="https://assets.shop.loblaws.ca/products/20318694001/b2/en/angle/20318694001_angle_a06_@2.png"
            />
            <p className="footer__tag footer__tag--rec">RECOMMENDED</p>
            <h4 className="footer__item-name">Coca Cola Zero</h4>
            <p className="footer__item-desc">
              Zero Sugar and Zero Calories Great Coke Taste. Zero Sugar.
            </p>
          </li>

          <li className="footer__item">
            <img
              className="footer__image"
              src="https://assets.shop.loblaws.ca/products/20318694001/b2/en/angle/20318694001_angle_a06_@2.png"
            />
            <p className="footer__tag footer__tag--rec">RECOMMENDED</p>
            <h4 className="footer__item-name">Coca Cola Zero</h4>
            <p className="footer__item-desc">
              Zero Sugar and Zero Calories Great Coke Taste. Zero Sugar.
            </p>
          </li>
          <li className="footer__item">
            <img
              className="footer__image"
              src="https://assets.shop.loblaws.ca/products/20318694001/b2/en/angle/20318694001_angle_a06_@2.png"
            />
            <p className="footer__tag footer__tag--rec">RECOMMENDED</p>
            <h4 className="footer__item-name">Coca Cola Zero</h4>
            <p className="footer__item-desc">
              Zero Sugar and Zero Calories Great Coke Taste. Zero Sugar.
            </p>
          </li>
        </ul>
      </footer>
    );
}

export default Footer;
import cx from 'classnames'
import './components.css'
import LanguageSelector from './LanguageSelector'

const BaseLayout = (props: any) => {
    return (
        <div className="baseLayout">
            <header className="baseLayout__header">
                <div className="baseLayout__header__left">
                    <svg
                        className="baseLayout__header__left__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1000 1000"
                        fill="#ffffff"
                    >
                        <path
                            fill="#ffffff"
                            d="M500,225.6C178.5,225.6,10,462.4,10,500c0,37.6,168.5,274.4,490,274.4c321.4,0,490-236.8,490-274.4C990,462.4,821.4,225.6,500,225.6z M500,711.1c-120.3,0-217.8-94.5-217.8-211.1S379.7,288.9,500,288.9c120.3,0,217.8,94.5,217.8,211.1S620.3,711.1,500,711.1z M500,500c-21.9,19.9-105.5-32.5-105.5,0c0,60.1,47.3,108.9,105.5,108.9c58.3,0,105.5-48.7,105.5-108.9c0-60.1-47.3-108.9-105.5-108.9C473.2,391.1,518.6,483,500,500z"
                        ></path>
                    </svg>

                    <span className={cx('baseLayout__header__left__text')}>
                        SensualVisions
                    </span>
                </div>
                <LanguageSelector />
            </header>
            <div className="baseLayout__body">{props.children}</div>
            <div className="baseLayout__footer">
                <div className={cx('buttonMD neutral300')}>
                    {props.footerText}
                </div>
            </div>
        </div>
    )
}

export default BaseLayout

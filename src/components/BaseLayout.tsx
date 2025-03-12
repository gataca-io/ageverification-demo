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
                        viewBox="0 0 576 512"
                    >
                        <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
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

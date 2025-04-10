import React from 'react';
import './components.css';
import cx from 'classnames';
import LanguageSelector from './LanguageSelector';

const BaseLayout = (props: any) => {
    return (
        <div className={cx('baseLayout')}>
            <header className="baseLayout__header">
                <div className="baseLayout__header__left">
                    <svg width="16" height="17" className="baseLayout__header__left__icon" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="$gat-icon-play-circle">
                            <path
                                id="Vector"
                                d="M8.00065 15.1673C11.6825 15.1673 14.6673 12.1825 14.6673 8.50065C14.6673 4.81875 11.6825 1.83398 8.00065 1.83398C4.31875 1.83398 1.33398 4.81875 1.33398 8.50065C1.33398 12.1825 4.31875 15.1673 8.00065 15.1673Z"
                                stroke="#DC3164"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path id="Vector_2" d="M6.66602 5.83398L10.666 8.50065L6.66602 11.1673V5.83398Z" stroke="#DC3164" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>

                    <p className="baseLayout__header__left__text neutral100 regular">
                        Adult <span className="neutral100 bold">Play Zone</span>
                    </p>
                </div>

                <LanguageSelector />
            </header>
            <div className={cx(props?.noRightPadding ? 'baseLayout__body baseLayout__body--noRightPadding' : 'baseLayout__body')}>{props.children}</div>
        </div>
    );
};

export default BaseLayout;

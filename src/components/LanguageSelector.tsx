import React from 'react';
import {useState} from 'react';
import i18n, {initialLang} from '../translations/i18n';
import './components.css';

const languages = [
    {code: 'en', name: 'English'},
    {code: 'es', name: 'Español'},
    {code: 'de', name: 'Deutsch'},
    {code: 'fr', name: 'Français'},
    {code: 'it', name: 'Italiano'},
    {code: 'pt', name: 'Português'}
];

const LanguageSelector = () => {
    const [lang, setLang] = useState(initialLang);

    const changeLanguageHandler = (e: any) => {
        const newLang = e.target.value;
        setLang(newLang);
        localStorage.setItem('i18nextLng', newLang);
        i18n?.changeLanguage(newLang);
    };

    return (
        <div className="languageSwitcher">
            <LanguageSwitcherSelector lang={lang} handleChangeLanguage={changeLanguageHandler} />
        </div>
    );
};

const LanguageSwitcherSelector = (props: any) => {
    const {lang, handleChangeLanguage} = props;
    return (
        <div className="languageSelector">
            <select className="languageSelector__select buttonSM neutral100" value={lang} onChange={handleChangeLanguage}>
                {languages.map((language) => (
                    <option key={language.code} value={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>
            <svg className="languageSelector__angleDown" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" version="1.1" id="Capa_1" width="12px" height="12px" viewBox="0 0 30.727 30.727">
                <g>
                    <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0   l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z" />
                </g>
            </svg>
        </div>
    );
};

export default LanguageSelector;

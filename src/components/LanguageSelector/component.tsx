import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { RouteComponentProps, withRouter } from 'react-router';
import useInternationalization from 'src/hooks/useInternationalization';
import './styles.css';

type LanguageSelectorPropsType = {
    language: string;
};

function LanguageSelector(props: RouteComponentProps<LanguageSelectorPropsType>) {
    const { _ } = useInternationalization();

    const availableLanguages = ['en', 'pt'];
    const availableFlags = { en: { name: 'English', value: 'US' }, pt: { name: 'Português', value: 'BR' } };
    const selectedLanguage = availableLanguages.includes(props.match.params.language)
        ? props.match.params.language
        : (navigator.language || (navigator as any).userLanguage).split('-')[0];

    const [showPopover, setShowPopover] = useState(false);

    const handleOnClick = useCallback(() => {
        setShowPopover(true);
    }, []);

    return (
        <div id="language" onClick={handleOnClick}>
            <span className="language">{_('header.provider.language')}</span>
            <div>
                <span className="flag">
                    <ReactCountryFlag countryCode={(availableFlags as any)[selectedLanguage].value} svg />
                </span>
                <span className="caret">
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
                {showPopover && (
                    <div className="popover box-shadow">
                        <ul>
                            {availableLanguages.map((language) => {
                                return (
                                    <li key={language}>
                                        <a href={`/${language}`}>
                                            <span className="language-name">
                                                {(availableFlags as any)[language].name}{' '}
                                            </span>
                                            <ReactCountryFlag
                                                countryCode={(availableFlags as any)[language].value}
                                                svg
                                            />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default withRouter(LanguageSelector);

import ReactCountryFlag from 'react-country-flag';

function ServerFlag({ server }: { server: string }) {
    if (server.startsWith('185.50')) {
        return <ReactCountryFlag countryCode="BR" svg />;
    } else if (server.startsWith('209.58')) {
        return <ReactCountryFlag countryCode="PL" svg />;
    } else if (server.startsWith('31.204')) {
        return <ReactCountryFlag countryCode="JP" svg />;
    } else if (server.startsWith('43.249')) {
        return <ReactCountryFlag countryCode="HK" svg />;
    } else if (server.startsWith('145.239')) {
        return <ReactCountryFlag countryCode="GB" svg />;
    } else if (server.startsWith('176.9') || server.startsWith('213.239') || server.startsWith('78.46')) {
        return <ReactCountryFlag countryCode="DE" svg />;
    } else if (server.startsWith('149.56') || server.startsWith('46.4')) {
        return <ReactCountryFlag countryCode="CA" svg />;
    } else if (server.startsWith('139.99')) {
        return <ReactCountryFlag countryCode="AU" svg />;
    }

    return <ReactCountryFlag countryCode="US" svg />;
}

export default ServerFlag;

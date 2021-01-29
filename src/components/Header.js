import React from 'react';
import Link from './Link'

const Header = () => {
    return (
        <div className="ui secondary pointing menu" id="yt--header">
            <Link href="/" className="item"><i class="video icon"></i>Live Streamer</Link>
            <Link href="/list" className="item">Wiki Search</Link>
            <Link href="/dropdown" className="item">Dropdown</Link>

            <GoogleAuth />
        </div>
    );
};

export default Header;
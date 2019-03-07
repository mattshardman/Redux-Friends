import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions';

function Friends({ loading, getFriends }) {
    useEffect(() => {
        getFriends();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            hi
        </div>
    );
}

const mapStateToProps = ({friends}) => {
    return friends;
}

export default connect(mapStateToProps, { getFriends })(Friends);
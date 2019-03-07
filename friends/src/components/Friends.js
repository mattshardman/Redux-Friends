import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getFriends } from '../actions';

function Friends({ loading, friends, getFriends }) {
    useEffect(() => {
        getFriends();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
        {
            friends.map(friend => 
            <div>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
            </div>
        )}
        </div>
    );
}

const mapStateToProps = ({friends}) => {
    return friends;
}

export default connect(mapStateToProps, { getFriends })(Friends);
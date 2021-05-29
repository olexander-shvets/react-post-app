import React from 'react';
import { Button } from 'reactstrap';

import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button outline color="info">All</Button>
            <Button type="button" className="btn btn-outline-secondary">Liked</Button>
        </div>
    )
}

export default PostStatusFilter;
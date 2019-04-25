import React, { PureComponent } from 'react';

import OldScrollBar from './old.jsx';
import NewScrollBar from './new.jsx';

class ScrollBar extends PureComponent {
    render() {
        return (
            <div>
                <h4>old</h4>
                <OldScrollBar />
                <h4>new</h4>
                <NewScrollBar />
            </div>
        );
    }
}

export default ScrollBar;

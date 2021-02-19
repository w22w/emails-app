import React, { useCallback, useEffect, useRef } from 'react'
import ScrollBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import EventHub from 'service/EventEmmitter';
import appConstants from 'common/appConstants';

const Scrollbar = (props) => {
    const { id, ref, ...rest } = props
    const scrollEl = useRef();
    
    const onScroll = useCallback((event) => {
        const { direction, scrollId } = event
        if (id === scrollId) {
            if (scrollEl.current) {
                window.MyScroll = scrollEl.current
                const { contentEl, contentWrapperEl } = scrollEl.current
                debugger
    
                if (direction === appConstants.scroll.direction.top) {
                    contentWrapperEl.scrollTop = 0
                } else if (direction === appConstants.scroll.direction.down) {
                    if (contentWrapperEl.offsetHeight < contentEl.offsetHeight) {
                        contentWrapperEl.scrollTop = contentEl.offsetHeight - contentWrapperEl.offsetHeight
                    }
                }
            }
        }
    
    }, [ id ])
    useEffect(() => {
        EventHub.on(appConstants.events.scroll, onScroll)
        return () => {
            EventHub.off(appConstants.events.scroll, onScroll)
        }
    }, [ onScroll ])
    
    
    return (<ScrollBar {...rest} ref={scrollEl} style={{ width: '100%', height: '100%' }}/>)
}

export default Scrollbar

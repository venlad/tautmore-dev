/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
import { string } from 'prop-types';
import {
    ControlBar, ForwardControl, PlaybackRateMenuButton,
    Player, PlayToggle, ReplayControl, BigPlayButton,
} from 'video-react';
import React, { Component } from 'react';

export default class VideoModal extends Component {
    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state, prevState) {
        // copy player state to this component's state
        this.setState({
            player: state,
        });
    }

    render() {
        const { videoUrl, thumbnail } = this.props;
        // eslint-disable-next-line react/destructuring-assignment
        console.log(this.state?.player?.ended);

        return (
            <>
                <Player
                    ref={(player) => {
                        this.player = player;
                    }}
                    autoHide
                    autoPlay
                    playsInline
                    poster={thumbnail}
                    src={videoUrl}
                    ended
                >
                    <BigPlayButton position="center" />
                    <ControlBar>
                        <PlayToggle />
                        <ForwardControl seconds={10} order={3.2} />
                        <ReplayControl seconds={10} order={2.2} />
                        <PlaybackRateMenuButton rates={[2, 1.5, 1.25, 1, 0.25, 0.5]} />
                    </ControlBar>
                </Player>
            </>
        );
    }
}

VideoModal.propTypes = {
    videoUrl: string,
    thumbnail: string,
};

VideoModal.defaultProps = {
    videoUrl: '',
    thumbnail: '',
};

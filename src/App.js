import React, { Component } from 'react';
import './App.css';
import CheckList from './CheckList'

const CheckListItem = ({ song, ...props }) => (
    <div>
        {song.title}
    </div>
)

class App extends Component {
    state = {
        songs: [
            {
                title: '前前前世',
                author: 'RADWIMPS',
                url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
                pic: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
                theme: '#505d6b'
            },
            {
                title: '光るなら(HLS)',
                author: 'Goose house',
                url: 'https://moeplayer.b0.upaiyun.com/aplayer/hls/hikarunara.m3u8',
                pic: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
            },
            {
                title: 'トリカゴ',
                author: 'XX:me',
                url: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3',
                pic: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg',
                theme: '#46718b'
            },
        ]
    }

    render() {
        const { songs } = this.state;
        return (
            <div className="App">
                <CheckList
                    data={songs}
                >
                    {song => <CheckListItem song={song} key={song.url} />}
                </CheckList>
            </div>
        );
    }
}

export default App;

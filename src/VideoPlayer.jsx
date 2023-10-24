// Provided by customer contact

import React from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';

export const VideoPlayer = (props) => {
  const videoRef = React.useRef(null)
  const playerRef = React.useRef(null)
  const { onReady } = props
  React.useEffect(() => {
    if (!videoRef.current) {
      return
    }
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js')
      videoRef.current.appendChild(videoElement)
      const player = (playerRef.current = videojs(
        videoElement,
        {
          muted: true,
          playsinline: true,
          preload: 'auto',
          loop: true,
          controls: true,
          poster: props.poster,
          experimentalSvgIcons: true,
          disablePictureInPicture: true,
          sources: props.sources,
          controlBar: {
            remainingTimeDisplay: false,
            volumePanel: false,
            pictureInPictureToggle: false,
          },
        },
        () => {
          if (onReady) {
            onReady(player)
          }
          player.ready(() => {
            player.play()
          })
        },
      ))
    } else {
      const player = playerRef.current
      player.src(props.sources)
      player.poster(props.poster)
    }
  }, [videoRef, onReady, props.sources, props.poster])
  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current
    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])
  return (<div data-vjs-player><div ref={videoRef} /></div>)
}

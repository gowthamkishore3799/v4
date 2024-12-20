---
date: '1'
title: 'Live Streaming Backend Services'
cover: './livestreaming.webp'
github: 'https://github.com/gowthamkishore3799/live-streaming'
external: 'https://medium.com/@gowthamkishore3/from-game-to-screen-demystifying-the-magic-behind-live-streaming-with-hls-f621c758ae28'

tech:
  - Go
  - HLS
  - AWS S3
  - Fiber
---

I developed a scalable live streaming server using HLS (HTTP Live Streaming), integrating encoding, transcoding, cloud storage, and CDN caching for smooth real-time video delivery. Using FFmpeg, I encoded and split video into segments, which were uploaded to AWS S3 for cloud storage. A CDN (e.g., AWS CloudFront) cached these segments for faster delivery. The entire process was automated using bash scripts, ensuring seamless segment processing and upload. Check out the full details [here](https://medium.com/@gowthamkishore3/from-game-to-screen-demystifying-the-magic-behind-live-streaming-with-hls-f621c758ae28).

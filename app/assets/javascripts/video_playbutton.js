$(document).ready(function() {
var videoPlayButton,
	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementById('home-video'),
    title_div = document.getElementById('button-div'),
    videoMethods = {
        renderVideoPlayButton: function() {
            if (videoWrapper.contains(video)) {
              this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
                bounds = video.getBoundingClientRect()
                videoPlayButton.style.left = bounds.left
                videoPlayButton.style.height = bounds.height
                videoPlayButton.style.width = bounds.width
                videoPlayButton.style.padding = bounds.width * 0.25
                title_div.style.height = (VisualViewport.height - (bounds.top + bounds.height)).toString() + 'px'
            }
        },

        formatVideoPlayButton: function() {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ');

        },

        hideVideoPlayButton: function() {
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
        }
	}

videoMethods.renderVideoPlayButton()
$(window).on("resize", function(){
    videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
    videoPlayButton.style.height = document.getElementById('home-video').getBoundingClientRect().height
    videoPlayButton.style.width = document.getElementById('home-video').getBoundingClientRect().width
    videoPlayButton.style.left = document.getElementById('home-video').getBoundingClientRect().left
    videoPlayButton.style.padding = document.getElementById('home-video').getBoundingClientRect().width * 0.25
});

});

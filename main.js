// Sample video data
const videos = [
  {
    title: "Learn HTML in 10 Minutes",
    channel: "CodeAcademy",
    views: "1M views",
    thumbnail: "assets/video-thumbnail.jpg"
  },
  {
    title: "CSS Grid Tutorial",
    channel: "DesignCourse",
    views: "500K views",
    thumbnail: "assets/video-thumbnail.jpg"
  },
  // Add more video objects as needed
];

// Function to display videos
function displayVideos(videoList) {
  const videoGrid = document.getElementById('video-grid');
  videoGrid.innerHTML = ''; // Clear existing videos

  videoList.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');

    videoCard.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}" />
      <div class="video-info">
        <h4>${video.title}</h4>
        <p>${video.channel}</p>
        <p>${video.views}</p>
      </div>
    `;

    videoGrid.appendChild(videoCard);
  });
}

// Initial display
displayVideos(videos);

// Search functionality
document.getElementById('search-btn').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.toLowerCase();
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(query) ||
    video.channel.toLowerCase().includes(query)
  );
  displayVideos(filteredVideos);
});

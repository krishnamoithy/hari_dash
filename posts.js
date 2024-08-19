document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
  
    // Sample posts data
    const posts = [
      {
        user: 'Alice',
        content: 'Just had a great day at the park!',
        type: 'text'
      },
      {
        user: 'Bob',
        content: 'Check out this cool video!',
        type: 'video',
        media: 'https://www.youtube.com/embed/tgbNymZ7vqY'
      },
      {
        user: 'Charlie',
        content: 'Here’s a beautiful sunset photo!',
        type: 'image',
        media: 'logo.png'
      },
      {
        user: 'Dave',
        content: 'Loving the new features in the app.',
        type: 'text'
      },
      {
        user: 'Eve',
        content: 'Had an amazing dinner last night!',
        type: 'image',
        media: 'logo.png'
      }
    ];
  
    // Function to render posts
    function renderPosts() {
      postsContainer.innerHTML = ''; // Clear any existing posts
  
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
  
        let mediaContent = '';
        if (post.type === 'video') {
          mediaContent = `<iframe width="560" height="315" src="${post.media}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        } else if (post.type === 'image') {
          mediaContent = `<img src="${post.media}" alt="Post image">`;
        }
  
        postElement.innerHTML = `
          <div class="post-header">
            <img src="https://i.imgur.com/4FbD7mF.png" alt="" class="post-img">
            <span class="post-user">${post.user}</span>
          </div>
          <div class="post-content">
            ${post.content}
            ${mediaContent}
          </div>
        `;
  
        postsContainer.appendChild(postElement);
      });
    }
  
    // Render posts when the page loads
    renderPosts();
  });
  
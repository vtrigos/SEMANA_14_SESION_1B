// VARIABLES
const url = 'https://jsonplaceholder.typicode.com/posts';
const viewPost = document.getElementById('viewPost');

// LISTENERS
viewPost.addEventListener('click', async () => {
  const posts = await readPosts();
  printPosts(posts);
});

// FUNCIONES
const readPosts = async () => {
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (error) {
    console.log('errorsito', error);
  }
};

const printPosts = (posts) => {
  let template = `
    <p>TITLE</p>
    <p>BODY</p>
  `;
  posts.forEach((post) => {
    template += `
      <div>${post.title}</div>
      <div>${post.body}</div>
    `;
  });
  document.getElementById('postContainer').innerHTML = template;
};
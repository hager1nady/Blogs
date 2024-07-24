
let allPosts = []

fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(json => {
        allPosts  = json.data;
        displayPosts()
      })



function displayPosts() {
    console.log(allPosts);
    let cartona = ``;
    console.log(allPosts);
    for (let i = 0; i < allPosts.length; i++) {
       cartona += `   <div class="col-md-7  card p-4 auto">
                <div class="post">
                    <div class="media">
                        <img src="images/man.jpg" width="60" class="mr-3" alt="...">
                        <div class="media-body">
                            <h5 class="mt-0">${allPosts[i].userName}</h5>
                      
                         ${moment(allPosts[i].createdAt)}
                        </div>
                    </div>
                    <hr>
                    <h3>${allPosts[i].title}</h3>
                    <p class="pt-4">${allPosts[i].description}</p>
                </div>
            </div>`
        
    }
    document.getElementById("myData").innerHTML = cartona
}





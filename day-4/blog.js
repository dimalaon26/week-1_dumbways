let dataBlog = [];

function addBlog(event) {
    event.preventDefault()


    let projectName = document.getElementById("input-projectname").value
    let startDate = document.getElementById("input-startdate").value
    let endDate = document.getElementById("input-end").value
    let description = document.getElementById("input-description").value
    let technologies = document.getElementById("input-checkbox").value
    let image = document.getElementById("input-image").files
    image = URL.createObjectURL(image[0])
    
    let data = {
        projectName,
        startDate,
        endDate,
        description,
        technologies,
        image,
    }

    dataBlog.push(data)
    console.log(dataBlog);

    for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);
    
    document.getElementById("contents").innerHTML += `
       
          <div id="contents" class="card-1">
                    <img class="card" src="${dataBlog[index].image}" alt="">
                    <h4 class="content-tittle">${dataBlog[index].projectName}</h4>
                    <p class="duration">Start date:${dataBlog[index].startDate} End date:${dataBlog[index].endDate}</p>
    
                    <p class="content-desc">${dataBlog[index].description}</p>
    
                    <img class="icon" src="/assets/js.png">
    
                    <div class="edit-article">
                        <p class="btn-content">Edit</p>
                        <p class="btn-content">Delete</p>
                    </div>
                 `
    }

}

console.log("konek lur")

var addPetBtn = $('#btnAddPet')
var petList = JSON.parse(localStorage.getItem('pets'))

addPetBtn.on("click", addPet)
fillExplorePets(petList, $('.listExplore'))
fillFavoritePets(petList, $('.listFavorite'))

function addPet(){
    
    var petName = $('#inputPetName').first().val()
    var petDesc = $('#inputPetDesc').first().val()
    var petImage = $('#inputPetImage').first().val()
    var petItem = {
        name: petName,
        desc: petDesc,
        image: petImage,
        loved: false,
    }
    
    console.log(petItem)
    petList.push(petItem)
    
    $('#inputPetName').first().val('')
    $('#inputPetDesc').first().val('')
    $('#inputPetImage').first().val('')
    
    savePet()
    
    console.log(petList)
    var target = $('.listExplore')
    fillExplorePets(petList, target)
}

function fillExplorePets(arr, targetElement){
    var html = ''
    
    arr.forEach(function(pet) {
        html += `
        <div class="col-sm-4 d-flex">
                <div class="card" style="width: 22rem;" data-toggle="modal" data-target="#modal-${pet.name}">
                        <img src="${pet.image}" class="card-img-top" alt="">
                        <div class="card-body">
                    <h2 class="card-title" id="petName">${pet.name}</h2>
                    <p class="card-text" id="petDesc">${pet.desc}</p>
               </div>
            </div>
        </div>

        <div class="modal fade" id="modal-${pet.name}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                
                <!--Content-->
                <div class="modal-content">
                    <!--Body-->
                    <div class="modal-body mb-0 p-0">                                        
                        <img src="${pet.image}" alt="" style="width:100%">
                    </div>
                    <!-- <p class="card-text" id="petDesc">${pet.desc}</p> -->
                    <!--Footer-->
                    <div class="modal-footer ">
                        <!-- <span class="mr-4">Do you love it?</span> -->
                        <!--Favorite-->
                        <a href="" class="love" id="loved">
                            <i class="far fa-heart"></i>
                        </a>
                            
                        <button type="button" class="btn btn-rounded btn-md ml-4 btn-tosca" data-dismiss="modal">
                            <i class="far fa-heart"></i>
                        </button>
                        
                        <button type="button" class="btn btn-rounded btn-md ml-4 btn-tosca" data-dismiss="modal">Close</button>
                    </div>
                    
                </div>
                <!--/.Content-->
                
            </div>
        </div>
        `
        // modalNum++
        targetElement.html(html)
    });
}

function fillFavoritePets(arr, targetElement){
    var html = ''
    
    arr.forEach(function(pet) {
        if(pet.loved === true){
            html += `
            <div class="col-sm-4 d-flex">
                    <div class="card" style="width: 22rem;" data-toggle="modal" data-target="#${pet.name}">
                            <img src="${pet.image}" class="card-img-top" alt="">
                            <div class="card-body">
                        <h2 class="card-title" id="petName">${pet.name}</h2>
                        <p class="card-text" id="petDesc">${pet.desc}</p>
                </div>
                </div>
            </div>

            <div class="modal fade" id="${pet.name}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    
                    <!--Content-->
                    <div class="modal-content">
                        <!--Body-->
                        <div class="modal-body mb-0 p-0">                                        
                            <img src="${pet.image}" alt="" style="width:100%">
                        </div>
                        <!-- <p class="card-text" id="petDesc">${pet.desc}</p> -->
                        <!--Footer-->
                        <div class="modal-footer ">
                            <!-- <span class="mr-4">Do you love it?</span> -->
                            <!--Favorite-->
                            <a href="#" class="love" id="loved">
                                <i class="far fa-heart"></i>
                            </a>
                            
                            <button type="button" class="btn btn-rounded btn-md ml-4 btn-tosca" data-dismiss="modal">Close</button>
                        </div>
                        
                    </div>
                    <!--/.Content-->
                    
                </div>
            </div>
        `
        }
        targetElement.html(html)
    });
}

function savePet(){
    localStorage.setItem('pets', JSON.stringify(petList))
}

function toggleFavorite(event){
    event.preventDefault()
    // console.log('clicked', event.target)
    // var target = $(event.target)
    // if(target.is('input')){
    //     var index = target.data('index')

    //     // petList[index].loved = !petList[index].loved

    //     console.log(index)
    // }

    console.log("Loved!")
}

$('.loved').on('click', toggleFavorite)
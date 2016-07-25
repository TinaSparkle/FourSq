
//alert("JS being picked up fine!")

function walk(){
    document.getElementById('walkImage').style.display = 'block';
    document.getElementById('restImage').style.display = 'none';
	    document.getElementById('flyImage').style.display = 'none';
	document.getElementById('runImage').style.display = 'none';
	document.getElementById('swimImage').style.display = 'none';
    
}

function fly(){
    document.getElementById('restImage').style.display = 'none';
    document.getElementById('walkImage').style.display = 'none';
    document.getElementById('flyImage').style.display = 'block';
	document.getElementById('runImage').style.display = 'none';
	document.getElementById('swimImage').style.display = 'none';
}

function run(){
    document.getElementById('restImage').style.display = 'none';
    document.getElementById('walkImage').style.display = 'none';
    document.getElementById('flyImage').style.display = 'none';
	document.getElementById('runImage').style.display = 'block';
	document.getElementById('swimImage').style.display = 'none';
}

function swim(){
    document.getElementById('restImage').style.display = 'none';
    document.getElementById('walkImage').style.display = 'none';
    document.getElementById('flyImage').style.display = 'none';
	document.getElementById('runImage').style.display = 'none';
	document.getElementById('swimImage').style.display = 'block';
}

//go back to initial resting image
function stop(){
    document.getElementById('restImage').style.display = 'block';
    document.getElementById('walkImage').style.display = 'none';
	    document.getElementById('flyImage').style.display = 'none';
	document.getElementById('runImage').style.display = 'none';
	document.getElementById('swimImage').style.display = 'none';
}
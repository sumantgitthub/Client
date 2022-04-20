function imagegallery(){
    const gallery = document.querySelector('.gallery');
    const previews = document.querySelectorAll('.room-pre img');

    previews.forEach(preview => {
        preview.addEventListener('click',function(){
            const smallsrc = this.src;
            const bigsrc = smallsrc.replace('small','big');
            gallery.src = bigsrc;
        })
    });
}

imagegallery();


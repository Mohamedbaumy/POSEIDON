function ResizeNavbarHeight(){
    var windoheight = window.innerHeight;
    windoheight = windoheight - 90;
    var navbar = document.querySelector(".navbar-nav");
    navbar.setAttribute("style","height:"+windoheight+"px");
}

function SetStudentNumHeight(){
    var groupheight = document.querySelector('.levels .level-body .group').offsetHeight;
    var studentnum = document.querySelectorAll('.levels .level-body .student-num');
    console.log(studentnum);
    for (let index = 0; index < studentnum.length; index++) {
        studentnum[index].setAttribute("style","height:"+groupheight+"px");

    }

};
ResizeNavbarHeight()
SetStudentNumHeight()
window.addEventListener('resize', ResizeNavbarHeight);
let projects = document.querySelectorAll(".project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {
  if (projects.length === 0) return; 

  if (num > projects.length) {
    slideIndex = 1;
  }

  if (num < 1) {
    slideIndex = projects.length;
  }


  projects.forEach((project) => {
    project.style.display = "none";
  });


  projects[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
  showProject(slideIndex += num);
}

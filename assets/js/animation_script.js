// Saare elements ko select karo jo animate hone chahiye
const elementsToAnimate = document.querySelectorAll('.stories, .slide, .contact_us, .why_choose_us ,.wcus_image_container , .wcus_points_container , .contact4_1 , .contact4_2, .details_cont_about, .img_cont_about');

// IntersectionObserver bana lo
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Jab element viewport me aayega to show class add ho jayegi
      entry.target.classList.add('show');
    }
  });
});

// Har ek element ko observer ke through observe karwa do
elementsToAnimate.forEach(element => {
  observer.observe(element);
});

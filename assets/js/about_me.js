// Create the main tag
const mainElement = document.createElement("main");

// Create the article tag
const articleElement = document.createElement("article");

// Add the article tag to the main tag
mainElement.appendChild(articleElement);

// Add the main tag to the document body
document.body.appendChild(mainElement);

const about_me = {
  
  header:"About me",
  professional_summary: "A highly organized and creative professional with 5+ years of experience in customer service and project management. Offering strong communication, problem-solving and analytical skills and a history of success developing impactful interactions between humans and computers. Focused on creating empowering experiences through user-centric design.",
  linkedin: "https://www.linkedin.com/in/dlozimthethwa/",
  education : [["Certificate in HIV Testing and Counselling HW/SP/150791", "HWSETA - Johannesburg, Gauteng", "February 2017 to February 2018"], ["High School (matric) in National Senior Certificate (NSC)", "Vryheid High School - Vryheid, KwaZulu-Natal", "January 2004 to December 2008"]],

  display_heading: function() {
  const html = `
      <h1>About me</h1>
      <p>${about_me.professional_summary}</p>
      <a href="${about_me.linkedin}" style="text-decoration: none;color: black;"><i class="bi bi-linkedin">${about_me.linkedin}</i></a>
      <hr>`;

  let mainTag = document.getElementsByTagName("main")[0];
  let articleTag = mainTag.getElementsByTagName("article")[0];
  let frame = document.createElement("section")
  frame.innerHTML = html;
  articleTag.appendChild(frame);

  },

  display_education: function() {
  let educationSection = document.createElement("section");
  educationSection.style.width = "40%";
  educationSection.style.verticalAlign = "text-top";
  educationSection.style.paddingRight = "10px";
  
  let educationTitle = document.createElement("h2");
  educationTitle.textContent = "Education";
  educationSection.appendChild(educationTitle);
  
  let educationHR = document.createElement("hr");
  educationSection.appendChild(educationHR);

  let educationArray = about_me.education;
  for (let i = 0; i < educationArray.length; i++) {
    let educationItem = educationArray[i];
    
    
    let jobTitle = document.createElement("span");
    jobTitle.classList.add("job_title");
    jobTitle.textContent = educationItem[0];
    educationSection.appendChild(jobTitle);

    let employer = document.createElement("span");
    employer.classList.add("employer");
    employer.textContent = educationItem[1];
    educationSection.appendChild(employer);
    
    let duration = document.createElement("span");
    duration.classList.add("duration");
    duration.textContent = educationItem[2];
    educationSection.appendChild(duration);
    let p = document.createElement("p");
    educationSection.appendChild(p);
  }

  articleElement.appendChild(educationSection);
  let p = document.createElement("p");
  articleElement.appendChild(p);
  }

};

function main() {
  // Build the basic structure of the page
  // about_me.build_structure();

  // Display the heading and professional summary
  about_me.display_heading();

  // Display the education section
  about_me.display_education();
}

// Call the main function when the page finishes loading
window.onload = main;
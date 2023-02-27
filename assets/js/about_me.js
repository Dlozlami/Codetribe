const about_me = {
  header:"About me",
  professional_summary: "A highly organized and creative professional with 5+ years of experience in customer service and project management. Offering strong communication, problem-solving and analytical skills and a history of success developing impactful interactions between humans and computers. Focused on creating empowering experiences through user-centric design.",
  linkedin: "https://www.linkedin.com/in/dlozimthethwa/",
  const education = [
  [
      {
        type: "Certificate",
        field: "HIV Testing and Counselling",
        institution: "HWSETA",
        location: "Johannesburg, Gauteng",
        date: "February 2017 to February 2018"
      }
    ],
    [
      {
        type: "High School",
        level: "National Senior Certificate (NSC)",
        institution: "Vryheid High School",
        location: "Vryheid, KwaZulu-Natal",
        date: "January 2004 to December 2008"
      }
    ]
  ],

  function build_structure() {
    // Create the main tag
    const mainElement = document.createElement("main");

    // Create the article tag
    const articleElement = document.createElement("article");

    // Add the article tag to the main tag
    mainElement.appendChild(articleElement);

    // Add the main tag to the document body
    document.body.appendChild(mainElement);
  },

  
  function displayHeading() {
  const html = `
    <section>
      <h1>About me</h1>
      <p>${professional_summary}</p>
      <a href="${linkedin}" style="text-decoration: none;color: black;"><i class="bi bi-linkedin">${linkedin}</i></a>
      <hr>
    </section>`;
  return html;
  },

  function displayEducation() {
  let educationSection = document.createElement("section");
  educationSection.style.width = "40%";
  educationSection.style.verticalAlign = "text-top";
  educationSection.style.paddingRight = "10px";
  
  let educationTitle = document.createElement("h2");
  educationTitle.textContent = "Education";
  educationSection.appendChild(educationTitle);
  
  let educationHR = document.createElement("hr");
  educationSection.appendChild(educationHR);

  let educationArray = education;
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

    let br = document.createElement("br");
    educationSection.appendChild(br);
    let br2 = document.createElement("br");
    educationSection.appendChild(br2);
  }

  let mainTag = document.getElementsByTagName("main")[0];
  let articleTag = mainTag.getElementsByTagName("article")[0];
  articleTag.appendChild(educationSection);
  }

};

function main() {
  
}

// Call the main function when the page finishes loading
window.onload = main;
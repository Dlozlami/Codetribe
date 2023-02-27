const about_me = {
  header:"About me",
  professional_summary: "A highly organized and creative professional with 5+ years of experience in customer service and project management. Offering strong communication, problem-solving and analytical skills and a history of success developing impactful interactions between humans and computers. Focused on creating empowering experiences through user-centric design.",
  linkedin: "https://www.linkedin.com/in/dlozimthethwa/",
  

  function build_structure() {
    // Create the main tag
    const mainElement = document.createElement("main");

    // Create the article tag
    const articleElement = document.createElement("article");

    // Add the article tag to the main tag
    mainElement.appendChild(articleElement);

    // Add the main tag to the document body
    document.body.appendChild(mainElement);
  }

};

function main() {
  
}

// Call the main function when the page finishes loading
window.onload = main;
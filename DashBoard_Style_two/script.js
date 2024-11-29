// Sidebar
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        const submenu = button.nextElementSibling;
        submenu.classList.toggle('show'); 
    });
});

// 


class Timeline {
    constructor(containerSelector) {
      this.container = document.querySelector(containerSelector);
      this.entries = [];
    }
  
    addEntry({ time, description, color = "blue" }) {
      this.entries.push({ time, description, color });
    }
  
    render() {
      this.container.innerHTML = "";
      this.entries.forEach(({ time, description, color }) => {
        const entry = document.createElement("div");
        entry.classList.add("timeline-entry");
  
        const timeElement = document.createElement("div");
        timeElement.classList.add("time");
        timeElement.textContent = time;
  
        const icon = document.createElement("div");
        icon.classList.add("icon");
        if (color === "orange") icon.classList.add("orange");
  
        const descriptionElement = document.createElement("p");
        descriptionElement.innerHTML = description;
  
        entry.appendChild(icon);
        entry.appendChild(timeElement);
        entry.appendChild(descriptionElement);
  
        this.container.appendChild(entry);
      });
    }
  }
  
  // Initialize the timeline
  const timeline = new Timeline(".timeline");
  
  // Add timeline entries
  timeline.addEntry({
    time: "10:00",
    description: `Connection request was sent to <a href="#">Michael Fadiman</a> in USA - Owners - Retail (1-10) Campaign.`,
    color: "blue",
  });
  
  timeline.addEntry({
    time: "10:00",
    description: `Profile of <a href="#">Hannah Finsher</a> as viewed in Canada - Owners - Retail (1-10) Campaign.`,
    color: "orange",
  });
  
  timeline.addEntry({
    time: "10:00",
    description: `Message was sent to <a href="#">Ishtiaq Ahmed</a> in USA - Owners - Retail (1-10) Campaign.`,
    color: "blue",
  });
  
  // Render the timeline
  timeline.render();
  


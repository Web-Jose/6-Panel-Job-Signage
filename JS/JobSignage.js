document.addEventListener("DOMContentLoaded", () => {
  fetch("https://fresnostatehousing.org/wp-json/wp/v2/job-listing")
    .then((response) => response.json())
    .then((jobs) => {
      const container = document.querySelector(".JobContainer");

      jobs.slice(0, 6).forEach((job) => {
        const jobDiv = document.createElement("div");
        jobDiv.classList.add("Job");
        jobDiv.innerHTML = `
                    <div>
                    <i class="fa-solid fa-folder-open"></i>
                    <span class="JobInfo">${job.title.rendered}</span>
                    </div>
                    <div>
                    <i class="fa-solid fa-clock"></i>
                    <span class="JobInfo">Due Date: ${job.application_due_date}</span>
                    </div>`;

        container.appendChild(jobDiv);
      });
    });
});

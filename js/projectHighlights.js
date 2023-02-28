const projectsContainer = document.getElementById('project-highlights-container')

const projectsData = [
    {
        projectName: 'Adonis',
        image: 'img/adonis.webp',
        details: 'The app can provide a range of features, such as appointment scheduling, medication reminders, electronic health records, and secure messaging to facilitate communication between patients and healthcare providers. It can help streamline healthcare processes, improve patient outcomes, and enhance the overall quality of care.',
        tools: ["HTML", "CSS", 'REACT', 'NODEJS'],
        github: 'https://github.com',
        website: 'https://dribbble.com/shots/20756338-Healthcare-but-SaaS',
    },
    {
        projectName: 'Coinvest',
        image: 'img/coinvest.webp',
        details: "An app that can provide a range of features, such as real-time market data, price alerts, and secure storage for digital assets. The app can help users stay informed about the latest developments in the world of cryptocurrencies, make informed investment decisions, and manage their digital assets more effectively.",
        tools: ["HTML", "CSS", 'REACT', 'NODEJS'],
        github: 'https://github.com/',
        website: 'https://dribbble.com/shots/20755769-Logo-Branding-Identity-design-modern-minimalist',
    },
    {
        projectName: 'Ewpay',
        image: 'img/ewPay.webp',
        details: "A money management tool provides a range of features, such as peer-to-peer money transfers, bill payment, and online shopping. The app can be linked to a user's bank account or credit card to facilitate secure and convenient transactions. It can help users manage their finances more effectively, avoid the need for cash or checks, and simplify the process of paying bills and making purchases. It can be a useful tool for both personal and business use.",
        tools: ["HTML", "CSS", 'REACT', 'NODEJS'],
        github: 'https://github.com/',
        website: 'https://dribbble.com/shots/20756745-EwPay-Dashboard',
    }
]

const projectHighlights = projectsData.map((data) => {
    const toolsList = data.tools.map((tools) => {
        return `<li>${tools} </li>`
    })
    return `<div class="projects-container nth-PG">
                    <div class="project-highlight-content scroll-in">
                        <a href="${data.website}" target="_blank">
                            <div class="project-title">
                                <h5> Project Highlight </h5>
                                <h3 class="project-name">${data.projectName}</h3>
                            </div>
                        </a>
                        <div class="project-details">
                            <p>
                            ${data.details}
                            </p>
                        </div>
                        <div class="project-tools nth-PG">
                            <ul>
                                ${toolsList.join().replaceAll(",", " ")}
                            </ul>
                        </div>
                        <div class="project-links nth-PG">
                            <a href="${data.github}" target="_blank"> <i class="ri-github-fill"></i></a>
                            <a href="${data.website}" target="_blank"> <i
                                    class="ri-global-line"></i></a>
                        </div>
                    </div>
                    <div class="project-image-content scale-in">
                        <a href="${data.website}" target="_blank">
                            <img class="project-image" src="${data.image}" alt="project image" loading="lazy">
                        </a>
                    </div>
                </div>`
})

projectsContainer.insertAdjacentHTML("afterbegin", projectHighlights.join(' '))
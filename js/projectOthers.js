const otherProjectContentContainer = document.getElementById('other-projects-content-container')

const otherProjectData = [
    {
        title: 'Pixel Playground',
        github: 'https://www.github.com',
        website: 'https://www.codepen.com',
        description: 'A coding playground.',
        tools: ['HTML, CSS, JAVASCRIPT, REACT'],
    },
    {
        title: 'Digital Dreamers',
        github: '',
        website: 'https://www.picsello.com',
        description: 'A digital photo blog. Log in and start now.',
        tools: ['HTML, CSS, JAVASCRIPT, REACT'],
    },
    {
        title: 'Code Craze',
        github: '',
        website: 'https://www.codeacademy',
        description: 'A coding playground.',
        tools: ['HTML, CSS, JAVASCRIPT, REACT'],
    },
    {
        title: 'Web Wizardry',
        github: 'https://www.github.com',
        website: 'https://www.google.com',
        description: 'A coding playground.',
        tools: ['HTML, CSS, JAVASCRIPT, REACT'],
    }
]

const otherProjectsList = otherProjectData.map((data) => {
    const toolsList = data.tools.map((tool) => {
        return `<li> ${tool} <li/>`
    })

    return `<div class="other-project scale-in">
                        <a href="${data.website}" target="_blank">
                            <div class="other-project-icons">
                                <i class="ri-folders-fill"></i>
                                <div>
                                    <a href="${data.github ? data.github : ''}" target="_blank"> <i class="${data.github ? 'ri-github-line' : ""}"></i> </a>
                                    <a href="${data.website}" target="_blank"> <i class="ri-global-line"></i> </a>
                                </div>
                            </div>
                            <h4> ${data.title}</h4>
                            <p> ${data.description} </p>
                            <ul class="other-tools">
                               ${toolsList.join().replaceAll(",", " ")}
                            </ul>
                        </a>
                    </div>`
})




otherProjectContentContainer.insertAdjacentHTML("afterbegin", otherProjectsList.join(' '))

const viewMoreBtn = document.querySelector('.view-more-btn')
const otherProjects = document.querySelectorAll('.other-project')
const viewBtnText = document.getElementById('viewBtn')
const projectsToShow = 2
const projectsList = [...otherProjects]
const otherTotalProjects = projectsList.length
const viewMoreText = 'View More'
const viewLessText = 'View Less'

if(otherTotalProjects < projectsToShow) {
    viewMoreBtn.classList.add('display-none')
}
projectsList.slice(projectsToShow).forEach((item) => {
    item.classList.add('hide-project')
})
viewMoreBtn.addEventListener('click', () => {
    projectsList.slice(projectsToShow).forEach((item) => {
        item.classList.toggle('hide-project')
        if(item.classList.contains('hide-project')){
            viewBtnText.textContent = viewMoreText
        } else viewBtnText.textContent = viewLessText
    })
})
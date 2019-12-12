import './styles/tabs.css'

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger')
    }

    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toogleTabs(e);
                this.toogleContent(e)
            })
        })
    }

    toogleTabs(e) {
        //remove current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'))

        //adding new active class to clicked tabs
        e.target.classList.add('active');
    }

    toogleContent(e) {
        //remove current active classes from content.
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });

        //add new active  to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);

        content.classList.add('active');
    }
}

export { Tabs as default }
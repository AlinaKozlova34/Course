class Tooltip {}


class ProjectItem {
    constructor(id) {
        this.id = id;
    }
}
    

class ProjectList {
    projects = [];

    constructor() {
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id));
        }
        console.log(this.projects);
        // console.log(prjItems);
    }
}


class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedPrijectList = new ProjectList('finished');
    }
}

App.init();
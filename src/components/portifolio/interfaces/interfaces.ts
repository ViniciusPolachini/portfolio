export interface IProject
{
    title: string,
    technologies: Array<string>,
    description: string,
    icon: string
}

export interface IPortfolio
{
    title: string,
    projects: Array<IProject>
}

interface LinkData {
    url: string,
    icon: string
}
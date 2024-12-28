

const data = [
    {
        id: 1,
        title: "FastFlow",
        slug: 'fastflow.sa',
        category: ['Portfolio'],
        description: 'FastFlow, A portfolio website that made for TEST',
        src: '/assets/img/project/project1/fastflow.png',
        srcSlider: '/assets/img/project/project1/fastflow.png',
        overlay: 2,
    },
    {
        id: 2,
        title: "LearningCorner",
        slug: 'learningcorner.net',
        src: '/assets/img/project/project1/learncorner.png',
        srcSlider: '/assets/img/project/project1/learncorner.png',
        category: ['Portfolio'],
        description: 'Cal was first. The first public university in the great state of California. They are the pioneers. They are the trailblazers who started it all.',
        overlay: 2,

    },
    //  {
    //     id: 3,
    //     title: "WAKAN",
    //     slug: 'wakan',
    //     src: '/assets/img/project/project1/wakan.png',
    //     srcSlider: '/assets/img/project/project1/wakan.png',
    //    category: ['Portfolio'],
    //      description: 'Once the brand strategy was sharp and real for everyone inside of the company, all the brand behavior started to roll out as stationary material.',
    //     overlay: 2,
    //  },
    
   
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item.slug)
        return "https://" + item.slug;

    return '';
};
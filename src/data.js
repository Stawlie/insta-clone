import faker from 'faker'


const newArr = (Array.from(Array(20).keys())).map(item => {

    const commentNum = Math.floor(Math.random() * 20)

    return {
        link: faker.image.image(),
        name: faker.internet.userName(),
        desc: faker.lorem.sentence(),
        comments: (Array.from(Array(commentNum).keys()).map(item => {
            return {
                username: faker.internet.userName(),
                comment: faker.lorem.sentence()
            }
        }))
    }
})


export default newArr

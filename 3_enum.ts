// Enum это сущность которая помагает структурировать код если присутсвуют какие то однотипные элементы

enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershapReverse = Membership[2]
console.log(membership) // 1
console.log(membershapReverse) // Premium

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)

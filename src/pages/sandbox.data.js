
const user1 = {
    _id: '1',
    firstName: 'Joe',
    lastName: 'Knowles',
    email: 'j@k.com',
    password: '123123123',
    needsPwUpdate: false,
    role: 'Admin',
    groups: [],
    avents: [],
    avails: []
};

const user2 = {
    _id: '2',
    firstName: 'Sue',
    lastName: 'Smith',
    email: 's@s.com',
    password: '123123123',
    needsPwUpdate: false,
    role: 'User',
    groups: [],
    avents: [],
    avails: []
};

const user3 = {
    _id: '3',
    firstName: 'Bill',
    lastName: 'Withers',
    email: 'b@w.com',
    password: '123123123',
    needsPwUpdate: false,
    role: 'User',
    groups: [],
    avents: [],
    avails: []
};

const user4 = {
    _id: '4',
    firstName: 'Fred',
    lastName: 'Flinstone',
    email: 'f@f.com',
    password: '123123123',
    needsPwUpdate: false,
    role: 'User',
    groups: [],
    avents: [],
    avails: []
};

const avail1 = {
    _id: '1',
    user: user1,
    date: new Date(),
    start: '11:00',
    end: '12:00',
    avent: avent1,
    note: 'Avail1 note'
};

const avail2 = {
    _id: '2',
    user: user2,
    date: new Date(),
    start: '3:00',
    end: '5:00',
    avent: avent2,
    note: 'Avail2 note'
};

const avail3 = {
    _id: '3',
    user: user2,
    date: new Date(),
    start: '3:00',
    end: '5:00',
    avent: avent2,
    note: 'Avail3 note'
};

const avail4 = {
    _id: '4',
    user: user2,
    date: new Date(),
    start: '3:00',
    end: '5:00',
    avent: avent2,
    note: 'Avail4 note'
};

const avent1 = {
    _id: '1',
    name: 'Avent One',
    owner: user1,
    avails: [avail1],
    users: [user1, user2],
    note: 'Avent1 note'
};

const avent2 = {
    _id: '2',
    name: 'Avent Two',
    owner: user2,
    avails: [avail2],
    users: [user1, user2],
    note: 'Avent2 note'
};

const avent3 = {
    _id: '3',
    name: 'Avent Three',
    owner: user2,
    avails: [avail2],
    users: [user1, user2],
    note: 'Avent3 note'
};

const avent4 = {
    _id: '4',
    name: 'Avent Four',
    owner: user2,
    avails: [avail2],
    users: [user1, user2],
    note: 'Avent4 note'
};

const group1 = {
    _id: '1',
    name: "My Group1",
    owner: user1,
    users: [user1, user2],
    avents: [avent1, avent3, avent4],
    note: 'Group1 note'
};

const group2 = {
    _id: '2',
    name: "My Group2",
    owner: user2,
    users: [user1, user2],
    avents: [avent2],
    note: 'Group2 note'
};

const group3 = {
    _id: '3',
    name: "My Group3",
    owner: user1,
    users: [user1, user2],
    avents: [avent2, avent4],
    note: 'Group1 note'
};

const group4 = {
    _id: '4',
    name: "My Group4",
    owner: user2,
    users: [user1, user2],
    avents: [avent3],
    note: 'Group2 note'
};

group1.users[0].groups.push(group1);
group1.users[0].groups.push(group2);
group1.avents[0].group = group1;
group1.avents[0].avails[0].avent = avent1;


group2.users[1].groups.push(group1);
group2.users[1].groups.push(group2);

export {
    user1, user2,
    avent1, avent2,
    avail1, avail2,
    group1, group2
};

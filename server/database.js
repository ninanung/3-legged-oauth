/*
{
    username: '', unique
    password: '',
    email: '',
    user_id: '', unique
}
*/
const users = [
    {
        username: 'user1',
        password: 'user1',
        email: 'user1.test@gtest.com',
        user_id: 'zsIwJM6rNckCXfYO30YuIa9lZ5hCUSWR'
    },
    {
        username: 'client',
        password: 'client',
        email: 'client.test@test.com',
        user_id: 'gMr66Rx9LwUSESGzwOHxwDf4oD3DHtHG'
    }
];

/*
{
    appname: '',
    user_id: '',
    client_id: '', unique
    client_secret: '', unique
    redirect_url: '',
    registered_user_ids: [
        {
            user_id: '',
            scope: '',
        }
    ],
}
*/
const apps = [];

/*
{
    token: '', unique
    client_id: '',
    user_id: '', 
}
*/
const tokens = [];

/*
{
    state: '', unique
    user_id: '',
    code: '',
}
*/
const states = [];

module.exports = {
    users,
    apps,
    tokens,
    states,
}
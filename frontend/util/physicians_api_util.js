export const fetchPhysicians = () => {
    return $.ajax({
        url: '/api/physicians',
        method: 'GET',
    })
}
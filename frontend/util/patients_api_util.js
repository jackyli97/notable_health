export const fetchPatients = (physician_id) => {
    return $.ajax({
        url: `/api/patients/${physician_id}`,
        method: 'GET',
    })
}
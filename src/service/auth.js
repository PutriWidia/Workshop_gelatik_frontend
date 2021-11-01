import api from '@/services/api'

export default {
    getUsers() {
        return api.post('/admin/getUsers')
    }
}
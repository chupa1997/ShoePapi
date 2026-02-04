import api from './api'

export const getAllUsers = async () => (await api.get('/users')).data
export const updateUser = async (id, formData) =>
  (
    await api.put(`/users/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  ).data
export const deleteUser = async (id) => (await api.delete(`/users/${id}`)).data

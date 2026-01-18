import api from './api'

export const getOrders = async () => (await api.get('/orders')).data
export const updateOrder = async (id, data) =>
  (await api.put(`/orders/${id}`, data)).data
export const deleteOrder = async (id) =>
  (await api.delete(`/orders/${id}`)).data

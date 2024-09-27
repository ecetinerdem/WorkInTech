import {
  addContactsDetails,
  deleteContactsDetails,
  getContacts,
  getContactsDetails,
} from './api';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

export function useContacts() {
  return useQuery({
    queryKey: ['Contacts', 'List'],
    queryFn: getContacts,
  });
}

export function useContactsDetails(id) {
  return useQuery({
    queryKey: ['Contacts', 'List', id],
    queryFn: () => getContactsDetails(id),
  });
}

export function useDeleteContacts() {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (id) => deleteContactsDetails(id),
    onSuccess: async (data, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ['Contacts', 'Detail', variables.id],
      });
      await queryClient.invalidateQueries({
        queryKey: ['Contacts', 'List'],
      });
    },
  });
}

export function useAddContacts() {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (data) => addContactsDetails(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['Contacts', 'Detail'],
      });
    },
  });
}

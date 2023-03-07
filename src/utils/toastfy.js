import { toast } from 'react-toastify';

export const success = (msg) => {
  toast.success(msg, {
    toastId: 'success'
  });
}
export const error = (msg) => {
  toast.error(msg, {
    toastId: 'error'
  });
}

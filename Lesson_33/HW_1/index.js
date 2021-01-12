const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export const getTasksList = url => fetch(`${baseUrl}`).then(task => task.json());
export const getTaskById = taskId => fetch(`${baseUrl}/${taskId}`).then(taskId => taskId.json());

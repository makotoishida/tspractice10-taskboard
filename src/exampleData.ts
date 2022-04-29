import type { Project } from './taskboard'

export default [
  {
    title: 'Project 1',
    lanes: [
      {
        title: 'To Do',
        tasks: [
          { title: 'Task 1', description: 'Desc 1' },
          {
            title: 'Task 2',
            description: 'Desc 2',
            dueDate: new Date(2022, 5, 12),
          },
        ],
      },
      {
        title: 'Doing',
        tasks: [
          {
            title: 'AAAAAA',
            description: 'ADADADaDAAd dsad',
            dueDate: new Date(2022, 4, 30),
          },
        ],
      },
      {
        title: 'Done',
        tasks: [
          { title: 'Task 0', description: '000000' },
          {
            title: 'MPMPMPMPmpmpmp',
            description: 'Djkfjdksajfkdsam dsadsa',
          },
        ],
      },
    ],
  },
  {
    title: 'Project 2',
    lanes: [
      {
        title: 'To Do',
        tasks: [{ title: 'Task 1', description: 'Desc 1' }],
      },
      {
        title: 'Doing',
        tasks: [
          {
            title: 'AAAAAA',
            description: 'ADADADaDAAd dsad',
            dueDate: new Date(2022, 4, 30),
          },
        ],
      },
      {
        title: 'Done',
        tasks: [
          {
            title: 'MPMPMPMPmpmpmp',
            description: 'Djkfjdksajfkdsam dsadsa',
            dueDate: new Date(2022, 4, 1),
          },
        ],
      },
    ],
  },
] as Project[]

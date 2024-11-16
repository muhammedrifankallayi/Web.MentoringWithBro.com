export const navbarData = [
  // {
  //     routeLink: 'dashboard',
  //     icon: 'fal fa-home',
  //     label: 'Dashboard'
  // },
  {
    routeLink: 'user-list',
    icon: 'add',
    label: 'Users',
    children:[]
  },
  {
    routeLink: 'student-list',
    icon: 'add',
    label: 'Students',
    children:[
      {
        routeLink: 'student-list',
    icon: 'delete',
    label: 'item 1',
      },
      {
        routeLink: 'student-list',
    icon: 'highlight',
    label: 'item 2',
      }
    ]
  },
  {

    routeLink: 'faculty',
    icon: 'add',
    label: 'Faculty',
    children:[
      {
        routeLink: 'student-list',
    icon: 'fa fa-list-ul',
    label: 'item 1',
      },
      {
        routeLink: 'student-list',
    icon: 'fa fa-list-ul',
    label: 'item 2',
      }
    ]
  },

  {

    routeLink: 'courses',
    icon: 'add',
    label: 'Courses',
    children:[]
  },


  {

    routeLink: 'student-week',
    icon: 'edit',
    label: 'Student Week',
    children:[]
  },

  {

    routeLink: 'batch-list',
    icon: 'insert_comment',
    label: 'Batch List',
    children:[]
  },

];

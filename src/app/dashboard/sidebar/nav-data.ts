export const navbarData:Route[] = [
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
    children:[]
  },
  {

    routeLink: 'faculty',
    icon: 'add',
    label: 'Faculty',
    children:[ ]
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



interface ChildRoute {
  routeLink: string;
  icon: string;
  label: string;
}

interface Route {
  routeLink: string;
  icon: string;
  label: string;
  children?: ChildRoute[];
}
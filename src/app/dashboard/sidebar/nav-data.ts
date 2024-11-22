export const navbarData:Route[] = [
  // {
  //     routeLink: 'dashboard',
  //     icon: 'fal fa-home',
  //     label: 'Dashboard'
  // },
  {
    routeLink: 'dashboard',
    icon: 'equalizer',
    label: 'Dashboard',
    children:[]
  },

  {
    routeLink: 'user-list',
    icon: 'group',
    label: 'Users',
    children:[]
  },
  {
    routeLink: 'student-list',
    icon: 'person',
    label: 'Students',
    children:[]
  },
  {

    routeLink: 'faculty',
    icon: 'streetview',
    label: 'Faculty',
    children:[ ]
  },

  {

    routeLink: 'courses',
    icon: 'school',
    label: 'Courses',
    children:[]
  },


  {

    routeLink: 'student-week',
    icon: 'menu',
    label: 'Student Week',
    children:[]
  },

  {

    routeLink: 'batch-list',
    icon: 'layers',
    label: 'Batch List',
    children:[]
  },
  {

    routeLink: 'task-add-for-course',
    icon: 'layers',
    label: 'Course Task Add',
    children:[]
  },

  {

    routeLink: 'student-join-out-report',
    icon: 'assessment',
    label: 'Monthly Student Report',
    children:[]
  },

  {

    routeLink: 'sales-report',
    icon: 'report',
    label: 'Sales Report',
    children:[]
  },
  {

    routeLink: 'course-post',
    icon: 'article',
    label: 'Course To Post',
    children:[]
  },
  {

    routeLink: 'configuration',
    icon: 'settings',
    label: 'Application Configuration',
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